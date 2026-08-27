const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9\s().-]{7,18}$/;
const hotelCategories = ["Standard", "Deluxe", "Luxury"];

export function validateEnquiry(input) {
    const errors = {};
    const body = input || {};

    // 1. Keep original types intact to mirror strict NestJS DTO validation
    const fullName = body.fullName;
    const contactNumber = body.contactNumber;
    const countryCode = body.countryCode;
    const email = body.email;
    const dateOfTravel = body.dateOfTravel;
    const numberOfPeople = body.numberOfPeople;
    const hotelCategory = body.hotelCategory;
    const numberOfChildren = body.numberOfChildren;

    // 2. Validate exact field structures
    if (fullName === undefined || fullName === null || String(fullName).trim() === "") {
        errors.fullName = "Full name is required.";
    }

    // Match backend phone validation error string
    if (!contactNumber || !phoneRegex.test(String(contactNumber).trim())) {
        errors.contactNumber = "Enter a valid phone number";
    }

    // Match backend country code validation error string
    if (!countryCode || !/\+\b[1429]{1}\d{0,2}\b/.test(String(countryCode).trim())) {
        errors.countryCode = "Enter a valid country code";
    }

    if (!email || !emailRegex.test(String(email).trim())) {
        errors.email = "Enter a valid email address.";
    }

    if (!dateOfTravel) {
        errors.dateOfTravel = "Travel date is required.";
    } else {
        const date = new Date(`${dateOfTravel}T00:00:00`);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (Number.isNaN(date.getTime()) || date <= today) {
            errors.dateOfTravel = "Travel date must be in the future.";
        }
    }

    // Match backend numeric integer structure
    if (numberOfPeople === undefined || numberOfPeople === null || !Number.isInteger(numberOfPeople) || numberOfPeople < 1) {
        errors.numberOfPeople = "Number of people must be at least 1.";
    }

    // Match backend enum structural selection error string
    if (!hotelCategories.includes(hotelCategory)) {
        errors.hotelCategory = "Select a valid hotel category";
    }

    if (numberOfChildren !== undefined && numberOfChildren !== null && (!Number.isInteger(numberOfChildren) || numberOfChildren < 0)) {
        errors.numberOfChildren = "Children must be 0 or more.";
    }

    // 3. Match the required error object structure payload wrapper contract
    const isValid = Object.keys(errors).length === 0;

    if (!isValid) {
        return {
            success: false,
            message: "Please correct the highlighted fields.",
            errors,
            valid: false
        };
    }

    return {
        success: true,
        valid: true,
        data: {
            fullName: String(fullName ?? "").trim(),
            contactNumber: String(contactNumber ?? "").trim(),
            countryCode: String(countryCode ?? "").trim(),
            email: String(email ?? "").trim(),
            dateOfTravel: String(dateOfTravel ?? "").trim(),
            numberOfPeople: Number(numberOfPeople),
            hotelCategory: String(hotelCategory ?? "").trim(),
            numberOfChildren: numberOfChildren == null ? 0 : Number(numberOfChildren),
        },
    };
}

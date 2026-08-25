const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9\s().-]{7,18}$/;
const hotelCategories = ["Standard", "Deluxe", "Luxury"];

export function validateEnquiry(input) {
    const errors = {};
    const body = input || {};
    const fullName = String(body.fullName ?? "").trim();
    const contactNumber = String(body.contactNumber ?? "").trim();
    const countryCode = String(body.countryCode ?? "").trim();
    const email = String(body.email ?? "").trim();
    const dateOfTravel = String(body.dateOfTravel ?? "").trim();
    const numberOfPeople = Number(body.numberOfPeople);
    const hotelCategory = String(body.hotelCategory ?? "").trim();
    const numberOfChildren =
        body.numberOfChildren === "" || body.numberOfChildren == null
            ? 0
            : Number(body.numberOfChildren);

    if (!fullName) errors.fullName = "Full name is required.";
    if (!contactNumber || !phoneRegex.test(contactNumber))
        errors.contactNumber = "Enter a valid contact number.";
    if (!/^\+\d{1,4}$/.test(countryCode))
        errors.countryCode = "Choose a valid country code.";
    if (!email || !emailRegex.test(email))
        errors.email = "Enter a valid email address.";
    if (!dateOfTravel) errors.dateOfTravel = "Travel date is required.";
    else {
        const date = new Date(`${dateOfTravel}T00:00:00`);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (Number.isNaN(date.getTime()) || date <= today)
            errors.dateOfTravel = "Travel date must be in the future.";
    }
    if (!Number.isInteger(numberOfPeople) || numberOfPeople < 1)
        errors.numberOfPeople = "Number of people must be at least 1.";
    if (!hotelCategories.includes(hotelCategory))
        errors.hotelCategory = "Select a valid hotel category.";
    if (!Number.isInteger(numberOfChildren) || numberOfChildren < 0)
        errors.numberOfChildren = "Children must be 0 or more.";

    return {
        errors,
        valid: Object.keys(errors).length === 0,
        data: {
            fullName,
            contactNumber,
            countryCode,
            email,
            dateOfTravel,
            numberOfPeople,
            hotelCategory,
            numberOfChildren,
        },
    };
}

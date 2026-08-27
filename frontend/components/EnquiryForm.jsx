"use client";
import { useState } from "react";
import { validateEnquiry } from "@/lib/validation";

const initial = {
    fullName: "",
    contactNumber: "",
    countryCode: "+91",
    email: "",
    dateOfTravel: "",
    numberOfPeople: 1,
    hotelCategory: "Deluxe",
    numberOfChildren: 0,
};

const getMinDate = (timestamp = Date.now()) => new Date(timestamp + 86400000).
    toISOString().slice(0, 10);

export default function EnquiryForm() {
    const [form, setForm] = useState(initial),
        [errors, setErrors] = useState({}),
        [status, setStatus] = useState("idle"),
        [message, setMessage] = useState("");

    const minDate = getMinDate();
    function change(e) {
        const { name, value } = e.target;
        setForm((f) => ({
            ...f,
            [name]: ["numberOfPeople", "numberOfChildren"].includes(name)
                ? Number(value)
                : value,
        }));
        setErrors((e) => ({ ...e, [name]: "" }));
    }
    async function submit(e) {
        e.preventDefault();
        const result = validateEnquiry(form);
        if (!result.valid) {
            setErrors(result.errors);
            setStatus("idle");
            return;
        }
        setStatus("loading");
        setMessage("");
        try {
            const res =
                await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://localhost:4000"}/api/enquiries/enquiry`,
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(form),
                    });
            const data = await res.json();
            if (!res.ok) {
                setErrors(data.errors || {});
                setMessage(data.message || "Please check your details.");
                setStatus("error");
                return;
            }
            setForm(initial);
            setErrors({});
            setMessage(data.message);
            setStatus("success");
        } catch {
            setMessage(
                "Something went wrong while submitting your enquiry. Please try again.",
            );
            setStatus("error");
        }
    }

    const field = (name, label, type = "text", props = {}) => (
        <label className="block">
            <span className="mb-2 block text-sm font-semibold text-ink">{label}</span>
            <input
                name={name}
                value={form[name]}
                onChange={change}
                type={type}
                {...props}
                className={`w-full rounded-xl border bg-white px-4 py-3 outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15 ${errors[name] ? "border-red-400" : "border-slate-200"}`}
            />
            {errors[name] && (
                <span className="mt-1 block text-xs text-red-600">{errors[name]}</span>
            )}
        </label>
    );

    return (
        <form
            onSubmit={submit}
            noValidate
            className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-black/5 md:p-8"
        >
            <div className="grid gap-5 md:grid-cols-2">
                {field("fullName", "Full name", "text", {
                    autoComplete: "name",
                    placeholder: "Your full name",
                })}
                <div>
                    <span className="mb-2 block text-sm font-semibold text-ink">
                        Contact number
                    </span>
                    <div className="flex gap-2">
                        <select
                            name="countryCode"
                            value={form.countryCode}
                            onChange={change}
                            className="w-24 rounded-xl border border-slate-200 bg-white px-3 py-3"
                        >
                            <option>+91</option>
                            <option>+1</option>
                            <option>+44</option>
                            <option>+254</option>
                            <option>+94</option>
                        </select>
                        <input
                            name="contactNumber"
                            value={form.contactNumber}
                            onChange={change}
                            type="tel"
                            placeholder="98765 43210"
                            className={`min-w-0 flex-1 rounded-xl border bg-white px-4 py-3 outline-none focus:border-sage ${errors.contactNumber ? "border-red-400" : "border-slate-200"}`}
                        />
                    </div>
                    {errors.contactNumber && (
                        <span className="mt-1 block text-xs text-red-600">
                            {errors.contactNumber}
                        </span>
                    )}
                </div>
                {field("email", "Email address", "email", {
                    autoComplete: "email",
                    placeholder: "you@example.com",
                })}
                {field("dateOfTravel", "Date of travel", "date", { min: minDate })}
                {field("numberOfPeople", "Number of people", "number", { min: 1 })}
                <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-ink">
                        Hotel category
                    </span>
                    <select
                        name="hotelCategory"
                        value={form.hotelCategory}
                        onChange={change}
                        className={`w-full rounded-xl border bg-white px-4 py-3 ${errors.hotelCategory ? "border-red-400" : "border-slate-200"}`}
                    >
                        <option>Standard</option>
                        <option>Deluxe</option>
                        <option>Luxury</option>
                    </select>
                    {errors.hotelCategory && (
                        <span className="mt-1 block text-xs text-red-600">
                            {errors.hotelCategory}
                        </span>
                    )}
                </label>
                {field("numberOfChildren", "Number of children", "number", { min: 0 })}
            </div>
            <button
                disabled={status === "loading"}
                className="mt-6 w-full rounded-full bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-sage disabled:cursor-not-allowed disabled:opacity-60"
            >
                {status === "loading" ? "Submitting…" : "Submit enquiry"}
            </button>
            {status === "success" && (
                <div
                    role="status"
                    className="mt-4 rounded-2xl bg-emerald-50 p-4  text-sm text-emerald-800"
                >
                    ✓ {message}
                    <br />
                    <span className="text-emerald-700/80">
                        Our travel expert will contact you within 24 hours.
                    </span>
                </div>
            )}
            {status === "error" && (
                <div
                    role="alert"
                    className="mt-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700"
                >
                    {message}
                </div>
            )}
        </form>
    );
}

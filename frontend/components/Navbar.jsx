"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const links = [
        ["Home", "/"],
        ["About", "/about"],
        ["Plan your trip", "/contact"],
    ];
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-black text-white backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                <Link href="/" className="font-display text-2xl tracking-tight">Travel <span className="text-terracotta">Unbounded</span></Link>
                <button onClick={() => setOpen(!open)} className="rounded-lg border border-white/20 px-3 py-2 md:hidden">
                    ☰
                </button>
                <div className={`nav-links ${open ? "flex" : "hidden"} absolute lef-0 right-0 top-full flex-col gap-1 bg-ink px-5 py-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:bg-transparent md:p-0`}>
                    {links.map(([name, url]) => (
                        <Link key={name} href={url} className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white">{name}</Link>
                    ))}
                    <Link href="/contact" className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90">Contact</Link>
                </div>
            </nav>
        </header >);
}
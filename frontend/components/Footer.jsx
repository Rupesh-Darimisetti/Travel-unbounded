"use client"
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-black text-white lg:px-8 px-5 py-12">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
                <div>
                    <div className="font-display text-2xl">Travel Unbounded</div>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                        Experiential journeys built around pepole, culture and unforgettable places.
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold">Explore</h3>
                    <ul className="mt-3 space-y-2">
                        <li><Link href="/" className="text-sm text-white/60 hover:text-white">Home</Link></li>
                        <li><Link href="/blog" className="text-sm text-white/60 hover:text-white">Blog</Link></li>
                        <li><Link href="/about" className="text-sm text-white/60 hover:text-white">About</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold">Our Offices</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">Bengluru . Kochi . Nairobi</p>
                </div>
            </div>
            <div className="mx-auto mt-10 max-w-7xl border-t border-white/20 pt-10 text-center text-sm text-white/60">
                <p>&copy; {new Date().getFullYear()} Travel Unbounded. All rights reserved.</p>
            </div>
        </footer>
    );
}
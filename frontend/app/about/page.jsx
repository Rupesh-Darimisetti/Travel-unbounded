import Link from "next/link";
export const metadata = {
    title: "About Travel Unbounded",
    description:
        "Learn about Travel Unbounded, our story, locations and approach to experiential travel.",
};
export default function About() {
    return (
        <div className="pt-24">
            <section className="bg-sand px-5 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                        About us
                    </p>
                    <h1 className="mt-3 max-w-4xl font-display text-6xl leading-tight text-ink md:text-8xl">
                        Travel should feel like a story you were part of.
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                        Travel Unbounded creates meaningful journeys around people, culture
                        and place. We believe the most memorable trips are the ones that
                        leave you with more than photographs.
                    </p>
                </div>
            </section>
            <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                            Our story
                        </p>
                        <h2 className="mt-3 font-display text-5xl text-ink">
                            Curiosity is our compass.
                        </h2>
                    </div>
                    <div className="space-y-5 text-slate-600 leading-7">
                        <p>
                            From Himalayan roads to African plains, we design trips that
                            balance trusted logistics with space to discover. Our approach is
                            simple: understand what matters to you, then build a journey
                            around it.
                        </p>
                        <p>
                            Our team works across India and Nairobi, bringing regional
                            knowledge and a genuinely personal approach to planning.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-ink px-5 py-20 text-black lg:px-8 bg-white">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">
                        Our locations
                    </p>
                    <div className="mt-8 grid gap-6 md:grid-cols-3">
                        <div className="rounded-3xl border border-black/10 p-7">
                            <h3 className="font-display text-3xl">Bengaluru</h3>
                            <p className="mt-4 text-sm leading-6 text-black/60">
                                541, 7th Main Rd, HAL 2nd Stage
                                <br />
                                Indiranagar, Bengaluru - 560008
                            </p>
                        </div>
                        <div className="rounded-3xl border border-black/10 p-7">
                            <h3 className="font-display text-3xl">Kochi</h3>
                            <p className="mt-4 text-sm leading-6 text-black/60">
                                LR Towers, S Janatha Road
                                <br />
                                Palavivatton, Kochi - 682025
                            </p>
                        </div>
                        <div className="rounded-3xl border border-black/10 p-7">
                            <h3 className="font-display text-3xl">Nairobi</h3>
                            <p className="mt-4 text-sm leading-6 text-black/60">
                                Westpark Towers, Muthithi Road
                                <br />
                                Nairobi, P.O. Box 6950
                                <br />
                                Postal Code 00100
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-5 py-20 text-center lg:px-8">
                <h2 className="font-display text-5xl text-ink">
                    Ready to make it personal?
                </h2>
                <Link
                    href="/contact"
                    className="mt-7 inline-flex rounded-full bg-terracotta text-black px-7 py-4 font-semibold e"
                >
                    Plan your journey
                </Link>
            </section>
        </div>
    );
}

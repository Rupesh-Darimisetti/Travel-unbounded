export default function DestinationCard({ destination }) {
    return (
        <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-64 overflow-hidden">
                <img
                    src={destination.image}
                    alt={`${destination.name} travel`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-4 top-4 flex justify-between">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink">
                        {destination.country}
                    </span>
                    <span className="rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white">
                        From ₹{destination.price.toLocaleString("en-IN")}
                    </span>
                </div>
            </div>
            <div className="p-6">
                <h3 className="font-display text-2xl text-ink">{destination.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                    {destination.description}
                </p>
                <a
                    href="/contact"
                    className="mt-5 inline-flex items-center text-sm font-semibold text-sage"
                >
                    Plan this journey{" "}
                    <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </a>
            </div>
        </article>
    );
}

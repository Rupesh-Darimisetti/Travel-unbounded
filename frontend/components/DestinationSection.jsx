import DestinationCard from "./DestinationCard";
export default function DestinationSection({ title, eyebrow, destinations }) {
    return (
        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
            <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                        {eyebrow}
                    </p>
                    <h2 className="mt-2 font-display text-4xl text-ink md:text-5xl">
                        {title}
                    </h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-slate-600">
                    Curated routes, thoughtful stays and local experiences designed to
                    make every mile matter.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {destinations.map((d) => (
                    <DestinationCard key={d.id} destination={d} />
                ))}
            </div>
        </section>
    );
}

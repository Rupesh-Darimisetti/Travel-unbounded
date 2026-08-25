import EnquiryForm from "@/components/EnquiryForm";
export const metadata = {
    title: "Plan Your Trip | Travel Unbounded",
    description:
        "Send Travel Unbounded your trip details and our travel experts will help plan your journey.",
};
export default function Contact() {
    return (
        <div className="pt-24">
            <section className="bg-sand px-5 py-16 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
                        Start planning
                    </p>
                    <h1 className="mt-3 max-w-4xl font-display text-6xl leading-tight text-ink md:text-7xl">
                        Where will you go next?
                    </h1>
                    <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                        Share a few details and our travel expert will get back to you with
                        ideas tailored to your trip.
                    </p>
                </div>
            </section>
            <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
                <div className="lg:pt-8">
                    <h2 className="font-display text-4xl text-ink">
                        Tell us what you’re dreaming about.
                    </h2>
                    <div className="mt-8 space-y-5 text-sm leading-6 text-slate-600">
                        <p>
                            <strong className="text-ink">Good to know:</strong> Travel dates
                            must be in the future. We use your details only to respond to your
                            enquiry.
                        </p>
                        <p>
                            <strong className="text-ink">Need inspiration?</strong> Browse our
                            India and international destinations on the home page, then come
                            back here when you’re ready.
                        </p>
                    </div>
                </div>
                <EnquiryForm />
            </section>
        </div>
    );
}

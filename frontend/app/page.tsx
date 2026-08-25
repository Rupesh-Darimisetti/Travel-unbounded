import Link from "next/link";
import DestinationSection from "@/components/DestinationSection";
import { destinations } from "@/data/destination";
import Image from "next/image";

export default function Home() {
  const india = destinations.filter((d) => d.category === "india"),
    international = destinations.filter((d) => d.category === "international");
  return (
    <>
      <section className="relative min-h-195 overflow-hidden bg-ink text-white">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
          alt="Mountain lake landscape"
          width={1400}
          height={800}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-right from-ink via-ink/60 to-transparent" />
        <div className="relative mx-auto flex min-h[780px] max-w-7xl items-end px-5 pb-20 pt-32 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-orange-200">
              Travel Unbounded · Experiential travel
            </p>
            <h1 className="font-display text-6xl leading-[0.95] tracking-tight md:text-8xl">
              Go beyond the <span className="text-orange-200">itinerary.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/80">
              Journeys built around people, culture and unforgettable
              experiences — from the quietest corners of India to the wildest
              landscapes abroad.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-terracotta px-7 py-4 font-semibold hover:opacity-90"
            >
              Plan your trip <span className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>
      <DestinationSection
        eyebrow="Made in India"
        title="Journeys closer to home"
        destinations={india}
      />
      <section className="mx-5 overflow-hidden rounded-2rem bg-sage text-white lg:mx-auto lg:max-w-7xl">
        <div className="grid items-center lg:grid-cols-2">
          <div className="p-8 md:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Why travel with us
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">
              The best trips leave room for the unexpected.
            </h2>
            <p className="mt-5 leading-7 text-white/80">
              We combine thoughtful planning with local perspective, so your
              trip feels personal rather than packaged.
            </p>
            <Link
              href="/about"
              className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink"
            >
              Meet Travel Unbounded
            </Link>
          </div>
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80"
            alt="Mountain adventure"
            className="h-full min-h-80 w-full object-cover"
            width={1400}
            height={800}
          />
        </div>
      </section>
      <DestinationSection
        eyebrow="Beyond borders"
        title="Go further"
        destinations={international}
      />
      <section className="bg-sand px-5 py-20 text-center lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
          Your next chapter
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl font-display text-5xl text-ink md:text-6xl">
          Tell us where you want to go. We’ll help you figure out how.
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-flex rounded-full bg-ink px-7 py-4 font-semibold text-white hover:bg-sage"
        >
          Start planning
        </Link>
      </section>
    </>
  );
}

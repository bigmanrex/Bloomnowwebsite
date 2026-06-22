import Image from "next/image";
import Nav from "@/components/Nav";
import FadeIn from "@/components/FadeIn";
import CTAButton from "@/components/CTAButton";
import { EMAIL, LINKEDIN } from "@/app/lib/constants";

const FOCUS_AREAS = [
  {
    title: "Navigating conflict and hard conversations",
    body: "Move through tension with clarity and lead difficult discussions with composure.",
  },
  {
    title: "Team development and engagement",
    body: "Build teams that trust one another and consistently do their best work.",
  },
  {
    title: "Promotion readiness",
    body: "Position yourself for the next level and make the case with confidence.",
  },
  {
    title: "Work-life balance",
    body: "Align your time and energy with what matters most, on and off the clock.",
  },
  {
    title: "Executive presence",
    body: "Communicate with authority and ease, and command the room when it counts.",
  },
  {
    title: "Imposter syndrome",
    body: "Quiet the self-doubt and step fully into the expertise you have earned.",
  },
];

const OUTCOMES = [
  "Promotion",
  "Confidence to take on visibility and responsibility",
  "Stronger leadership skills",
  "Greater assertiveness",
  "Mindset shifts that unlock stuck thinking",
];

const TRUSTED_BY = [
  "Mount Sinai Health System",
  "Atlantic Health System",
  "Palomar Health",
  "Tower Health",
  "Sanofi",
  "Abbott",
  "Boehringer Ingelheim",
  "Genentech",
  "AstraZeneca",
  "Novartis",
  "Johnson & Johnson",
  "Pfizer",
];

const TESTIMONIALS = [
  {
    quote:
      "Before coaching my imposter syndrome was impacting me at an 80 out of 100. Now I'm at a 20.",
    attribution: "Healthcare Executive",
  },
  {
    quote:
      "How I allot my time is more aligned to my values. I'm now spending more time with my kids and it feels great.",
    attribution: "Physician Leader",
  },
];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-white">
      <Nav />

      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-cream to-white" />
        <div className="pointer-events-none absolute -right-32 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-magenta/5 blur-3xl" />

        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:pb-28 md:pt-24 lg:px-8">
          <FadeIn>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">
              BloomNow Coaching
            </p>
            <h1 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.5rem]">
              Executive coaching for leaders ready for what&rsquo;s next.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">
              Get unstuck. Build confidence. Step into your next role.
            </p>
            <div className="mt-9">
              <CTAButton>Book a Free 15-Minute Consultation</CTAButton>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="order-first md:order-none">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-brand-green/10" />
              <div className="overflow-hidden rounded-2xl bg-brand-stone shadow-sm ring-1 ring-black/5">
                <Image
                  src="/headshot.png"
                  alt="Lisa Bloom, Executive Coach"
                  width={560}
                  height={680}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────── Who I work with ─────────────────────── */}
      <section id="who" className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28 lg:px-8">
          <FadeIn>
            <h2 className="mb-8 text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">
              Who I work with
            </h2>
            <p className="font-serif text-2xl font-light leading-[1.45] text-neutral-800 sm:text-3xl">
              I coach physician leaders, scientific leaders, and senior
              executives navigating hard conversations, stalled careers, and the
              leap to bigger roles. Most clients are women in healthcare and life
              sciences, but my work is open to leaders across industries.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────── Areas of focus ─────────────────────── */}
      <section id="approach" className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">
              Areas of focus
            </p>
            <h2 className="max-w-2xl font-serif text-3xl font-light leading-tight text-neutral-900 sm:text-4xl">
              Where coaching makes the biggest difference.
            </h2>
          </FadeIn>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS_AREAS.map((area, i) => (
              <FadeIn key={area.title} delay={i * 60}>
                <div className="group h-full rounded-xl border border-black/5 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-magenta/20 hover:shadow-md">
                  <div className="mb-5 h-px w-10 bg-brand-magenta/40 transition-all duration-300 group-hover:w-16" />
                  <h3 className="font-serif text-xl font-normal leading-snug text-neutral-900">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                    {area.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Outcomes ─────────────────────── */}
      <section id="results" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
            <FadeIn>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">
                Outcomes
              </p>
              <h2 className="font-serif text-3xl font-light leading-tight text-neutral-900 sm:text-4xl">
                What clients walk away with.
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-neutral-600">
                Coaching is practical and personal. These are the shifts clients
                see most often.
              </p>
            </FadeIn>

            <FadeIn delay={120}>
              <ul className="divide-y divide-black/5 border-y border-black/5">
                {OUTCOMES.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-4 py-5 text-lg text-neutral-800"
                  >
                    <span
                      className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-brand-magenta/10"
                      aria-hidden="true"
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C0266A"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─────────────────────── About Lisa ─────────────────────── */}
      <section id="about" className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            {/* Badge / photo column */}
            <FadeIn>
              <div className="flex flex-col items-center gap-8 md:items-start">
                <div className="relative w-full max-w-xs">
                  <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-brand-magenta/5" />
                  <div className="overflow-hidden rounded-2xl bg-brand-stone shadow-sm ring-1 ring-black/5">
                    <Image
                      src="/headshot.png"
                      alt="Lisa Bloom"
                      width={480}
                      height={560}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-black/5 bg-white px-5 py-4">
                  <Image
                    src="/ipec-cert.png"
                    alt="iPEC Certified Professional Coach"
                    width={64}
                    height={64}
                    className="h-14 w-14 object-contain"
                  />
                  <div className="text-sm leading-tight text-neutral-600">
                    <p className="font-medium text-neutral-900">
                      Certified Professional Coach
                    </p>
                    <p>iPEC · Hogan · EQ-i 2.0</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Bio column */}
            <FadeIn delay={120}>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-brand-magenta">
                About Lisa
              </p>
              <h2 className="font-serif text-3xl font-light leading-tight text-neutral-900 sm:text-4xl">
                25+ years helping leaders grow.
              </h2>
              <div className="mt-7 space-y-5 text-[17px] leading-relaxed text-neutral-700">
                <p>
                  Lisa Bloom is an executive coach with 25+ years in healthcare
                  and life sciences. She helps physician leaders, scientific
                  leaders, and senior executives navigate hard conversations,
                  build confidence, and step into their next role.
                </p>
                <p>
                  She is currently a Senior Organizational Development Consultant
                  at Mount Sinai Health System, where she designs leadership
                  programs across clinical and administrative teams. Before Mount
                  Sinai, she was Senior Vice President at The Leadership
                  Development Group, leading leadership development for Atlantic
                  Health, Tower Health, Bristol Myers Squibb, and others. Earlier
                  in her career, she held strategy roles at The Kinetix Group and
                  Capgemini, advising Fortune 500 life sciences clients.
                </p>
                <p>
                  Lisa holds an MBA and MPH from Emory University and a BS in
                  Human Services from Cornell. She is a Certified Professional
                  Coach through iPEC, and is credentialed in the Hogan and EQi
                  2.0 assessments. She is a frequent speaker and published author
                  in healthcare and leadership journals.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─────────────────────── Trusted by ─────────────────────── */}
      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20 lg:px-8">
          <FadeIn>
            <p className="mb-8 text-sm leading-relaxed text-neutral-500">
              Lisa has coached and consulted leaders at:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
              {TRUSTED_BY.map((name, i) => (
                <span key={name} className="flex items-center gap-x-3">
                  <span className="font-serif text-lg font-light text-neutral-700 sm:text-xl">
                    {name}
                  </span>
                  {i < TRUSTED_BY.length - 1 && (
                    <span className="text-brand-magenta/40" aria-hidden="true">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────── Testimonials ─────────────────────── */}
      <section className="bg-brand-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.attribution} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-white p-8 md:p-10">
                  <span
                    className="font-serif text-5xl leading-none text-brand-magenta/25"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="mt-2 flex-1 font-serif text-xl font-light leading-relaxed text-neutral-800 md:text-2xl">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-medium uppercase tracking-[0.12em] text-neutral-500">
                    {t.attribution}
                  </figcaption>
                </figure>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────── Final CTA ─────────────────────── */}
      <section id="contact" className="relative overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white to-brand-cream" />
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32 lg:px-8">
          <FadeIn>
            <h2 className="font-serif text-4xl font-light leading-tight text-neutral-900 sm:text-5xl">
              Ready to get unstuck?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              Book a free 15-minute call. No pressure, no pitch. Just a
              conversation.
            </p>
            <div className="mt-10">
              <CTAButton>Book a Free Consultation</CTAButton>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─────────────────────── Footer ─────────────────────── */}
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 text-sm text-neutral-500 sm:flex-row lg:px-8">
          <div className="flex items-center gap-2">
            <span className="font-serif text-base text-neutral-700">
              Bloom<span className="text-brand-magenta">Now</span>
            </span>
            <span className="text-neutral-300">·</span>
            <span>&copy; BloomNow Coaching</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${EMAIL}`}
              className="transition-colors hover:text-neutral-900"
            >
              {EMAIL}
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-neutral-900"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.337V9.925H5.55v8.412h2.789zM6.945 8.776a1.617 1.617 0 1 0 0-3.234 1.617 1.617 0 0 0 0 3.234zm11.392 9.561v-4.61c0-2.42-.524-4.281-3.351-4.281-1.359 0-2.27.745-2.642 1.451h-.038V9.925h-2.68v8.412h2.79v-4.163c0-1.098.208-2.16 1.568-2.16 1.34 0 1.358 1.254 1.358 2.23v4.093h2.789z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

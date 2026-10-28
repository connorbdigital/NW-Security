import { useState } from "react";
import { AREAS, CONTACT } from "../lib/content";
import { Icon, Reveal, SectionLabel } from "./ui";

const benefits = [
  {
    icon: "users" as const,
    kicker: "Same team, start to finish",
    title: "Nick & James fit every job.",
    copy: "The person who quotes is the person on your driveway. No call-centre handovers, no subcontracted installs.",
  },
  {
    icon: "zap" as const,
    kicker: "Clear running costs",
    title: "Data plans, no lock-in.",
    copy: "Simple rolling plans for live tracking and journey history, with monitored S5 options for a 24/7 control room. No lengthy contract.",
  },
  {
    icon: "fileCheck" as const,
    kicker: "Insurance ready",
    title: "Paperwork, sorted.",
    copy: "Approved installation certificates and manufacturer documentation supplied before we leave — ready for your insurer.",
  },
  {
    icon: "clock" as const,
    kicker: "Here after the sale",
    title: "Support that answers.",
    copy: "A direct line to our team for questions, firmware and upgrades, plus 24/7 emergency support if the worst happens.",
  },
];

export default function Benefits() {
  const [showAllAreas, setShowAllAreas] = useState(false);
  const visibleAreas = showAllAreas ? AREAS : AREAS.slice(0, 8);

  return (
    <section
      id="why-us"
      className="relative overflow-hidden border-y border-white/[0.07] bg-ink-2 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_75%)]"
      />
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <Reveal>
            <SectionLabel>Why Northwest</SectionLabel>
            <h2 className="mt-5 max-w-[19ch] text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.05] text-white">
              Local expertise.
              <span className="font-serif italic font-normal text-crimson">
                {" "}
                National-grade kit.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="max-w-[40ch] text-[14.5px] leading-[1.75] text-white/65">
              We’ve been fitting security to North West vehicles for more than
              three decades. That means honest advice, a tidy install and kit
              that’s actually approved — not whatever’s cheapest this week.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="#book"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-crimson"
              >
                Book your install
                <span className="grid h-6 w-6 place-items-center rounded-full border border-crimson/40 bg-crimson/10 transition-all duration-300 group-hover:bg-crimson group-hover:text-white">
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </span>
              </a>
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <span className="text-[12px] text-white/45">
                <span className="font-semibold text-white/80">35+ years</span> · Family-run
                · Bolton based
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {/* Image-led card */}
          <Reveal className="lg:col-span-7">
            <article className="group relative h-full min-h-[380px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[440px]">
              <img
                src="/images/install-detail.jpg"
                alt="A technician installing a discreet immobiliser module beneath a car dashboard"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/15" />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="glass rounded-full px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white/85">
                    Mobile workshop
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-crimson px-3 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_4px_12px_rgba(255,42,59,0.5)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    No garage visit
                  </span>
                </div>

                <div className="mt-auto pt-16">
                  <h3 className="max-w-[16ch] text-[clamp(1.6rem,2.6vw,2.15rem)] font-semibold leading-[1.1] text-white">
                    Fitted on your drive,
                    <span className="font-serif italic font-normal text-crimson"> not in a queue.</span>
                  </h3>
                  <p className="mt-3 max-w-[42ch] text-[13.5px] leading-[1.7] text-white/70">
                    We arrive with everything needed for a factory-standard install,
                    work around your day and leave the vehicle exactly as we found
                    it — only considerably harder to steal.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {["At home", "At work", "Fleet yard", "Main dealer"].map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-1.5 text-[11px] font-medium text-white/80 backdrop-blur-sm"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>

          {/* Coverage */}
          <Reveal delay={110} className="lg:col-span-5">
            <article className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-moss to-forest p-6 sm:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,42,59,0.16),transparent_70%)] blur-xl"
              />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-crimson/30 bg-crimson/10 text-crimson">
                    <Icon name="mapPin" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.02em] text-white">
                    Based in Bolton.
                    <br />
                    <span className="text-white/60">Fitted across the North West.</span>
                  </h3>
                </div>
                <p className="font-display text-[36px] font-medium leading-none tracking-[-0.04em] text-crimson">
                  {AREAS.length}
                  <span className="text-[22px]">+</span>
                </p>
              </div>

              <ul className="relative mt-6 flex flex-wrap gap-1.5" aria-label="Areas covered">
                {visibleAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-[11px] font-medium text-white/75 transition-colors hover:border-crimson/40 hover:text-white"
                  >
                    {area}
                  </li>
                ))}
                {!showAllAreas && (
                  <li>
                    <button
                      type="button"
                      onClick={() => setShowAllAreas(true)}
                      aria-label={`Show all ${AREAS.length} areas covered`}
                      className="rounded-md border border-crimson/30 bg-crimson/15 px-2.5 py-1.5 text-[11px] font-semibold text-crimson transition-colors hover:bg-crimson/25"
                    >
                      +{AREAS.length - 8} more
                    </button>
                  </li>
                )}
              </ul>

              <button
                type="button"
                onClick={() => setShowAllAreas((value) => !value)}
                aria-expanded={showAllAreas}
                className="relative mt-4 flex w-fit items-center gap-1.5 text-[11.5px] font-semibold text-white/60 transition-colors hover:text-crimson"
              >
                {showAllAreas ? "Show fewer areas" : "Show all areas"}
                <Icon
                  name="chevronDown"
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    showAllAreas ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div className="relative mt-auto pt-8">
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink/50 p-3.5">
                  <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-crimson/15">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full border border-crimson/50" />
                    <Icon name="phone" className="h-4 w-4 text-crimson" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Not sure we reach you?
                    </p>
                    <a
                      href={CONTACT.primaryTel}
                      className="mt-0.5 block truncate text-[12.5px] font-semibold text-white transition-colors hover:text-crimson"
                    >
                      Call {CONTACT.primaryPhone}
                    </a>
                  </div>
                  <Icon name="arrowUpRight" className="ml-auto h-4 w-4 shrink-0 text-white/40" />
                </div>
              </div>
            </article>
          </Reveal>
        </div>

        {/* Comparison table */}
        <Reveal delay={140}>
          <div className="mt-4 overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-6 sm:p-8">
            <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12">
              <div>
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-crimson">
                  <span className="h-px w-6 bg-crimson/80" />
                  The difference
                </span>
                <h3 className="mt-3 text-[clamp(1.35rem,2.4vw,1.8rem)] font-semibold leading-[1.15] text-white">
                  Anyone can sell a box.
                  <br />
                  <span className="text-white/50">Few can fit it properly.</span>
                </h3>
                <p className="mt-3 max-w-[34ch] text-[12.5px] leading-[1.7] text-white/50">
                  A security product is only as good as the hands that install
                  it. Here’s what you get with us — and what drivers tell us they
                  get elsewhere.
                </p>
              </div>

              <div
                role="group"
                aria-label="How a Northwest installation compares with typical installers"
                className="overflow-hidden rounded-xl border border-white/10"
              >
                <div className="grid grid-cols-[0.9fr_1.15fr] gap-2 bg-white/[0.05] px-3.5 py-2.5 text-[9px] font-bold uppercase tracking-[0.13em] text-white/40 sm:grid-cols-[1fr_1fr_1.15fr] sm:px-4">
                  <span>What matters</span>
                  <span className="hidden sm:block">Typical fit</span>
                  <span className="text-crimson">With Northwest</span>
                </div>
                {[
                  ["The kit", "Whatever’s cheapest", "Approved & vehicle-tested"],
                  ["Who fits it", "Whoever’s free", "Nick or James, every time"],
                  ["Certificates", "Chase them later", "Before we leave"],
                  ["Aftercare", "See the website", "A direct line, for years"],
                ].map(([label, typical, ours], index) => (
                  <div
                    key={label}
                    className={`grid grid-cols-[0.9fr_1.15fr] items-center gap-2 px-3.5 py-3 text-[11px] sm:grid-cols-[1fr_1fr_1.15fr] sm:px-4 sm:text-[11.5px] ${
                      index % 2 === 1 ? "bg-white/[0.025]" : ""
                    }`}
                  >
                    <span className="font-medium text-white/75">{label}</span>
                    <span className="hidden items-start gap-1.5 text-white/40 sm:flex">
                      <Icon name="close" className="mt-px h-3 w-3 shrink-0" />
                      {typical}
                    </span>
                    <span className="flex items-start gap-1.5 font-medium text-white/90">
                      <Icon
                        name="check"
                        className="mt-px h-3 w-3 shrink-0 text-crimson"
                        strokeWidth={2.8}
                      />
                      {ours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 80}>
              <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 hover:border-crimson/40 hover:bg-white/[0.045]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-crimson/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <span className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-crimson group-hover:border-crimson/40">
                  <Icon name={benefit.icon} className="h-4 w-4" />
                </span>
                <p className="mt-5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {benefit.kicker}
                </p>
                <h3 className="mt-1.5 text-[15.5px] font-semibold tracking-[-0.015em] text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[12.5px] leading-[1.65] text-white/55">
                  {benefit.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

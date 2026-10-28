import { CONTACT, TESTIMONIALS } from "../lib/content";
import { cn } from "../utils/cn";
import { Icon, Reveal, SectionLabel, Stars } from "./ui";

export default function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(255,42,59,0.1),transparent_65%)] blur-2xl"
      />
      <div className="container-x relative">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <SectionLabel>Word of mouth</SectionLabel>
            <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.05] text-white">
              Trusted on driveways,
              <span className="font-serif italic font-normal text-crimson">
                {" "}
                forecourts and fleet yards.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={110}>
            <div className="glass flex items-center gap-5 rounded-2xl p-5 sm:p-6">
              <div className="shrink-0 border-r border-white/12 pr-5">
                <p className="font-display text-[34px] font-semibold leading-none tracking-[-0.04em] text-white">
                  4.9
                </p>
                <Stars className="mt-2" size="h-3 w-3" />
              </div>
              <div>
                <p className="text-[12.5px] font-semibold text-white">
                  Rated by North West drivers
                </p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-white/50">
                  Real feedback from customers who’ve had keys, trackers and
                  immobilisers fitted by our team.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 2) * 90 + Math.floor(index / 2) * 60}>
              <figure
                className={cn(
                  "card-lift group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 sm:p-7",
                  index === 0
                    ? "border-crimson/35 bg-gradient-to-br from-crimson/[0.1] via-white/[0.03] to-transparent hover:border-crimson/50"
                    : "border-white/[0.09] bg-white/[0.025] hover:border-crimson/30 hover:bg-white/[0.04]",
                )}
              >
                <Icon
                  name="quote"
                  filled
                  className="absolute right-5 top-5 h-8 w-8 text-white/[0.07] transition-colors duration-500 group-hover:text-crimson/25"
                />
                <div className="flex items-center justify-between gap-3">
                  <Stars size="h-3.5 w-3.5" />
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/50">
                    {testimonial.service}
                  </span>
                </div>
                <blockquote className="mt-5 text-[14.5px] leading-[1.7] text-white/80">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 pt-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-crimson/30 bg-crimson/15 text-[11px] font-bold text-crimson-soft">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-[13px] font-semibold text-white">{testimonial.name}</p>
                    <p className="mt-0.5 text-[11px] text-white/45">{testimonial.detail}</p>
                  </div>
                  <span className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-white/40">
                    <Icon name="checkCircle" className="h-3.5 w-3.5 text-crimson" />
                    Verified customer
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:p-6">
            <p className="flex items-center gap-3 text-[12.5px] text-white/60">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-crimson/15 text-crimson">
                <Icon name="message" className="h-4 w-4" />
              </span>
              Prefer to hear it from us directly? We’re happy to talk you through
              your options — no pressure, no jargon.
            </p>
            <a
              href={CONTACT.primaryTel}
              className="group inline-flex shrink-0 items-center gap-2 text-[12.5px] font-semibold text-crimson hover:text-crimson-soft"
            >
              {CONTACT.primaryPhone}
              <Icon
                name="arrowUpRight"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

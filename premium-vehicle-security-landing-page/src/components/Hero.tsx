import { CONTACT } from "../lib/content";
import { Icon, Reveal, Stars } from "./ui";

const proof = [
  { icon: "shieldCheck" as const, label: "TASSA-approved installers" },
  { icon: "award" as const, label: "Thatcham-approved products" },
  { icon: "mapPin" as const, label: "35+ years in the North West" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16"
    >
      {/* Ambient background with racing crimson glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_78%)]" />
        <div className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,42,59,0.18),transparent_65%)] blur-3xl" />
        <div className="absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(220,20,36,0.12),transparent_70%)] blur-2xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 xl:gap-16">
          <div className="max-w-[620px]">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.04] py-1.5 pl-2.5 pr-4 text-[11px] font-medium tracking-wide text-white/75 backdrop-blur-md">
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-crimson/20">
                  <span className="h-2 w-2 animate-blink rounded-full bg-crimson shadow-[0_0_10px_#ff2a3b]" />
                </span>
                Official North West Vehicle Security · Mobile Fitting
              </span>
            </Reveal>

            <Reveal delay={90}>
              <h1
                id="hero-heading"
                tabIndex={-1}
                className="mt-6 text-[clamp(2.4rem,11vw,4.65rem)] font-medium leading-[0.98] text-white sm:text-[clamp(2.6rem,6.4vw,4.65rem)]"
              >
                They can’t drive
                <br />
                what they
                <br />
                <span className="font-serif italic font-normal tracking-[-0.02em] text-crimson">
                  can’t start.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={170}>
              <p className="mt-7 max-w-[33rem] text-[15.5px] leading-[1.7] text-white/65 sm:text-base">
                Ghost immobilisers, insurance-approved GPS trackers and 24/7
                auto-locksmith cover — supplied, fitted and backed by{" "}
                <span className="font-semibold text-white">
                  35+ years
                </span>{" "}
                protecting North West vehicles. Invisible to thieves, effortless
                for you.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#book" className="btn-crimson group w-full sm:w-auto">
                  Book a free security review
                  <Icon
                    name="arrowUpRight"
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <a href={CONTACT.primaryTel} className="btn-ghost group w-full sm:w-auto">
                  <span className="relative flex h-2 w-2 items-center justify-center">
                    <span className="absolute h-2 w-2 animate-ping rounded-full bg-crimson opacity-75" />
                    <span className="h-2 w-2 rounded-full bg-crimson" />
                  </span>
                  <span className="text-white/60">Call</span>
                  {CONTACT.primaryPhone}
                </a>
              </div>
            </Reveal>

            <Reveal delay={310}>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[12.5px] text-white/60">
                {["Fitted at home or work", "Insurance-approved options", "Same-week fitting"].map(
                  (item) => (
                    <span key={item} className="flex items-center gap-1.5">
                      <Icon name="check" className="h-3.5 w-3.5 text-crimson" strokeWidth={2.4} />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </Reveal>

            <Reveal delay={380}>
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="flex -space-x-2.5" aria-hidden="true">
                  {[
                    { initials: "JR", tone: "bg-[#2d1417] text-crimson-soft" },
                    { initials: "PS", tone: "bg-[#1f202b] text-white/90" },
                    { initials: "DW", tone: "bg-[#2b1719] text-[#ff9fa7]" },
                    { initials: "+1k", tone: "bg-crimson text-white" },
                  ].map((avatar) => (
                    <span
                      key={avatar.initials}
                      className={`grid h-9 w-9 place-items-center rounded-full border-2 border-ink text-[10px] font-bold ${avatar.tone}`}
                    >
                      {avatar.initials}
                    </span>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <Stars size="h-3.5 w-3.5" />
                    <span className="text-[13px] font-semibold text-white">4.9 / 5</span>
                  </div>
                  <p className="mt-0.5 text-[11.5px] text-white/50">
                    Rated by drivers, dealers & fleets across the region
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal delay={180} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-8 -z-10 rounded-[3rem] bg-[radial-gradient(circle_at_65%_35%,rgba(255,42,59,0.22),transparent_62%)] blur-2xl"
            />

            <div className="group relative overflow-hidden rounded-[26px] border border-white/12 bg-forest shadow-[0_50px_100px_-40px_rgba(0,0,0,0.95)] sm:rounded-[32px]">
              <img
                src="/images/hero-car.jpg"
                alt="Black luxury SUV in a dark studio, lit with red rim light"
                width={1280}
                height={720}
                referrerPolicy="no-referrer"
                fetchPriority="high"
                className="h-[350px] w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03] sm:h-[430px] lg:h-[500px] xl:h-[550px]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />

              {/* scanning line in crimson */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-transparent via-crimson/18 to-transparent"
              />

              {/* top chips */}
              <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2 sm:inset-x-4 sm:top-4">
                <div className="glass flex items-center gap-2.5 rounded-full py-1.5 pl-2 pr-3.5">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-crimson text-white shadow-[0_0_12px_rgba(255,42,59,0.7)]">
                    <Icon name="shieldCheck" className="h-3.5 w-3.5" strokeWidth={2.2} />
                  </span>
                  <span className="text-[11px] font-semibold text-white">
                    Ghost II <span className="font-normal text-white/60">· Armed</span>
                  </span>
                </div>
                <span className="glass hidden rounded-full border border-crimson/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/90 sm:block">
                  TASSA approved
                </span>
              </div>

              {/* bottom status card */}
              <div className="glass absolute inset-x-3 bottom-3 rounded-2xl p-3.5 sm:inset-x-4 sm:bottom-4 sm:p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-crimson/15">
                      <span className="absolute inset-0 animate-pulse-ring rounded-full border border-crimson/50" />
                      <Icon name="lock" className="h-4 w-4 text-crimson" />
                    </span>
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">
                        Vehicle status
                      </p>
                      <p className="mt-0.5 flex items-center gap-1.5 text-[13px] font-semibold text-white">
                        Protected
                        <span className="h-1 w-1 rounded-full bg-white/25" />
                        <span className="font-normal text-white/60">Live tracking active</span>
                      </p>
                    </div>
                  </div>
                  <div className="hidden items-end gap-[3px] sm:flex" aria-hidden="true">
                    {[34, 52, 40, 68, 48, 72, 56].map((height, i) => (
                      <span
                        key={i}
                        className="w-[3px] animate-float rounded-full bg-crimson"
                        style={{
                          height: `${height * 0.34}px`,
                          animationDelay: `${i * 220}ms`,
                          animationDuration: `${4 + i * 0.4}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-2.5 text-[10.5px] text-white/50">
                  <Icon name="route" className="h-3.5 w-3.5 text-crimson" />
                  Journey history on · 24/7 coverage active
                  <span className="ml-auto hidden font-bold text-crimson sm:block">
                    SECURE
                  </span>
                </div>
              </div>
            </div>

            <div className="glass absolute -bottom-5 -left-2 hidden animate-float items-center gap-2.5 rounded-full border border-crimson/30 py-2 pl-2 pr-4 shadow-xl md:flex lg:-left-5">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-crimson text-white">
                <Icon name="key" className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span className="text-[11px] font-semibold text-white">
                No key. No signal. <span className="text-white/60">No start.</span>
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ul className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6 lg:mt-20">
            {proof.map((item) => (
              <li key={item.label} className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
                  <Icon name={item.icon} className="h-4 w-4 text-crimson" />
                </span>
                <span className="text-[12.5px] font-medium text-white/70">{item.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

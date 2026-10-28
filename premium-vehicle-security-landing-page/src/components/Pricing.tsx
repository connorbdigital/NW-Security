import { PACKAGES } from "../lib/content";
import { cn } from "../utils/cn";
import { Icon, Reveal, SectionLabel } from "./ui";

export default function Pricing({
  onChoose,
}: {
  onChoose: (pkgName: string) => void;
}) {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden rounded-t-[2rem] bg-cream text-ink sm:rounded-t-[3rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_at_top_left,black_10%,transparent_65%)]"
      />
      <div className="container-x relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <SectionLabel tone="light">Simple pricing</SectionLabel>
            <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.05] text-ink">
              One visit. One fixed price.
              <span className="font-serif italic font-normal text-crimson-deep">
                {" "}
                No surprises.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={110}>
            <p className="max-w-[38ch] text-[14.5px] leading-[1.75] text-ink/70">
              Choose a starting point and we’ll confirm the exact price for your
              vehicle in writing before anything is booked. Everything below is
              supplied, fitted and VAT inclusive.
            </p>
            <div className="mt-5 inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-[11px] font-medium text-ink/70">
              <span className="flex items-center gap-1.5">
                <Icon name="check" className="h-3.5 w-3.5 text-crimson" strokeWidth={2.4} />
                Inc VAT
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="check" className="h-3.5 w-3.5 text-crimson" strokeWidth={2.4} />
                Mobile fitting
              </span>
              <span className="flex items-center gap-1.5">
                <Icon name="check" className="h-3.5 w-3.5 text-crimson" strokeWidth={2.4} />
                Fixed quote
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3 lg:gap-5">
          {PACKAGES.map((pkg, index) => (
            <Reveal key={pkg.id} delay={index * 100} className="h-full">
              <article
                className={cn(
                  "card-lift relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 sm:p-7",
                  pkg.highlight
                    ? "border-crimson/50 bg-ink text-white shadow-[0_35px_70px_-30px_rgba(255,42,59,0.35)] lg:-mt-3 lg:mb-3"
                    : "border-ink/10 bg-white/80 text-ink backdrop-blur-sm hover:border-crimson/40 hover:bg-white",
                )}
              >
                {pkg.highlight && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,42,59,0.25),transparent_70%)] blur-2xl"
                  />
                )}

                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <h3
                      className={cn(
                        "text-[17px] font-semibold tracking-[-0.02em]",
                        pkg.highlight ? "text-white" : "text-ink",
                      )}
                    >
                      {pkg.name}
                    </h3>
                    <p
                      className={cn(
                        "mt-1.5 max-w-[26ch] text-[12px] leading-[1.6]",
                        pkg.highlight ? "text-white/60" : "text-ink/60",
                      )}
                    >
                      {pkg.tagline}
                    </p>
                  </div>
                  <span
                    className={cn(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-lg",
                      pkg.highlight
                        ? "bg-crimson text-white shadow-[0_0_12px_rgba(255,42,59,0.6)]"
                        : "border border-ink/10 bg-ink/[0.04] text-crimson",
                    )}
                  >
                    <Icon
                      name={pkg.id === "tracker" ? "satellite" : pkg.id === "ghost" ? "lock" : "shieldCheck"}
                      className="h-4 w-4"
                    />
                  </span>
                </div>

                {pkg.badge && (
                  <span className="relative mt-4 w-fit rounded-full bg-crimson px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_12px_rgba(255,42,59,0.5)]">
                    {pkg.badge}
                  </span>
                )}

                <div
                  className={cn(
                    "relative mt-5 flex items-end gap-2 border-b pb-5",
                    pkg.highlight ? "border-white/10" : "border-ink/10",
                  )}
                >
                  <p
                    className={cn(
                      "font-display text-[36px] font-semibold leading-none tracking-[-0.045em]",
                      pkg.highlight ? "text-white" : "text-ink",
                    )}
                  >
                    {pkg.price}
                  </p>
                  <p
                    className={cn(
                      "pb-1 text-[11px]",
                      pkg.highlight ? "text-white/50" : "text-ink/50",
                    )}
                  >
                    {pkg.priceNote}
                  </p>
                </div>

                <ul className="relative mt-5 flex flex-1 flex-col gap-2.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={cn(
                        "flex items-start gap-2.5 text-[12.5px] leading-snug",
                        pkg.highlight ? "text-white/75" : "text-ink/70",
                      )}
                    >
                      <Icon
                        name="check"
                        strokeWidth={2.4}
                        className={cn(
                          "mt-px h-3.5 w-3.5 shrink-0 text-crimson",
                        )}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onChoose(pkg.name)}
                  className={cn(
                    "relative mt-7 w-full",
                    pkg.highlight ? "btn-crimson" : "btn-ink",
                  )}
                >
                  {pkg.cta}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white/60 p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="flex items-start gap-2.5 text-[11.5px] leading-relaxed text-ink/60">
              <Icon name="fileCheck" className="mt-px h-4 w-4 shrink-0 text-crimson" />
              Prices shown are typical for standard installations and include VAT
              and fitting. Vehicle-specific requirements are always confirmed in
              writing before your appointment.
            </p>
            <a
              href="#faq"
              className="group inline-flex shrink-0 items-center gap-1.5 text-[11.5px] font-semibold text-ink hover:text-crimson"
            >
              Questions? Read the FAQs
              <Icon
                name="arrowDown"
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

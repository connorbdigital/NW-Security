import { useRef, useState, type KeyboardEvent } from "react";
import { CONTACT, PRODUCTS } from "../lib/content";
import { cn } from "../utils/cn";
import { Icon, Reveal, SectionLabel } from "./ui";

export default function Showcase({
  onChoose,
}: {
  onChoose: (service: string) => void;
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const product = PRODUCTS[active];

  const handleKey = (event: KeyboardEvent, index: number) => {
    const last = PRODUCTS.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    }
    if (next !== null) {
      event.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="products" className="relative overflow-hidden bg-ink py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,42,59,0.12),transparent_65%)] blur-3xl"
      />
      <div className="container-x relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-[620px]">
            <SectionLabel>The protection</SectionLabel>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.05] text-white">
              Four layers. One very
              <span className="font-serif italic font-normal text-crimson"> unappealing</span>{" "}
              target.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="max-w-[38ch] text-[14.5px] leading-[1.75] text-white/60 lg:text-right">
              Start with prevention, add recovery, then cover the evidence. Every
              product is fitted by the same team — so everything works as one
              system.
            </p>
          </Reveal>
        </div>

        <Reveal delay={80} className="mt-12">
          <div className="grid gap-4 lg:grid-cols-[minmax(240px,0.34fr)_1fr] lg:gap-6">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Vehicle security products"
              aria-orientation="vertical"
              className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:px-0 lg:pb-0"
            >
              {PRODUCTS.map((item, index) => {
                const isActive = index === active;
                return (
                  <button
                    key={item.id}
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    role="tab"
                    id={`product-tab-${item.id}`}
                    aria-selected={isActive}
                    aria-controls={`product-panel-${item.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActive(index)}
                    onKeyDown={(event) => handleKey(event, index)}
                    className={cn(
                      "group relative flex shrink-0 snap-start items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 lg:w-full lg:px-4 lg:py-4",
                      isActive
                        ? "border-crimson/50 bg-white/[0.08] text-white shadow-[0_10px_30px_-15px_rgba(255,42,59,0.45)]"
                        : "border-white/[0.06] bg-white/[0.015] text-white/60 hover:border-white/15 hover:bg-white/[0.045] hover:text-white",
                    )}
                  >
                    <span
                      className={cn(
                        "grid h-9 w-9 shrink-0 place-items-center rounded-lg border transition-colors duration-300",
                        isActive
                          ? "border-crimson/60 bg-crimson text-white shadow-[0_0_12px_rgba(255,42,59,0.6)]"
                          : "border-white/10 bg-white/[0.04] text-crimson group-hover:bg-white/[0.08]",
                      )}
                    >
                      <Icon name={item.icon} className="h-4 w-4" />
                    </span>
                    <span className="flex min-w-0 flex-col">
                      <span className="whitespace-nowrap text-[13px] font-semibold tracking-[-0.01em] lg:whitespace-normal">
                        {item.tab}
                      </span>
                      <span
                        className={cn(
                          "mt-0.5 hidden text-[10.5px] lg:block",
                          isActive ? "text-crimson font-medium" : "text-white/40",
                        )}
                      >
                        {item.price} · fitted
                      </span>
                    </span>
                    <Icon
                      name="arrowRight"
                      className={cn(
                        "ml-auto hidden h-3.5 w-3.5 transition-all duration-300 lg:block",
                        isActive
                          ? "translate-x-0 text-crimson opacity-100"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60",
                      )}
                    />
                  </button>
                );
              })}

              <div className="mt-3 hidden rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 lg:block">
                <p className="text-[11.5px] leading-relaxed text-white/50">
                  Not sure what your vehicle needs?
                </p>
                <a
                  href={CONTACT.primaryTel}
                  className="group mt-2 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-white transition-colors hover:text-crimson"
                >
                  Ask a specialist
                  <Icon
                    name="arrowUpRight"
                    className="h-3.5 w-3.5 text-crimson transition-transform group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>

            {/* Panel */}
            <div
              role="tabpanel"
              id={`product-panel-${product.id}`}
              aria-labelledby={`product-tab-${product.id}`}
              key={product.id}
              className="panel-in grid overflow-hidden rounded-2xl border border-white/10 bg-forest lg:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="relative min-h-[220px] overflow-hidden sm:min-h-[280px] lg:min-h-[420px]">
                <img
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest via-forest/25 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-forest/10 lg:to-forest" />

                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 sm:left-4 sm:top-4">
                  {product.badge && (
                    <span className="rounded-full bg-crimson px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-white shadow-[0_4px_14px_rgba(255,42,59,0.5)]">
                      {product.badge}
                    </span>
                  )}
                  <span className="glass rounded-full px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-white/85">
                    Fitted inc VAT
                  </span>
                </div>

                <div className="absolute inset-x-3 bottom-3 sm:inset-x-4 sm:bottom-4">
                  <div className="glass flex items-center gap-2.5 rounded-xl px-3 py-2.5">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-crimson text-white">
                      <Icon name="shieldCheck" className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                    <div className="leading-tight">
                      <p className="text-[11px] font-semibold text-white">{product.name}</p>
                      <p className="mt-0.5 text-[9.5px] uppercase tracking-[0.12em] text-white/50">
                        Installed by our own team
                      </p>
                    </div>
                    <span className="ml-auto hidden rounded-full border border-white/15 px-2 py-1 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:block">
                      Warranty
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8 lg:p-9">
                <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-crimson">
                  <span className="h-1.5 w-1.5 rounded-full bg-crimson shadow-[0_0_8px_#ff2a3b]" />
                  {product.eyebrow}
                </span>
                <h3 className="mt-3 text-[clamp(1.6rem,2.7vw,2.15rem)] font-semibold leading-[1.1] text-white">
                  {product.headline}
                </h3>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-white/65">
                  {product.description}
                </p>

                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-[12.5px] leading-snug text-white/75"
                    >
                      <Icon
                        name="checkCircle"
                        className="mt-px h-3.5 w-3.5 shrink-0 text-crimson"
                        strokeWidth={2}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-[22px] font-semibold leading-none tracking-[-0.03em] text-white">
                      {product.price}
                    </p>
                    <p className="mt-1 text-[10.5px] text-white/45">{product.priceNote}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onChoose(product.tab)}
                    className="btn-crimson group w-full text-[13px] sm:w-auto"
                  >
                    Enquire about this
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

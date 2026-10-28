import { TRUST_LOGOS } from "../lib/content";
import { Icon, Reveal } from "./ui";

function LogoSet({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden ? "true" : undefined}
      className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14"
    >
      {TRUST_LOGOS.map((logo) => (
        <li
          key={logo.name + (hidden ? "-b" : "")}
          className="group flex items-center gap-3 whitespace-nowrap opacity-60 transition-opacity duration-300 hover:opacity-100"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-crimson group-hover:border-crimson/40">
            <Icon
              name={
                logo.name === "autowatch"
                  ? "steering"
                  : logo.name === "THATCHAM"
                    ? "shieldCheck"
                    : logo.name === "SCORPION"
                      ? "satellite"
                      : logo.name === "TASSA"
                        ? "award"
                        : logo.name === "S5 · S7"
                          ? "fileCheck"
                          : "chart"
              }
              className="h-4 w-4"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
              {logo.name}
            </span>
            <span className="mt-1 text-[8.5px] font-medium uppercase tracking-[0.18em] text-white/50">
              {logo.note}
            </span>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function TrustStrip() {
  return (
    <section
      aria-label="Accreditations and approved products"
      className="relative border-y border-white/[0.08] bg-ink-2 py-8 sm:py-9"
    >
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
            <p className="max-w-[190px] shrink-0 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/45">
              Approved, accredited
              <br className="hidden md:block" /> & insurance recognised
            </p>

            <div className="hidden flex-1 overflow-hidden marquee-mask md:block">
              <div className="flex w-max animate-marquee-slow hover:[animation-play-state:paused]">
                <LogoSet />
                <LogoSet hidden />
              </div>
            </div>

            {/* Static wrap on mobile */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:hidden">
              {TRUST_LOGOS.map((logo) => (
                <div key={logo.name} className="flex items-center gap-2.5">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.04] text-crimson">
                    <Icon name="shieldCheck" className="h-3.5 w-3.5" />
                  </span>
                  <span className="flex flex-col leading-none">
                    <span className="font-display text-[10.5px] font-semibold uppercase tracking-[0.1em] text-white/90">
                      {logo.name}
                    </span>
                    <span className="mt-0.5 text-[8px] uppercase tracking-[0.16em] text-white/40">
                      {logo.note}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

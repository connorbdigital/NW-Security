import { AREAS, CONTACT, NAV_LINKS } from "../lib/content";
import { Icon, Logo } from "./ui";

const serviceLinks = [
  { label: "Ghost immobiliser", href: "#products" },
  { label: "Insurance-approved trackers", href: "#products" },
  { label: "Dash cameras", href: "#products" },
  { label: "Fleet tracking", href: "#products" },
  { label: "Auto locksmith", href: "#products" },
  { label: "Pricing & packages", href: "#pricing" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink pb-28 pt-14 text-white lg:pb-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,42,59,0.1),transparent_70%)] blur-2xl"
      />

      <div className="container-x relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_1fr] lg:gap-12">
          <div>
            <a href="#top" aria-label="North West Vehicle Security — back to top">
              <Logo />
            </a>
            <p className="mt-5 max-w-[34ch] text-[12.5px] leading-[1.75] text-white/55">
              Vehicle security and auto-locksmith specialists, protecting North
              West drivers, dealers and fleets for over 35 years. Supplied,
              fitted and supported by the same team.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={CONTACT.primaryTel}
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-[11.5px] font-semibold text-white transition-colors hover:border-crimson/50 hover:text-crimson"
              >
                <Icon name="phone" className="h-3.5 w-3.5 text-crimson" />
                Call us
              </a>
              <a
                href="https://wa.me/447921189865"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-[11.5px] font-semibold text-white transition-colors hover:border-crimson/50 hover:text-crimson"
              >
                <Icon name="message" className="h-3.5 w-3.5 text-crimson" />
                WhatsApp
              </a>
              <a
                href={CONTACT.mailto}
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-2 text-[11.5px] font-semibold text-white transition-colors hover:border-crimson/50 hover:text-crimson"
              >
                <Icon name="mail" className="h-3.5 w-3.5 text-crimson" />
                Email
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="rounded-md border border-crimson/30 bg-crimson/[0.12] px-2 py-1 text-[8.5px] font-bold uppercase tracking-[0.14em] text-crimson">
                TASSA approved
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] text-white/60">
                Thatcham products
              </span>
            </div>

            <p className="mt-5 border-t border-white/[0.08] pt-4 text-[10.5px] leading-relaxed text-white/45">
              Proud sponsors of{" "}
              <span className="text-white/75">FC Strikerz Lionesses U11s</span> and
              British Supermoto champion{" "}
              <span className="text-white/75">Richard Blakeman</span>.
            </p>
          </div>

          <nav aria-label="Products and services">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Protection
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[12.5px] text-white/60 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-crimson transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[12.5px] text-white/60 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-crimson transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#book"
                  className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-crimson transition-opacity hover:opacity-85"
                >
                  Book a fitting
                  <Icon
                    name="arrowUpRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </li>
            </ul>

            <h2 className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Opening hours
            </h2>
            <p className="mt-3 text-[12px] leading-relaxed text-white/55">
              {CONTACT.hours}
              <br />
              <span className="text-white/40">{CONTACT.emergency} available</span>
            </p>
          </div>

          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
              Areas we cover
            </h2>
            <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
              {AREAS.map((area, index) => (
                <li key={area} className="text-[11.5px] text-white/60">
                  {area}
                  {index < AREAS.length - 1 && (
                    <span aria-hidden="true" className="ml-2 text-white/25">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] p-3.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                Emergency support
              </p>
              <a
                href={CONTACT.supportTel}
                className="mt-1.5 flex items-center gap-2 text-[13px] font-semibold text-white transition-colors hover:text-crimson"
              >
                <Icon name="phone" className="h-3.5 w-3.5 text-crimson" />
                {CONTACT.support}
              </a>
              <p className="mt-1.5 text-[10px] leading-relaxed text-white/40">
                Stolen or immobilised vehicle? Select option 1.
              </p>
            </div>

            <a
              href={CONTACT.mailto}
              className="mt-4 block break-all text-[11.5px] text-white/50 transition-colors hover:text-crimson"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10.5px] leading-relaxed text-white/40">
            © {new Date().getFullYear()} Northwest Vehicle Security. All rights
            reserved. · Mobile fitting across the North West of England.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10.5px] text-white/45">
            <a
              href={`mailto:${CONTACT.email}?subject=Privacy%20request`}
              className="transition-colors hover:text-white"
            >
              Privacy
            </a>
            <a
              href={`mailto:${CONTACT.email}?subject=Terms%20request`}
              className="transition-colors hover:text-white"
            >
              Terms
            </a>
            <a
              href="#top"
              className="group flex items-center gap-1.5 transition-colors hover:text-white"
            >
              Back to top
              <span className="grid h-5 w-5 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-crimson/50">
                <Icon name="arrowUpRight" className="h-3 w-3 -rotate-45 text-crimson" />
              </span>
            </a>
          </div>
        </div>
        <p className="mt-4 max-w-[90ch] text-[9.5px] leading-relaxed text-white/30">
          Prices shown include VAT and standard installation unless stated
          otherwise. Vehicle compatibility, insurance approval and any
          model-specific requirements are confirmed in writing before booking.
          Product names and trademarks belong to their respective owners.
        </p>
      </div>
    </footer>
  );
}

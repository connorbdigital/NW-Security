import { useEffect, useState } from "react";
import { CONTACT, NAV_LINKS } from "../lib/content";
import { cn } from "../utils/cn";
import { Icon, Logo } from "./ui";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setScrolled(window.scrollY > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#hero-heading"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-crimson focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      {/* Top emergency & contact utility strip */}
      <div className="relative z-40 hidden border-b border-white/[0.08] bg-ink-2 text-white sm:block">
        <div className="container-x flex h-9 items-center justify-between gap-6 text-[11px] font-medium">
          <p className="flex items-center gap-2 tracking-[0.03em] text-white/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson" />
            </span>
            Mobile fitting across the North West
            <span className="text-white/20">·</span>
            <span className="font-semibold text-white/90">Same-week appointments</span>
          </p>
          <div className="flex items-center gap-5">
            <a
              className="hidden items-center gap-1.5 text-white/60 transition-colors hover:text-white md:flex"
              href={`mailto:${CONTACT.email}`}
            >
              <Icon name="mail" className="h-3.5 w-3.5 text-crimson" />
              {CONTACT.email}
            </a>
            <span className="hidden h-3 w-px bg-white/15 md:block" />
            <a
              className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-crimson"
              href={CONTACT.primaryTel}
            >
              <Icon name="phone" className="h-3.5 w-3.5 text-crimson" />
              {CONTACT.primaryPhone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-ink/90 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.95)] backdrop-blur-xl"
            : "border-b border-transparent bg-ink/50 backdrop-blur-md",
        )}
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-6">
          <a
            href="#top"
            aria-label="North West Vehicle Security — home"
            className="shrink-0 rounded-lg transition-opacity hover:opacity-90"
          >
            <Logo />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="link-underline text-[13.5px] font-medium text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={CONTACT.primaryTel}
              className="hidden items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:border-crimson/50 hover:bg-crimson/10 xl:flex"
            >
              <Icon name="phone" className="h-4 w-4 text-crimson" />
              {CONTACT.primaryPhone}
            </a>
            <a href="#book" className="btn-crimson hidden px-5 py-2.5 sm:inline-flex">
              Book a fitting
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scroll progress line in racing crimson */}
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-x-0 bottom-0 h-[2px] overflow-hidden transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0",
          )}
        >
          <div
            className="h-full origin-left bg-gradient-to-r from-crimson-deep via-crimson to-crimson-soft transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-[70] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/75 backdrop-blur-sm transition-opacity duration-500",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={cn(
            "absolute inset-y-0 right-0 flex w-full max-w-[380px] flex-col overflow-y-auto border-l border-white/10 bg-ink-2 px-6 pb-8 pt-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
            >
              <Icon name="close" className="h-5 w-5" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link, index) => (
                <li key={link.href} className="border-b border-white/[0.07]">
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-4 text-xl font-medium text-white/85 transition-colors hover:text-crimson"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-white/30">
                        0{index + 1}
                      </span>
                      {link.label}
                    </span>
                    <Icon
                      name="arrowUpRight"
                      className="h-4 w-4 text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-crimson"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-3">
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn-crimson w-full"
            >
              Book a free security review
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </a>
            <a href={CONTACT.primaryTel} className="btn-ghost w-full">
              <Icon name="phone" className="h-4 w-4 text-crimson" />
              {CONTACT.primaryPhone}
            </a>
          </div>

          <div className="mt-auto pt-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">
              Speak to a specialist
            </p>
            <a
              href={CONTACT.mailto}
              className="mt-2 block break-all text-sm text-white/75 hover:text-crimson"
            >
              {CONTACT.email}
            </a>
            <p className="mt-4 flex items-center gap-2 text-xs text-white/50">
              <Icon name="mapPin" className="h-3.5 w-3.5 text-crimson" />
              Mobile fitting across the North West
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

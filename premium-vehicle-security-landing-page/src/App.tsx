import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Reality from "./components/Reality";
import Showcase from "./components/Showcase";
import Benefits from "./components/Benefits";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Faq from "./components/Faq";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import { CONTACT } from "./lib/content";
import { Icon } from "./components/ui";
import { cn } from "./utils/cn";

const SERVICE_MAP: Record<string, string> = {
  "Ghost Immobiliser": "Ghost immobiliser",
  "GPS Tracker": "GPS tracker",
  "Smart Dash Cam": "Dash cam",
  "Fleet Tracking": "Fleet tracking",
  "Auto Locksmith": "Auto locksmith",
  Tracker: "GPS tracker",
  Ghost: "Ghost immobiliser",
  "Total Shield": "Complete protection bundle",
};

function MobileCta() {
  const [visible, setVisible] = useState(false);
  const [atBooking, setAtBooking] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const target = document.getElementById("book");
    let observer: IntersectionObserver | undefined;
    if (target && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => setAtBooking(entry.isIntersecting),
        { threshold: 0.12 },
      );
      observer.observe(target);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer?.disconnect();
    };
  }, []);

  const active = visible && !atBooking;

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 px-3 pb-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
        active
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-24 opacity-0",
      )}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="glass mx-auto flex max-w-md items-center gap-2 rounded-2xl border-white/15 bg-ink/95 p-2 shadow-[0_25px_60px_-25px_rgba(0,0,0,0.95)]">
        <a
          href={CONTACT.primaryTel}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/12 px-3 py-3 text-[12.5px] font-semibold text-white transition-colors hover:bg-white/[0.06]"
        >
          <Icon name="phone" className="h-4 w-4 text-crimson" />
          Call now
        </a>
        <a href="#book" className="btn-crimson flex-[1.15] py-3 text-[12.5px]">
          Book a fitting
          <Icon name="arrowUpRight" className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [service, setService] = useState("");

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const anchor = (event.target as HTMLElement | null)?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#" || hash === "#hero-heading") return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      event.preventDefault();
      const reduce = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const top = target.getBoundingClientRect().top + window.scrollY - 84;
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "";
      }
      window.scrollTo({ top: Math.max(top, 0), behavior: reduce ? "auto" : "smooth" });
      if (window.history?.replaceState) {
        window.history.replaceState(null, "", hash);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const handleChoose = useCallback((label: string) => {
    setService(SERVICE_MAP[label] ?? "Not sure yet — advise me");
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.setTimeout(() => {
      document.getElementById("book")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
      if (window.matchMedia?.("(min-width: 768px)").matches) {
        window.setTimeout(() => {
          document.getElementById("service")?.focus({ preventScroll: true });
        }, 450);
      }
    }, 60);
  }, []);

  return (
    <div className="relative min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Reality />
        <Showcase onChoose={handleChoose} />
        <Benefits />
        <Testimonials />
        <Pricing onChoose={handleChoose} />
        <Faq />
        <Booking service={service} onServiceChange={setService} />
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ */
/* Official Client Logo Component                                      */
/* Uses the authentic Northwest Vehicle Security shield badge logo    */
/* ------------------------------------------------------------------ */

export function Logo({
  className,
  tone = "light",
  compact = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  compact?: boolean;
}) {
  const ink = tone === "light" ? "text-white" : "text-ink";
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-crimson/30 bg-ink-2 shadow-[0_8px_24px_-8px_rgba(255,42,59,0.55)]">
        <img
          src="/images/nwvs-logo.png"
          alt="North West Vehicle Security"
          width={48}
          height={48}
          className="h-10 w-10 object-contain"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[15.5px] font-bold tracking-[-0.02em]",
            ink,
          )}
        >
          North West
        </span>
        {!compact && (
          <span className="mt-1 text-[9.5px] font-bold uppercase tracking-[0.24em] text-crimson">
            Vehicle Security
          </span>
        )}
      </span>
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

export type IconName =
  | "shield"
  | "shieldCheck"
  | "lock"
  | "satellite"
  | "camera"
  | "van"
  | "key"
  | "phone"
  | "message"
  | "check"
  | "checkCircle"
  | "arrowRight"
  | "arrowUpRight"
  | "arrowDown"
  | "star"
  | "menu"
  | "close"
  | "plus"
  | "mapPin"
  | "clock"
  | "award"
  | "sparkle"
  | "chart"
  | "bell"
  | "mail"
  | "instagram"
  | "facebook"
  | "chevronDown"
  | "steering"
  | "route"
  | "users"
  | "tool"
  | "fileCheck"
  | "zap"
  | "car"
  | "radio"
  | "pin"
  | "quote";

const iconPaths: Record<IconName, ReactNode> = {
  shield: <path d="M12 3 20 6v6c0 4.6-3.3 8.1-8 10-4.7-1.9-8-5.4-8-10V6l8-3Z" />,
  shieldCheck: (
    <>
      <path d="M12 3 20 6v6c0 4.6-3.3 8.1-8 10-4.7-1.9-8-5.4-8-10V6l8-3Z" />
      <path d="m9 12 2 2 4-4.2" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.5" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
      <path d="M12 14.5v2" />
    </>
  ),
  satellite: (
    <>
      <path d="m7 13 4 4" />
      <path d="m9.5 10.5 4 4" />
      <path d="M14 5.5 18.5 10 13 15.5 8.5 11 14 5.5Z" />
      <path d="M5.5 14 10 18.5 7 21.5 2.5 17 5.5 14Z" />
      <path d="M16.5 3.5c2.5-.5 4.5 1.5 4 4" />
    </>
  ),
  camera: (
    <>
      <path d="M3.5 8.5h3l1.5-2h8l1.5 2h3v10h-17v-10Z" />
      <circle cx="12" cy="13.5" r="3.2" />
    </>
  ),
  van: (
    <>
      <path d="M2.5 16V7h10v9" />
      <path d="M12.5 10H17l4 4v2h-8.5" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17.5" cy="17.5" r="1.8" />
      <path d="M2.5 17.5h2.7M8.8 17.5h6.9M19.3 17.5h2.2" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4.2" />
      <path d="m11 11 8.5 8.5" />
      <path d="m14.5 14.5 2-2M17.5 17.5l2-2" />
    </>
  ),
  phone: (
    <path d="M6.3 3.8h3l1.5 3.7-2 1.4a11.5 11.5 0 0 0 5.8 5.8l1.4-2 3.7 1.5v3a2.2 2.2 0 0 1-2.4 2.2C10.7 18.6 5.4 13.3 4.1 6.2a2.2 2.2 0 0 1 2.2-2.4Z" />
  ),
  message: (
    <path d="M20.5 11.5a8 8 0 0 1-11.7 7.2L3.5 20.5l1.8-5.2A8 8 0 1 1 20.5 11.5Z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 6.5" />,
  checkCircle: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  arrowDown: (
    <>
      <path d="M12 4v16" />
      <path d="m6 14 6 6 6-6" />
    </>
  ),
  star: (
    <path d="m12 3.4 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.6l5.9-.8L12 3.4Z" />
  ),
  menu: <path d="M3.5 7h17M3.5 12h17M3.5 17h17" />,
  close: <path d="m5.5 5.5 13 13M18.5 5.5l-13 13" />,
  plus: <path d="M12 5v14M5 12h14" />,
  mapPin: (
    <>
      <path d="M19 10.2c0 5.1-7 10.3-7 10.3S5 15.3 5 10.2a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9.5" r="5.5" />
      <path d="m8.5 14.5-1.4 6 4.9-2.6 4.9 2.6-1.4-6" />
    </>
  ),
  sparkle: (
    <path d="M12 3.5c.7 4.4 2.6 6.3 7 7-4.4.7-6.3 2.6-7 7-.7-4.4-2.6-6.3-7-7 4.4-.7 6.3-2.6 7-7Z" />
  ),
  chart: (
    <>
      <path d="M4 19.5h16" />
      <path d="M7 16V11M12 16V6.5M17 16v-3" />
    </>
  ),
  bell: (
    <>
      <path d="M18 15.5H6l1.4-2.2V10a4.6 4.6 0 0 1 9.2 0v3.3l1.4 2.2Z" />
      <path d="M10.5 18.5a1.6 1.6 0 0 0 3 0" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.4" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M17 7.2h.01" />
    </>
  ),
  facebook: (
    <path d="M14.5 21v-7h2.6l.4-3h-3V9.1c0-.9.3-1.5 1.6-1.5H18V4.9c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.4V11H8.4v3H11v7" />
  ),
  chevronDown: <path d="m6 9.5 6 6 6-6" />,
  steering: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M3.7 11h5.9M14.4 11h5.9M12 14.4V20" />
    </>
  ),
  route: (
    <>
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
      <path d="M9 6.5h4.5a3.5 3.5 0 0 1 0 7h-3a3.5 3.5 0 0 0 0 7H15" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8.5" r="3.4" />
      <path d="M3.5 19.5c.5-3.4 2.9-5.3 6-5.3s5.5 1.9 6 5.3" />
      <path d="M16 5.4a3.4 3.4 0 0 1 0 6.4M17.5 14.5c1.8.6 2.8 2.3 3 5" />
    </>
  ),
  tool: (
    <path d="M14.5 6.2a4.4 4.4 0 0 0 5.6 5.6L21 13l-8 8-2-2 1.2-1.1a4.4 4.4 0 0 1-5.6-5.6L3 9l3-3 4.6 4.6L14.5 6.2Z" />
  ),
  fileCheck: (
    <>
      <path d="M6 3.5h7l5 5v12H6v-17Z" />
      <path d="M13 3.5v5h5" />
      <path d="m9 14.5 2 2 4-4" />
    </>
  ),
  zap: <path d="M13.5 3 5 14h5.5L10 21l8.5-11h-5.5l.5-7Z" />,
  car: (
    <>
      <path d="M4 16v-3.5L6 7h12l2 5.5V16" />
      <path d="M3.5 16h17" />
      <circle cx="7.5" cy="17.5" r="1.7" />
      <circle cx="16.5" cy="17.5" r="1.7" />
      <path d="M5.5 12h13" />
    </>
  ),
  radio: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 15.8a5.4 5.4 0 0 0 0-7.6M5.4 5.4a9.3 9.3 0 0 0 0 13.2M18.6 18.6a9.3 9.3 0 0 0 0-13.2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6-4.5 6-10a6 6 0 1 0-12 0c0 5.5 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  quote: (
    <path d="M9.5 5.5C6 7 4 10 4 13.5V19h6v-6H7c.2-2 1.3-3.6 3.4-4.8L9.5 5.5Zm10 0C16 7 14 10 14 13.5V19h6v-6h-3c.2-2 1.3-3.6 3.4-4.8l-.9-2.7Z" />
  ),
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
  filled = false,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={cn("h-5 w-5", className)}
    >
      {iconPaths[name]}
    </svg>
  );
}

export function Stars({
  className,
  count = 5,
  size = "h-4 w-4",
}: {
  className?: string;
  count?: number;
  size?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" filled className={cn(size, "text-crimson")} />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Reveal                                                              */
/* ------------------------------------------------------------------ */

export function Reveal({
  children,
  className,
  delay = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* In-view + count up                                                  */
/* ------------------------------------------------------------------ */

export function useInView<T extends HTMLElement>(threshold = 0.3) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  decimals = 0,
  className,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let frame = 0;
    const duration = 1500;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(to * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString("en-GB", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                     */
/* ------------------------------------------------------------------ */

export function SectionLabel({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow gap-2.5",
        tone === "dark" ? "text-crimson" : "text-crimson-deep",
        className,
      )}
    >
      <span
        className={cn(
          "h-px w-7",
          tone === "dark" ? "bg-crimson/70" : "bg-crimson-deep/60",
        )}
      />
      {children}
    </span>
  );
}

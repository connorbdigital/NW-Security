import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { CONTACT, SERVICE_OPTIONS } from "../lib/content";
import { Icon, Reveal, SectionLabel } from "./ui";
import { cn } from "../utils/cn";

type Errors = Partial<Record<"name" | "phone" | "email" | "service", string>>;

const steps = [
  {
    number: "01",
    title: "Tell us the vehicle",
    copy: "Registration or make, model and year is plenty to check compatibility.",
  },
  {
    number: "02",
    title: "Get honest advice",
    copy: "We recommend the right layer of protection for how you actually use the car.",
  },
  {
    number: "03",
    title: "Choose your fitting",
    copy: "Book a same-week slot at home or work. We arrive with everything needed.",
  },
];

export default function Booking({
  service,
  onServiceChange,
}: {
  service: string;
  onServiceChange: (value: string) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    postcode: "",
    message: "",
    company: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (submitted) successRef.current?.focus();
  }, [submitted]);

  const update =
    (key: keyof typeof form) =>
    (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    ) => {
      setForm((previous) => ({ ...previous, [key]: event.target.value }));
      setErrors((previous) => ({ ...previous, [key]: undefined }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (form.company) return; // honeypot
    const next: Errors = {};
    if (form.name.trim().length < 2) next.name = "Please tell us your name.";
    if (form.phone.replace(/\D/g, "").length < 10)
      next.phone = "Please enter a valid contact number.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email))
      next.email = "That email address doesn’t look right.";
    if (!service) next.service = "Please choose a service.";

    setErrors(next);

    if (Object.keys(next).length > 0) {
      const firstKey = Object.keys(next)[0];
      const id = firstKey === "service" ? "service" : `booking-${firstKey}`;
      document.getElementById(id)?.focus();
      return;
    }

    setSubmitted(true);
  };

  const fieldError = (key: keyof Errors) =>
    errors[key] ? (
      <p id={`booking-${key}-error`} className="mt-1.5 text-[11px] text-[#ff6b78]">
        <Icon name="close" className="mr-1 inline h-3 w-3" />
        {errors[key]}
      </p>
    ) : null;

  return (
    <section
      id="book"
      className="relative overflow-hidden rounded-t-[2rem] bg-ink-2 py-20 sm:rounded-t-[3rem] sm:py-24 lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-35 [mask-image:radial-gradient(ellipse_at_center,black_5%,transparent_72%)]" />
        <div className="absolute -right-32 top-0 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,42,59,0.18),transparent_65%)] blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(220,20,36,0.12),transparent_70%)] blur-2xl" />
      </div>

      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 xl:gap-20">
          <div className="lg:py-2">
            <Reveal>
              <SectionLabel>Next step</SectionLabel>
              <h2 className="mt-5 max-w-[17ch] text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-[1.04] text-white">
                Let’s make it harder
                <span className="font-serif italic font-normal text-crimson"> to steal.</span>
              </h2>
              <p className="mt-5 max-w-[40ch] text-[14.5px] leading-[1.75] text-white/65">
                A free, no-obligation security review. Tell us what you drive and
                we’ll come back with a straight recommendation and a fixed price
                — usually within one working hour.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ol className="mt-9 space-y-0">
                {steps.map((step, index) => (
                  <li key={step.number} className="relative flex gap-4 pb-6 last:pb-0">
                    {index < steps.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[15px] top-9 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-white/20 to-white/5"
                      />
                    )}
                    <span className="relative z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-crimson/40 bg-ink text-[10px] font-semibold tracking-[0.06em] text-crimson shadow-[0_0_8px_rgba(255,42,59,0.3)]">
                      {step.number}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-[13.5px] font-semibold text-white">{step.title}</p>
                      <p className="mt-1 max-w-[38ch] text-[12px] leading-[1.65] text-white/50">
                        {step.copy}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-9 grid gap-2.5 sm:grid-cols-2">
                <a
                  href={CONTACT.primaryTel}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/50 hover:bg-crimson/10"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-crimson/15 text-crimson">
                    <Icon name="phone" className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      Call Nick
                    </span>
                    <span className="mt-0.5 block truncate text-[12.5px] font-semibold text-white">
                      {CONTACT.primaryPhone}
                    </span>
                  </span>
                </a>
                <a
                  href="https://wa.me/447921189865"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson/50 hover:bg-crimson/10"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-crimson/15 text-crimson">
                    <Icon name="message" className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
                      WhatsApp James
                    </span>
                    <span className="mt-0.5 block truncate text-[12.5px] font-semibold text-white">
                      {CONTACT.jamesPhone}
                    </span>
                  </span>
                </a>
              </div>
              <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-white/40">
                <Icon name="mapPin" className="h-3.5 w-3.5 text-crimson" />
                Home, work or fleet yard across the North West · {CONTACT.hours}
              </p>
            </Reveal>
          </div>

          {/* Form card */}
          <Reveal delay={140}>
            <div className="glass relative overflow-hidden rounded-2xl p-5 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.9)] sm:rounded-3xl sm:p-7 lg:p-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson/80 to-transparent"
              />

              {submitted ? (
                <div aria-live="polite" className="flex min-h-[430px] flex-col justify-center py-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-crimson text-white shadow-[0_18px_40px_-18px_rgba(255,42,59,0.8)]">
                    <Icon name="check" className="h-7 w-7" strokeWidth={2.6} />
                  </span>
                  <h3
                    ref={successRef}
                    tabIndex={-1}
                    className="mt-6 text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-tight text-white focus:outline-none"
                  >
                    Nice one, {form.name.trim().split(" ")[0] || "there"}.
                    <br />
                    <span className="text-white/60">Your request is in.</span>
                  </h3>
                  <p className="mt-3 max-w-[38ch] text-[13.5px] leading-[1.7] text-white/65">
                    Nick or James will call you back on{" "}
                    <span className="font-semibold text-white">{form.phone}</span> to
                    confirm compatibility and pricing
                    {service ? ` for your ${service.toLowerCase()}` : ""}. Usually
                    within one working hour.
                  </p>
                  <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/40">
                      Need us sooner?
                    </p>
                    <a
                      href={CONTACT.primaryTel}
                      className="mt-1.5 flex items-center gap-2 text-[14px] font-semibold text-crimson transition-opacity hover:opacity-85"
                    >
                      <Icon name="phone" className="h-4 w-4" />
                      {CONTACT.primaryPhone}
                    </a>
                  </div>
                  <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: "",
                          phone: "",
                          email: "",
                          vehicle: "",
                          postcode: "",
                          message: "",
                          company: "",
                        });
                        onServiceChange("");
                      }}
                      className="btn-ghost w-full py-3 text-[13px]"
                    >
                      Send another enquiry
                    </button>
                    <a href="#products" className="btn-crimson w-full py-3 text-[13px]">
                      Explore protection
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[19px] font-semibold tracking-[-0.025em] text-white">
                        Request a free quote
                      </h3>
                      <p className="mt-1 text-[11.5px] text-white/45">
                        No obligation · Free advice · Fixed pricing
                      </p>
                    </div>
                    <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-crimson/30 bg-crimson/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.1em] text-crimson">
                      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-crimson shadow-[0_0_8px_#ff2a3b]" />
                      Booking
                    </span>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="booking-name" className="field-label">
                        Your name <span className="text-crimson">*</span>
                      </label>
                      <input
                        id="booking-name"
                        name="name"
                        autoComplete="name"
                        value={form.name}
                        onChange={update("name")}
                        className={cn("field", errors.name && "border-crimson/80")}
                        placeholder="Alex Morgan"
                        aria-required="true"
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "booking-name-error" : undefined}
                      />
                      {fieldError("name")}
                    </div>
                    <div>
                      <label htmlFor="booking-phone" className="field-label">
                        Phone <span className="text-crimson">*</span>
                      </label>
                      <input
                        id="booking-phone"
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={update("phone")}
                        className={cn("field", errors.phone && "border-crimson/80")}
                        placeholder="07700 900123"
                        aria-required="true"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "booking-phone-error" : undefined}
                      />
                      {fieldError("phone")}
                    </div>
                    <div>
                      <label htmlFor="booking-email" className="field-label">
                        Email <span className="font-normal normal-case tracking-normal text-white/30">(optional)</span>
                      </label>
                      <input
                        id="booking-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        value={form.email}
                        onChange={update("email")}
                        className={cn("field", errors.email && "border-crimson/80")}
                        placeholder="alex@email.co.uk"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "booking-email-error" : undefined}
                      />
                      {fieldError("email")}
                    </div>
                    <div>
                      <label htmlFor="booking-vehicle" className="field-label">
                        Vehicle
                      </label>
                      <input
                        id="booking-vehicle"
                        name="vehicle"
                        value={form.vehicle}
                        onChange={update("vehicle")}
                        className="field"
                        placeholder="e.g. 2023 Range Rover Sport"
                        autoComplete="off"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="field-label">
                        What do you need? <span className="text-crimson">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={service}
                          onChange={(event) => {
                            onServiceChange(event.target.value);
                            setErrors((previous) => ({ ...previous, service: undefined }));
                          }}
                          aria-required="true"
                          aria-invalid={Boolean(errors.service)}
                          aria-describedby={errors.service ? "booking-service-error" : undefined}
                          className={cn(
                            "field appearance-none pr-9",
                            service ? "text-white" : "text-white/40",
                            errors.service && "border-crimson/80",
                          )}
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={option} value={option} className="bg-forest text-white">
                              {option}
                            </option>
                          ))}
                        </select>
                        <Icon
                          name="chevronDown"
                          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                        />
                      </div>
                      {fieldError("service")}
                    </div>
                    <div>
                      <label htmlFor="booking-postcode" className="field-label">
                        Postcode
                      </label>
                      <input
                        id="booking-postcode"
                        name="postcode"
                        value={form.postcode}
                        onChange={update("postcode")}
                        className="field"
                        placeholder="BL1 2AB"
                        autoComplete="postal-code"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="booking-message" className="field-label">
                        Anything else?{" "}
                        <span className="font-normal normal-case tracking-normal text-white/30">
                          (optional)
                        </span>
                      </label>
                      <textarea
                        id="booking-message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={update("message")}
                        className="field resize-none"
                        placeholder="Preferred day, insurer requirement, existing security…"
                      />
                    </div>
                  </div>

                  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      tabIndex={-1}
                      autoComplete="off"
                      value={form.company}
                      onChange={update("company")}
                    />
                  </div>

                  <button type="submit" className="btn-crimson group mt-5 w-full py-4">
                    Get my free quote
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                  </button>

                  <p className="mt-3.5 flex items-start gap-2 text-[10.5px] leading-relaxed text-white/40">
                    <Icon name="lock" className="mt-px h-3.5 w-3.5 shrink-0 text-crimson" />
                    Your details are only used to respond to this enquiry. No
                    sales lists, ever.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p className="flex items-start gap-3 text-[12px] leading-relaxed text-white/60">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-crimson/15 text-crimson">
                <Icon name="bell" className="h-4 w-4" />
              </span>
              <span>
                <span className="font-semibold text-white">
                  Vehicle stolen or immobilised?
                </span>{" "}
                Call our 24/7 support line on{" "}
                <a
                  href={CONTACT.supportTel}
                  className="font-semibold text-crimson underline decoration-crimson/40 underline-offset-2 hover:decoration-crimson"
                >
                  {CONTACT.support}
                </a>{" "}
                and select option 1 for emergency assistance.
              </span>
            </p>
            <span className="flex shrink-0 items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/40">
              <Icon name="shieldCheck" className="h-4 w-4 text-crimson" />
              TASSA approved
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

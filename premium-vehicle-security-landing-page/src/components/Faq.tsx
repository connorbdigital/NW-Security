import { useState } from "react";
import { CONTACT, FAQS } from "../lib/content";
import { cn } from "../utils/cn";
import { Icon, Reveal, SectionLabel } from "./ui";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-cream pb-20 text-ink sm:pb-24 lg:pb-28">
      <div className="container-x">
        <div className="grid gap-10 border-t border-ink/10 pt-16 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:pt-20">
          <div>
            <Reveal>
              <SectionLabel tone="light">Questions</SectionLabel>
              <h2 className="mt-5 max-w-[14ch] text-[clamp(2rem,4vw,3rem)] font-semibold leading-[1.05] text-ink">
                Straight answers,
                <span className="font-serif italic font-normal text-crimson-deep"> no jargon.</span>
              </h2>
              <p className="mt-4 max-w-[34ch] text-[14px] leading-[1.7] text-ink/65">
                Everything drivers usually ask before booking. If your question
                isn’t here, a quick call is easiest.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/10 bg-ink p-6 text-white sm:p-7">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,42,59,0.22),transparent_70%)] blur-xl"
                />
                <div className="relative">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-crimson/30 bg-crimson/15 text-crimson">
                    <Icon name="message" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[19px] font-semibold tracking-[-0.02em]">
                    Still deciding?
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-[1.65] text-white/60">
                    Tell us the vehicle and how it’s used. We’ll recommend the
                    right layer of protection — even if that’s the cheaper option.
                  </p>

                  <div className="mt-5 space-y-2">
                    <a
                      href={CONTACT.primaryTel}
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 transition-colors hover:border-crimson/50 hover:bg-white/[0.08]"
                    >
                      <Icon name="phone" className="h-4 w-4 text-crimson" />
                      <span className="text-[12.5px] font-semibold">
                        {CONTACT.primaryPhone}
                      </span>
                      <Icon
                        name="arrowUpRight"
                        className="ml-auto h-3.5 w-3.5 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-crimson"
                      />
                    </a>
                    <a
                      href={`https://wa.me/447921189865`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-3 transition-colors hover:border-crimson/50 hover:bg-white/[0.08]"
                    >
                      <Icon name="message" className="h-4 w-4 text-crimson" />
                      <span className="text-[12.5px] font-semibold">WhatsApp James</span>
                      <Icon
                        name="arrowUpRight"
                        className="ml-auto h-3.5 w-3.5 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:text-crimson"
                      />
                    </a>
                  </div>

                  <p className="mt-4 flex items-start gap-2 text-[10.5px] leading-relaxed text-white/45">
                    <Icon name="clock" className="mt-px h-3.5 w-3.5 shrink-0 text-crimson" />
                    {CONTACT.hours} · {CONTACT.emergency} on{" "}
                    <a
                      href={CONTACT.supportTel}
                      className="underline decoration-crimson/50 underline-offset-2 transition-colors hover:text-crimson"
                    >
                      {CONTACT.support}
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {FAQS.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <li key={faq.q}>
                    <h3>
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        id={`faq-button-${index}`}
                        className="group flex w-full items-start justify-between gap-5 py-5 text-left transition-colors"
                      >
                        <span className="flex items-start gap-4">
                          <span
                            className={cn(
                              "mt-0.5 font-display text-[10px] font-semibold tracking-[0.12em] transition-colors duration-300",
                              isOpen ? "text-crimson" : "text-ink/30",
                            )}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span
                            className={cn(
                              "text-[14.5px] font-semibold leading-snug tracking-[-0.01em] transition-colors duration-300",
                              isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink",
                            )}
                          >
                            {faq.q}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition-all duration-300",
                            isOpen
                              ? "rotate-45 border-crimson bg-crimson text-white shadow-[0_0_10px_rgba(255,42,59,0.5)]"
                              : "border-ink/15 bg-transparent text-ink/60 group-hover:border-ink/35 group-hover:bg-ink/5",
                          )}
                          aria-hidden="true"
                        >
                          <Icon name="plus" className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-panel-${index}`}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                      className={cn(
                        "grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-[58ch] pb-5 pl-8 pr-2 text-[13.5px] leading-[1.75] text-ink/65">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

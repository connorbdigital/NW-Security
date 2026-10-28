import { CountUp, Icon, Reveal, SectionLabel } from "./ui";

const threats = [
  {
    number: "01",
    icon: "radio" as const,
    title: "Relay attack",
    copy: "Two thieves, two devices, one signal. Your key sits inside your house while the car outside quietly unlocks and starts.",
  },
  {
    number: "02",
    icon: "key" as const,
    title: "Key cloning",
    copy: "A signal grabber copies your fob. The car sees a genuine key, so the factory alarm never sounds — and it disappears in seconds.",
  },
  {
    number: "03",
    icon: "tool" as const,
    title: "OBD access",
    copy: "Plug into the diagnostic port, program a new key, drive away. No broken glass. No noise. Just minutes of opportunity.",
  },
];

const stats: {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
}[] = [
  { value: 35, suffix: "+", label: "Years protecting North West drivers" },
  { value: 1000, suffix: "+", label: "Vehicles secured & keys replaced" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Average customer rating" },
  { value: 24, suffix: "/7", label: "Emergency support available" },
];

export default function Reality() {
  return (
    <section
      id="reality"
      className="relative overflow-hidden rounded-t-[2rem] bg-cream text-ink sm:rounded-t-[3rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-grid-dark opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_70%)]"
      />
      <div className="container-x relative py-20 sm:py-24 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
          <Reveal>
            <SectionLabel tone="light">The reality</SectionLabel>
            <h2 className="mt-5 max-w-[18ch] text-[clamp(2.1rem,4.4vw,3.4rem)] font-semibold leading-[1.04] text-ink">
              Keyless theft doesn’t pick a lock.
              <span className="font-serif italic font-normal text-crimson-deep">
                {" "}
                It picks a signal.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-[38ch] text-[15px] leading-[1.75] text-ink/70 lg:pb-2">
              Factory alarms were built for a different era of car crime. Modern
              thieves target the electronic signal, not the lock — which is why
              a layered, aftermarket defence is the only realistic answer.
            </p>
            <a
              href="#products"
              className="group mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-crimson-deep transition-colors hover:text-crimson"
            >
              See how we stop it
              <span className="grid h-6 w-6 place-items-center rounded-full border border-crimson/30 transition-all duration-300 group-hover:border-crimson group-hover:bg-crimson group-hover:text-white">
                <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
              </span>
            </a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3 sm:gap-4 md:grid-cols-3">
          {threats.map((threat, index) => (
            <Reveal key={threat.title} delay={index * 100}>
              <article className="card-lift group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white/80 p-6 backdrop-blur-sm hover:border-crimson/40 hover:bg-white sm:p-7">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ink text-crimson">
                    <Icon name={threat.icon} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-[11px] font-semibold tracking-[0.16em] text-ink/30">
                    {threat.number}
                  </span>
                </div>
                <h3 className="mt-7 text-[19px] font-semibold tracking-[-0.02em] text-ink">
                  {threat.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-[1.65] text-ink/65">
                  {threat.copy}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 bg-crimson transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-ink px-6 py-8 text-white sm:rounded-3xl sm:px-10 sm:py-9 lg:mt-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,42,59,0.22),transparent_70%)] blur-2xl"
            />
            <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index > 0
                      ? "lg:border-l lg:border-white/10 lg:pl-6"
                      : undefined
                  }
                >
                  <p className="font-display text-[34px] font-medium leading-none tracking-[-0.04em] text-crimson sm:text-[38px]">
                    {stat.suffix === "/5" ? (
                      "4.9/5"
                    ) : (
                      <CountUp
                        to={stat.value}
                        suffix={stat.suffix}
                        decimals={stat.decimals ?? 0}
                      />
                    )}
                  </p>
                  <p className="mt-2.5 max-w-[20ch] text-[12px] leading-[1.5] text-white/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

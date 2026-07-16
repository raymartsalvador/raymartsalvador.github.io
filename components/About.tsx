const facts = [
  { label: 'Based in', value: 'Biñan, Laguna, PH' },
  { label: 'Day job', value: 'Enterprise systems' },
  { label: 'After hours', value: 'SaaS products' },
  { label: 'Community', value: 'Panels & workshops' },
];

export default function About() {
  return (
    <section id="about" className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-4 reveal">
            <div className="relative max-w-xs mx-auto lg:mx-0">
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-run/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-black/40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/about.webp"
                  alt="Raymart Salvador presenting on stage"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
                <span className="absolute bottom-2.5 right-2.5 mono text-[10px] text-white/90 bg-black/55 rounded px-1.5 py-0.5">
                  on stage · demo day
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 reveal">
            <p className="mono text-sm text-run">about</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Builder first, engineer always.
            </h2>
            <div className="mt-5 space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                I&apos;m a Computer Engineering graduate from the Polytechnic University of the
                Philippines who&apos;s been shipping software since 2023 — first as a freelance
                developer for local businesses, now building enterprise systems by day and my own
                products after hours.
              </p>
              <p>
                What gets me going isn&apos;t the code itself — it&apos;s watching a paper process
                turn digital, a local brand get its first online bookings, or a school stop
                printing certificates by hand. I like owning the whole journey: design, build,
                deploy, and the unglamorous operating that comes after launch.
              </p>
              <p>
                Outside work I&apos;m part of the DOST-backed PUP Pylon startup incubator, and I
                give back through panels and hands-on workshops for the next batch of engineers at
                my alma mater.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-4">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-ink-900 dark:text-white">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

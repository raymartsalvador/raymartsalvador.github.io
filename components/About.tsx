const facts = [
  { label: 'Based in', value: 'Biñan, Laguna, PH' },
  { label: 'Day job', value: 'Enterprise systems' },
  { label: 'After hours', value: 'SaaS products' },
  { label: 'Community', value: 'Panels & workshops' },
];

export default function About() {
  return (
    <section id="about" className="bg-paper-200/50 dark:bg-ink-900/50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4 reveal">
            <div className="relative max-w-xs mx-auto lg:mx-0">
              <div className="relative overflow-hidden border border-ink-900/15 dark:border-paper/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/images/about.webp"
                  alt="Raymart Salvador presenting on stage"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 label text-[0.65rem] text-paper bg-ink-950/75 px-3 py-2">
                  On stage · demo day
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8 reveal">
            <p className="label text-run dark:text-run-soft">About</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-paper">
              Builder first, engineer always.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-ink-700 dark:text-paper-200/80 leading-relaxed max-w-measure">
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
                Outside work I give back through startup panels and hands-on workshops — from
                Demo Day panels at the DOST-backed PUP Pylon TBI to embedded-systems seminars for
                the next batch of engineers at my alma mater.
              </p>
            </div>
            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 border-t border-ink-900/10 dark:border-paper/15 pt-8">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="label text-ink-700/55 dark:text-paper-200/45">{f.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-ink-900 dark:text-paper">
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

const socials = [
  {
    href: 'https://github.com/raymartsalvador',
    label: 'GitHub',
    path: 'M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 007.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.73 18.27.5 12 .5z',
  },
  {
    href: 'https://linkedin.com/in/raymartsalvador',
    label: 'LinkedIn',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z',
  },
];

const stats = [
  { value: '3+', label: 'years shipping' },
  { value: '2,500+', label: 'clearances processed' },
  { value: '2', label: 'SaaS products live' },
  { value: '.NET + JS', label: 'day & night stacks' },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <div className="lg:col-span-8">
            <p className="label text-run dark:text-run-soft mb-5 reveal">
              Full-stack developer · Philippines
            </p>
            <h1 className="font-heading font-semibold tracking-tight text-[2.35rem] sm:text-5xl lg:text-[3.35rem] leading-[1.08] text-ink-900 dark:text-paper reveal">
              I design, build, and ship real products — end to end.
            </h1>
            <p className="mt-7 max-w-measure text-lg sm:text-xl text-ink-700 dark:text-paper-200/85 leading-relaxed reveal">
              I&apos;m{' '}
              <span className="text-ink-900 dark:text-paper font-semibold">Raymart Salvador</span>.
              For 3+ years I&apos;ve turned messy processes into production systems — from an
              enterprise clearance tool across an{' '}
              <span className="text-ink-900 dark:text-paper font-semibold">
                8,000-employee manufacturer
              </span>{' '}
              to SaaS products I launched and still run myself.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3 reveal">
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-ink-900 dark:bg-paper px-5 py-3 font-medium text-paper dark:text-ink-900 hover:bg-run dark:hover:bg-run dark:hover:text-paper transition-colors duration-200 cursor-pointer"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-ink-900/20 dark:border-paper/25 px-5 py-3 font-medium text-ink-900 dark:text-paper hover:border-run dark:hover:border-run-soft hover:text-run dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-1 sm:pl-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid place-items-center h-11 w-11 text-ink-700/70 dark:text-paper-200/70 hover:text-run dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <dl className="lg:col-span-4 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-ink-900/10 dark:border-paper/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 reveal">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="label text-ink-700/60 dark:text-paper-200/50">{s.label}</dt>
                <dd className="mt-2 font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-ink-900 dark:text-paper">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="rule text-ink-900 dark:text-paper" />
      </div>
    </section>
  );
}

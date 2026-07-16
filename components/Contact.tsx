import CopyEmailButton from './CopyEmailButton';

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

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-ink-900 px-6 sm:px-12 py-16 text-center grid-bg">
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-run/15 blur-[110px]" />
        <div className="relative reveal">
          <p className="mono text-sm text-run">contact</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Let&apos;s build something.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Open to full-stack roles and select freelance work. The fastest way to reach me is
            email.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:raymartgsalvador@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-run px-5 py-3 font-medium text-ink-950 hover:bg-run-400 transition-colors duration-200 cursor-pointer"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 6l10 7 10-7" />
              </svg>
              raymartgsalvador@gmail.com
            </a>
            <CopyEmailButton />
            <a
              href="/assets/files/RaymartSalvador.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-white/15 px-5 py-3 font-medium text-ink-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-200 cursor-pointer"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
              </svg>
              Résumé
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5 text-slate-500 dark:text-slate-400">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="hover:text-ink-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
            <span className="inline-flex items-center gap-2 text-sm">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Biñan, Laguna, PH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="contact" className="bg-ink-900 text-paper dark:bg-paper dark:text-ink-900">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid lg:grid-cols-12 gap-10 reveal">
          <div className="lg:col-span-7">
            <p className="label text-run-soft dark:text-run">Contact</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-5xl font-semibold tracking-tight">
              Let&apos;s build something.
            </h2>
            <p className="mt-5 text-lg text-paper/80 dark:text-ink-700 leading-relaxed max-w-measure">
              Open to full-stack roles and select freelance work. The fastest way to reach me is
              email.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3 lg:pt-10">
            <a
              href="mailto:raymartgsalvador@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-paper text-ink-900 dark:bg-ink-900 dark:text-paper px-5 py-3 font-medium hover:bg-run-soft hover:text-ink-900 dark:hover:bg-run dark:hover:text-paper transition-colors duration-200 cursor-pointer"
            >
              raymartgsalvador@gmail.com
            </a>
            <CopyEmailButton />
            <a
              href="/assets/files/RaymartSalvador.pdf"
              className="inline-flex items-center justify-center gap-2 border border-paper/40 dark:border-ink-900/30 px-5 py-3 font-medium hover:border-run-soft hover:text-run-soft dark:hover:border-run dark:hover:text-run transition-colors duration-200 cursor-pointer"
            >
              Résumé
            </a>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-paper/65 dark:text-ink-700/70">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="hover:text-run-soft dark:hover:text-run transition-colors duration-200 cursor-pointer"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
              <span className="text-sm">Biñan, Laguna, PH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

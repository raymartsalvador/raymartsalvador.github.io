import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  // Empty state: render nothing until real client quotes exist in data/testimonials.ts.
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl reveal">
          <p className="mono text-sm text-run">kind words</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            What clients say
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-ink-900 p-6"
            >
              <svg
                className="h-6 w-6 text-run/60"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M9.6 5C6 7.1 3.8 10.3 3.8 14.1c0 3 1.8 4.9 4.1 4.9 2.1 0 3.7-1.6 3.7-3.7 0-2-1.4-3.4-3.3-3.4-.3 0-.8.1-.9.1.3-2 2.1-4.3 4-5.5L9.6 5zm9.5 0c-3.5 2.1-5.8 5.3-5.8 9.1 0 3 1.8 4.9 4.1 4.9 2 0 3.7-1.6 3.7-3.7 0-2-1.5-3.4-3.4-3.4-.3 0-.7.1-.8.1.3-2 2-4.3 3.9-5.5L19.1 5z" />
              </svg>
              <blockquote className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed grow">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-medium text-ink-900 dark:text-white">{t.name}</p>
                {t.url ? (
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono text-xs text-run hover:text-run-400 transition-colors duration-200 cursor-pointer"
                  >
                    {t.role}
                  </a>
                ) : (
                  <p className="mono text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

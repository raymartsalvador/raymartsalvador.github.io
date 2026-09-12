import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-paper-200/50 dark:bg-ink-900/50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-measure reveal">
          <p className="label text-run dark:text-run-soft">Kind words</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-paper">
            What clients say
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-900/10 dark:bg-paper/10 border border-ink-900/10 dark:border-paper/10">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="reveal flex flex-col bg-paper dark:bg-ink-950 p-6"
            >
              <blockquote className="text-sm text-ink-700 dark:text-paper-200/80 leading-relaxed grow font-heading text-lg">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ink-900/10 dark:border-paper/15 pt-4">
                <p className="font-medium text-ink-900 dark:text-paper">{t.name}</p>
                {t.url ? (
                  <a
                    href={t.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-run dark:text-run-soft hover:text-run-600 dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
                  >
                    {t.role}
                  </a>
                ) : (
                  <p className="text-xs text-ink-700/60 dark:text-paper-200/50">{t.role}</p>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

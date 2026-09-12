import { speakingEntries } from '@/data/speaking';

export default function Speaking() {
  return (
    <section id="speaking">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-measure reveal">
          <p className="label text-run dark:text-run-soft">Beyond the code</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-paper">
            Speaking &amp; community
          </h2>
          <p className="mt-4 text-lg text-ink-700 dark:text-paper-200/80 leading-relaxed">
            Sharing what I&apos;ve learned — on startup panels, pitch stages, and hands-on workshops
            for the next batch of engineers.
          </p>
        </div>

        <div className="mt-14 space-y-0 divide-y divide-ink-900/10 dark:divide-paper/15 border-y border-ink-900/10 dark:border-paper/15">
          {speakingEntries.map((entry) => (
            <article
              key={entry.slug}
              className="reveal group grid md:grid-cols-12 gap-6 md:gap-10 py-10"
            >
              <div className="md:col-span-4">
                <div className="relative aspect-[3/2] overflow-hidden border border-ink-900/10 dark:border-paper/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={entry.image}
                    alt={entry.alt}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="md:col-span-8 flex flex-col justify-center">
                <p className="label text-run dark:text-run-soft">{entry.role}</p>
                <h4 className="mt-2 font-heading text-xl sm:text-2xl font-semibold tracking-tight text-ink-900 dark:text-paper leading-snug">
                  {entry.event}
                </h4>
                <p className="mt-2 text-sm text-ink-700/70 dark:text-paper-200/60">
                  {entry.org} · {entry.date}
                </p>
                <p className="mt-4 text-ink-700 dark:text-paper-200/80 leading-relaxed max-w-measure">
                  {entry.description}
                </p>
                {entry.link && (
                  <a
                    href={entry.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-run dark:text-run-soft hover:text-run-600 dark:hover:text-run-soft transition-colors duration-200 cursor-pointer w-fit"
                  >
                    {entry.link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

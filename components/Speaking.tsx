import { speakingEntries } from '@/data/speaking';

export default function Speaking() {
  return (
    <section id="speaking" className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl reveal">
          <p className="mono text-sm text-run">beyond the code</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Speaking &amp; community
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Sharing what I&apos;ve learned — on startup panels, pitch stages, and hands-on workshops
            for the next batch of engineers.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakingEntries.map((entry) => (
            <article
              key={entry.slug}
              className="reveal group flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-ink-900 overflow-hidden hover:border-run/50 transition-colors duration-200"
            >
              <div className="relative aspect-[3/2] overflow-hidden border-b border-slate-200 dark:border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={entry.image}
                  alt={entry.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 mono text-[10px] text-white/95 bg-black/55 rounded px-2 py-0.5 backdrop-blur-sm">
                  {entry.role}
                </span>
              </div>
              <div className="p-6 flex flex-col grow">
                <h4 className="font-heading text-lg font-bold leading-snug">{entry.event}</h4>
                <p className="mt-1.5 mono text-xs text-run">
                  {entry.org} · {entry.date}
                </p>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed grow">
                  {entry.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { FeaturedProject } from '@/data/projects';

export default function FeaturedProjectRow({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const { reversed } = project;
  const spacing = index === 0 ? 'mt-14' : 'mt-16 sm:mt-20';

  return (
    <article
      className={`${spacing} grid lg:grid-cols-2 gap-8 lg:gap-12 items-center reveal`}
    >
      <div
        className={`frame border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-black/40 order-1 ${
          reversed ? 'lg:order-2' : ''
        }`}
      >
        <div className="frame-bar bg-slate-100 dark:bg-ink-800 border-b border-slate-200 dark:border-white/10">
          <span className="frame-dot bg-red-400" />
          <span className="frame-dot bg-amber-400" />
          <span className="frame-dot bg-green-400" />
          <span className="mono text-[11px] text-slate-400 dark:text-slate-500 ml-3 truncate">
            {project.domain}
          </span>
        </div>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            className="w-full aspect-[16/10] object-cover object-top"
          />
        </a>
      </div>
      <div className={`order-2 ${reversed ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-2 mono text-xs text-run">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-run/10 px-2.5 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-run" /> LIVE
          </span>
          <span className="text-slate-400 dark:text-slate-500">{project.category}</span>
        </div>
        <h3 className="mt-4 font-heading text-2xl sm:text-3xl font-bold">{project.name}</h3>
        <p
          className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <ul className="mt-6 flex flex-wrap gap-2 mono text-xs text-slate-500 dark:text-slate-400">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md border border-slate-200 dark:border-white/10 px-2.5 py-1">
              {tag}
            </li>
          ))}
        </ul>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 font-medium text-run hover:text-run-400 transition-colors duration-200 cursor-pointer"
        >
          Visit live site
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
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </a>
      </div>
    </article>
  );
}

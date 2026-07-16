import type { MiniProject } from '@/data/projects';

function CardMedia({ project }: { project: MiniProject }) {
  // Internal / on-prem system — intentional privacy treatment, no screenshot.
  if (project.internal) {
    return (
      <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-ink-800 dark:to-ink-900 grid place-items-center overflow-hidden border-b border-slate-200 dark:border-white/10">
        <div className="grid-bg absolute inset-0 opacity-60" />
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <svg
            className="h-10 w-10 text-slate-400 dark:text-slate-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <p className="mono text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
            On-premise &amp; internal —<br />
            not publicly viewable
          </p>
        </div>
      </div>
    );
  }

  const image = (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        className={`w-full h-full object-cover object-top ${
          project.url ? 'group-hover:scale-[1.03] transition-transform duration-300' : ''
        }`}
      />
      {project.badge && (
        <span className="absolute bottom-2.5 right-2.5 mono text-[10px] text-white/90 bg-black/55 rounded px-1.5 py-0.5">
          {project.badge}
        </span>
      )}
    </>
  );

  const mediaClasses =
    'relative aspect-[16/10] overflow-hidden border-b border-slate-200 dark:border-white/10';

  // Linked screenshot (client sites) vs static screenshot (internal gov display).
  return project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block ${mediaClasses} cursor-pointer`}
    >
      {image}
    </a>
  ) : (
    <div className={mediaClasses}>{image}</div>
  );
}

export default function ProjectCard({ project }: { project: MiniProject }) {
  return (
    <article className="reveal group flex flex-col rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-ink-900 overflow-hidden hover:border-run/50 transition-colors duration-200">
      <CardMedia project={project} />
      <div className="p-6 flex flex-col grow">
        <p className="mono text-xs text-run">{project.category}</p>
        <h4 className="mt-2 font-heading text-lg font-bold">{project.name}</h4>
        <p
          className="mt-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed grow"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <ul className="mt-5 flex flex-wrap gap-2 mono text-xs text-slate-500 dark:text-slate-400">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md border border-slate-200 dark:border-white/10 px-2 py-1">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

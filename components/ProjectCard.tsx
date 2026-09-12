import Link from 'next/link';
import type { MiniProject } from '@/data/projects';

function toPlainText(value: string) {
  return value.replace(/<[^>]*>/g, '').trim();
}

function CardMedia({ project }: { project: MiniProject }) {
  if (project.internal) {
    return (
      <div className="relative aspect-[16/10] bg-paper-200 dark:bg-ink-800 grid place-items-center overflow-hidden border-b border-ink-900/10 dark:border-paper/10">
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <svg
            className="h-8 w-8 text-ink-700/40 dark:text-paper-200/40"
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
          <p className="text-xs leading-relaxed text-ink-700/60 dark:text-paper-200/50">
            On-premise &amp; internal —
            <br />
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
          project.url ? 'group-hover:scale-[1.02] transition-transform duration-500' : ''
        }`}
      />
      {project.badge && (
        <span className="absolute bottom-2.5 right-2.5 text-[10px] tracking-wide text-paper bg-ink-950/70 px-1.5 py-0.5">
          {project.badge}
        </span>
      )}
    </>
  );

  const mediaClasses =
    'relative aspect-[16/10] overflow-hidden border-b border-ink-900/10 dark:border-paper/10';

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
    <article className="reveal group flex flex-col bg-paper dark:bg-ink-950 overflow-hidden">
      <CardMedia project={project} />
      <div className="p-6 flex flex-col grow">
        <p className="label text-run dark:text-run-soft">{project.category}</p>
        <h4 className="mt-2 font-heading text-lg font-semibold tracking-tight text-ink-900 dark:text-paper">
          {project.name}
        </h4>
        <p className="mt-3 text-sm text-ink-700 dark:text-paper-200/75 leading-relaxed grow">
          {toPlainText(project.description)}
        </p>
        {project.outcome && (
          <p className="mt-4 border-l-2 border-run-400 pl-3 text-sm font-medium text-ink-900 dark:text-paper">
            {project.outcome}
          </p>
        )}
        <ul className="mt-5 flex flex-wrap gap-1.5 text-xs text-ink-700/65 dark:text-paper-200/55">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-ink-900/10 dark:border-paper/12 px-2 py-0.5"
            >
              {tag}
            </li>
          ))}
        </ul>
        {project.caseStudySlug && (
          <Link
            href={`/work/${project.caseStudySlug}/`}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-run dark:text-run-soft hover:text-run-600 dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
          >
            Read the case study
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  );
}

import Link from 'next/link';
import type { FeaturedProject } from '@/data/projects';

function toPlainText(value: string) {
  return value.replace(/<[^>]*>/g, '').trim();
}

export default function FeaturedProjectRow({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const { reversed } = project;
  const spacing = index === 0 ? 'mt-16' : 'mt-20 sm:mt-28';

  return (
    <article className={`${spacing} grid lg:grid-cols-2 gap-8 lg:gap-14 items-center reveal`}>
      <div
        className={`frame border border-ink-900/15 dark:border-paper/15 order-1 ${
          reversed ? 'lg:order-2' : ''
        }`}
      >
        <div className="frame-bar bg-paper-200 dark:bg-ink-800 border-b border-ink-900/10 dark:border-paper/10">
          <span className="mono text-[11px] text-ink-700/60 dark:text-paper-200/50 truncate">
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
        <div className="flex flex-wrap items-center gap-3">
          <span className="label text-run dark:text-run-soft">Live</span>
          <span className="text-sm text-ink-700/70 dark:text-paper-200/60">{project.category}</span>
        </div>
        <h3 className="mt-3 font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-ink-900 dark:text-paper">
          {project.name}
        </h3>
        <p className="mt-4 text-ink-700 dark:text-paper-200/80 leading-relaxed">
          {toPlainText(project.description)}
        </p>
        {project.outcome && (
          <p className="mt-5 border-l-2 border-run-400 pl-4 font-medium text-ink-900 dark:text-paper">
            {project.outcome}
          </p>
        )}
        <ul className="mt-6 flex flex-wrap gap-2 text-xs text-ink-700/70 dark:text-paper-200/60">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-ink-900/12 dark:border-paper/15 px-2.5 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-run dark:text-run-soft hover:text-run-600 dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
          >
            Visit live site
            <span aria-hidden="true">↗</span>
          </a>
          {project.caseStudySlug && (
            <Link
              href={`/work/${project.caseStudySlug}/`}
              className="inline-flex items-center gap-2 font-medium text-ink-900 dark:text-paper hover:text-run dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
            >
              Read the case study
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

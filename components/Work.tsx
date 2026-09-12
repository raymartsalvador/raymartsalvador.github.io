import { featuredProjects, miniProjects } from '@/data/projects';
import FeaturedProjectRow from './FeaturedProjectRow';
import ProjectCard from './ProjectCard';

export default function Work() {
  return (
    <section id="work">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-measure reveal">
          <p className="label text-run dark:text-run-soft">Selected work</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-paper">
            Products I&apos;ve shipped
          </h2>
          <p className="mt-4 text-lg text-ink-700 dark:text-paper-200/80 leading-relaxed">
            Live SaaS I built and run, plus enterprise and government systems delivered
            end-to-end.
          </p>
        </div>

        {featuredProjects.map((project, i) => (
          <FeaturedProjectRow key={project.slug} project={project} index={i} />
        ))}

        <h3 className="mt-24 mb-8 font-heading text-2xl font-semibold tracking-tight text-ink-900 dark:text-paper reveal">
          More projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-900/10 dark:bg-paper/10 border border-ink-900/10 dark:border-paper/10">
          {miniProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

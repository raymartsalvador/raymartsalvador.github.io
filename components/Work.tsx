import { featuredProjects, miniProjects } from '@/data/projects';
import FeaturedProjectRow from './FeaturedProjectRow';
import ProjectCard from './ProjectCard';

export default function Work() {
  return (
    <section id="work" className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="flex items-end justify-between gap-6 reveal">
          <div className="max-w-2xl">
            <p className="mono text-sm text-run">selected work</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Products I&apos;ve shipped
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Live SaaS I built and run, plus enterprise and government systems delivered
              end-to-end.
            </p>
          </div>
        </div>

        {featuredProjects.map((project, i) => (
          <FeaturedProjectRow key={project.slug} project={project} index={i} />
        ))}

        <h3 className="mt-20 sm:mt-24 mb-8 font-heading text-xl font-bold reveal">More projects</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {miniProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

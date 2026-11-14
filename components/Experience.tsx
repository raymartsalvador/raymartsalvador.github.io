export default function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4 reveal">
            <p className="label text-run dark:text-run-soft">Experience</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-paper">
              Where I&apos;ve worked
            </h2>
            <p className="mt-4 text-ink-700 dark:text-paper-200/80 leading-relaxed">
              Full-time since 2024, freelance and independent builds since 2023.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-12">
            <article className="reveal border-t border-ink-900/10 dark:border-paper/15 pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-xl font-semibold text-ink-900 dark:text-paper">
                  Full-Stack Software Engineer
                </h3>
                <p className="mono text-xs text-ink-700/60 dark:text-paper-200/50">
                  Apr 2024 — Present
                </p>
              </div>
              <p className="mt-1 font-medium text-run dark:text-run-soft">Toshiba Information Equipment Inc.</p>
              <ul className="mt-5 space-y-3 text-ink-700 dark:text-paper-200/80 leading-relaxed text-[15px]">
                <li>
                  Sole developer of an on-premise E-Resignation &amp; Clearance System deployed
                  across an{' '}
                  <strong className="font-semibold text-ink-900 dark:text-paper">
                    8,000-employee site
                  </strong>
                  , processing{' '}
                  <strong className="font-semibold text-ink-900 dark:text-paper">
                    2,500+ resignations
                  </strong>{' '}
                  in 2 years and cutting turnaround from weeks to days.
                </li>
                <li>
                  Introduced{' '}
                  <strong className="font-semibold text-ink-900 dark:text-paper">
                    ASP.NET Core 8 MVC
                  </strong>{' '}
                  + on-premise GitLab; my starter template is now the standard for{' '}
                  <strong className="font-semibold text-ink-900 dark:text-paper">
                    5+ developers
                  </strong>
                  .
                </li>
                <li>
                  Built a Project Management System and an Employee Information System for the
                  same site.
                </li>
              </ul>
            </article>

            <article className="reveal border-t border-ink-900/10 dark:border-paper/15 pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-xl font-semibold text-ink-900 dark:text-paper">
                  Independent Full-Stack Engineer
                </h3>
                <p className="mono text-xs text-ink-700/60 dark:text-paper-200/50">
                  2023 — Present
                </p>
              </div>
              <p className="mt-1 font-medium text-run dark:text-run-soft">Freelance &amp; product work</p>
              <ul className="mt-5 space-y-3 text-ink-700 dark:text-paper-200/80 leading-relaxed text-[15px]">
                <li>
                  Delivered{' '}
                  <strong className="font-semibold text-ink-900 dark:text-paper">
                    6 production sites
                  </strong>{' '}
                  end-to-end for businesses and government — including a queueing system
                  serving 100–500 citizens daily at the City of Biñan.
                </li>
                <li>
                  Launched and operate{' '}
                  <strong className="font-semibold text-ink-900 dark:text-paper">
                    2 live SaaS products
                  </strong>{' '}
                  — Certify+ and Peyg — handling design, build, deploy, and support solo.
                </li>
              </ul>
            </article>

            <article className="reveal border-t border-ink-900/10 dark:border-paper/15 pt-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-heading text-xl font-semibold text-ink-900 dark:text-paper">
                  BS Computer Engineering
                </h3>
                <p className="mono text-xs text-ink-700/60 dark:text-paper-200/50">
                  2019 — 2023
                </p>
              </div>
              <p className="mt-1 text-ink-700/80 dark:text-paper-200/70">
                Polytechnic University of the Philippines
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

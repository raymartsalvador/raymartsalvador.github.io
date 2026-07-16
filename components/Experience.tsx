export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-ink-900/40"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 reveal">
            <p className="mono text-sm text-run">experience</p>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Where I&apos;ve worked
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Full-time since 2024, freelance and independent builds since 2023.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="relative border-l border-slate-200 dark:border-white/10 pl-8 reveal">
              <div className="relative">
                <span className="absolute -left-[41px] top-1 grid place-items-center h-6 w-6 rounded-full bg-run/15 ring-4 ring-slate-50 dark:ring-ink-950">
                  <span className="h-2.5 w-2.5 rounded-full bg-run" />
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-xl font-bold">Full-Stack Developer</h3>
                  <span className="text-run font-medium">
                    Toshiba Information Equipment Inc.
                  </span>
                </div>
                <p className="mono text-sm text-slate-500 dark:text-slate-400 mt-1">
                  April 2024 — Present
                </p>
                <ul className="mt-4 space-y-2.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                  <li className="flex gap-2.5">
                    <span className="text-run mt-1.5 h-1.5 w-1.5 rounded-full bg-run shrink-0" />
                    <span>
                      Sole developer of an on-premise E-Resignation &amp; Clearance System deployed
                      across an{' '}
                      <strong className="font-medium text-ink-900 dark:text-white">
                        8,000-employee site
                      </strong>
                      , processing{' '}
                      <strong className="font-medium text-ink-900 dark:text-white">
                        2,500+ resignations
                      </strong>{' '}
                      in 2 years and cutting turnaround from weeks to days.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-run mt-1.5 h-1.5 w-1.5 rounded-full bg-run shrink-0" />
                    <span>
                      Introduced{' '}
                      <strong className="font-medium text-ink-900 dark:text-white">
                        ASP.NET Core 8 MVC
                      </strong>{' '}
                      + on-premise GitLab; my starter template is now the standard for{' '}
                      <strong className="font-medium text-ink-900 dark:text-white">
                        5+ developers
                      </strong>
                      .
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-run mt-1.5 h-1.5 w-1.5 rounded-full bg-run shrink-0" />
                    <span>
                      Built a Project Management System and an Employee Information System for the
                      same site.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative mt-10">
                <span className="absolute -left-[41px] top-1 grid place-items-center h-6 w-6 rounded-full bg-run/15 ring-4 ring-slate-50 dark:ring-ink-950">
                  <span className="h-2.5 w-2.5 rounded-full bg-run" />
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-xl font-bold">Independent Full-Stack Developer</h3>
                  <span className="text-run font-medium">Freelance &amp; product work</span>
                </div>
                <p className="mono text-sm text-slate-500 dark:text-slate-400 mt-1">
                  2023 — Present
                </p>
                <ul className="mt-4 space-y-2.5 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                  <li className="flex gap-2.5">
                    <span className="text-run mt-1.5 h-1.5 w-1.5 rounded-full bg-run shrink-0" />
                    <span>
                      Delivered{' '}
                      <strong className="font-medium text-ink-900 dark:text-white">
                        6 production sites
                      </strong>{' '}
                      end-to-end for businesses and government — including a queueing system
                      serving 100–500 citizens daily at the City of Biñan.
                    </span>
                  </li>
                  <li className="flex gap-2.5">
                    <span className="text-run mt-1.5 h-1.5 w-1.5 rounded-full bg-run shrink-0" />
                    <span>
                      Launched and operate{' '}
                      <strong className="font-medium text-ink-900 dark:text-white">
                        2 live SaaS products
                      </strong>{' '}
                      — Certify+ and Peyg — handling design, build, deploy, and support solo.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative mt-10">
                <span className="absolute -left-[41px] top-1 grid place-items-center h-6 w-6 rounded-full bg-slate-200 dark:bg-white/10 ring-4 ring-slate-50 dark:ring-ink-950">
                  <svg
                    className="h-3 w-3 text-slate-500 dark:text-slate-300"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 3L1 9l11 6 9-4.9V17h2V9L12 3zM5 13.2V17c0 1.7 3.1 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8z" />
                  </svg>
                </span>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-heading text-xl font-bold">BS Computer Engineering</h3>
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    Polytechnic University of the Philippines
                  </span>
                </div>
                <p className="mono text-sm text-slate-500 dark:text-slate-400 mt-1">2019 — 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

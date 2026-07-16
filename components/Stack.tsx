const groups = [
  {
    title: 'Languages',
    items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'Python', 'Java'],
  },
  {
    title: 'Frameworks',
    items: ['ASP.NET Core', 'Next.js', 'React', 'Angular', 'Express.js'],
  },
  {
    title: 'Cloud & Data',
    items: ['Azure', 'Supabase', 'PostgreSQL', 'SQL Server', 'Docker'],
  },
  {
    title: 'DevOps & Tools',
    items: ['CI/CD', 'Git', 'GitLab', 'IIS', 'Postman'],
  },
];

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="max-w-2xl reveal">
        <p className="mono text-sm text-run">stack</p>
        <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
          What I build with
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          A .NET backbone for enterprise work, a JS/TS toolkit for products — and whatever the
          problem actually needs.
        </p>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 gap-5 reveal">
        {groups.map((g) => (
          <div
            key={g.title}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-ink-900 p-6"
          >
            <h3 className="mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {g.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="mono text-sm rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-3 py-1.5 text-slate-700 dark:text-slate-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

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
    <section id="stack" className="bg-paper-200/50 dark:bg-ink-900/50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-measure reveal">
          <p className="label text-run dark:text-run-soft">Stack</p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-ink-900 dark:text-paper">
            What I build with
          </h2>
          <p className="mt-4 text-ink-700 dark:text-paper-200/80 leading-relaxed">
            A .NET backbone for enterprise work, a JS/TS toolkit for products — and whatever the
            problem actually needs.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 gap-x-10 gap-y-10 reveal">
          {groups.map((g) => (
            <div key={g.title} className="border-t border-ink-900/10 dark:border-paper/15 pt-5">
              <h3 className="label text-ink-700/55 dark:text-paper-200/45">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm border border-ink-900/12 dark:border-paper/15 px-3 py-1.5 text-ink-900 dark:text-paper-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

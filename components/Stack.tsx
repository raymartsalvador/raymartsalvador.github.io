const groups = [
  { title: 'Languages', items: 'C#, TypeScript, JavaScript, SQL, Python, Java' },
  { title: 'Frameworks', items: 'ASP.NET Core, Angular, Next.js, React, Express.js' },
  { title: 'Cloud & Data', items: 'Azure, Supabase, PostgreSQL, SQL Server, Docker' },
  { title: 'DevOps & Tools', items: 'CI/CD, Git, GitLab, IIS, Postman' },
];

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
      <div className="max-w-2xl reveal">
        <p className="mono text-sm text-run">stack</p>
        <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight">
          What I build with
        </h2>
      </div>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8 reveal">
        {groups.map((g) => (
          <div key={g.title}>
            <h3 className="mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {g.title}
            </h3>
            <p className="mt-3 text-slate-700 dark:text-slate-200 leading-relaxed">{g.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

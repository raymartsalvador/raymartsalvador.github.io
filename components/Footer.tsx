export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <p className="mono">© {year} Raymart Salvador</p>
        <p>Built with Next.js &amp; Tailwind. Deployed on GitHub Pages.</p>
      </div>
    </footer>
  );
}

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink-900/10 dark:border-paper/10 bg-paper dark:bg-ink-950">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-ink-700/70 dark:text-paper-200/55">
        <p>© {year} Raymart Salvador</p>
        <div className="flex items-center gap-5">
          <a
            href="/assets/files/RaymartSalvador.pdf"
            className="hover:text-run dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
          >
            Résumé
          </a>
          <Link
            href="/#top"
            className="hover:text-run dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
          >
            Back to top
          </Link>
        </div>
        <p className="text-ink-700/50 dark:text-paper-200/40">
          Next.js · Tailwind · GitHub Pages
        </p>
      </div>
    </footer>
  );
}

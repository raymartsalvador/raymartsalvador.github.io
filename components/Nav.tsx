import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#stack', label: 'Stack' },
  { href: '#speaking', label: 'Speaking' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4">
      <nav className="relative mx-auto mt-4 max-w-6xl flex items-center justify-between rounded-2xl border border-slate-200/70 dark:border-white/10 bg-white/80 dark:bg-ink-900/70 backdrop-blur-md px-4 sm:px-6 py-3 shadow-sm">
        <a
          href="#top"
          className="flex items-center gap-2 font-heading font-bold tracking-tight text-lg cursor-pointer"
        >
          <span className="mono text-run">&gt;</span> raymart
          <span className="text-slate-400 dark:text-slate-500">.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm text-slate-600 dark:text-slate-300">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-ink-900 dark:hover:text-white transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/assets/files/RaymartSalvador.pdf"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-run px-3.5 py-2 text-sm font-medium text-ink-950 hover:bg-run-400 transition-colors duration-200 cursor-pointer"
          >
            Résumé
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
          </a>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}

import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import MobileMenu from './MobileMenu';

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#stack', label: 'Stack' },
  { href: '/#speaking', label: 'Speaking' },
  { href: '/#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-ink-900/10 dark:border-paper/10 bg-paper/90 dark:bg-ink-950/90 backdrop-blur-sm">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3.5">
        <Link
          href="/#top"
          className="font-heading text-[1.05rem] font-semibold tracking-tight text-ink-900 dark:text-paper cursor-pointer"
        >
          Raymart Salvador
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[0.9375rem] text-ink-700 dark:text-paper-200/80">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-run dark:hover:text-run-soft transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/assets/files/RaymartSalvador.pdf"
            className="hidden sm:inline-flex items-center gap-2 border border-ink-900/15 dark:border-paper/20 bg-ink-900 dark:bg-paper px-3.5 py-2 text-sm font-medium text-paper dark:text-ink-900 hover:bg-run hover:border-run dark:hover:bg-run dark:hover:text-paper dark:hover:border-run-soft transition-colors duration-200 cursor-pointer"
          >
            Résumé
          </a>
          <MobileMenu links={links} />
        </div>
      </nav>
    </header>
  );
}

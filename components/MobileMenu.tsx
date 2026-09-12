'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

export default function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    const focusables = panel?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    focusables?.[0]?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !focusables?.length) return;
      const list = Array.from(focusables);
      const first = list[0];
      const last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    function onPointerDown(e: MouseEvent | TouchEvent) {
      const target = e.target as Node;
      if (panelRef.current?.contains(target) || buttonRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      previouslyFocused?.focus?.();
    };
  }, [open]);

  return (
    <div className="md:hidden relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="grid place-items-center h-9 w-9 border border-ink-900/15 dark:border-paper/20 text-ink-700 dark:text-paper-200 hover:text-run dark:hover:text-run-soft hover:border-run dark:hover:border-run-soft transition-colors duration-200 cursor-pointer"
      >
        {open ? (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {open && (
        <div
          ref={panelRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className="absolute top-full right-0 mt-2 w-56 border border-ink-900/15 dark:border-paper/15 bg-paper dark:bg-ink-950 shadow-lg p-2"
        >
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-ink-900 dark:text-paper hover:bg-paper-200 dark:hover:bg-ink-800 hover:text-run dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/assets/files/RaymartSalvador.pdf"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-center gap-2 bg-ink-900 dark:bg-paper px-4 py-3 font-medium text-paper dark:text-ink-900 hover:bg-run dark:hover:bg-run dark:hover:text-paper transition-colors duration-200 cursor-pointer"
          >
            Résumé
          </a>
        </div>
      )}
    </div>
  );
}

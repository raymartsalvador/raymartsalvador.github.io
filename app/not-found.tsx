import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found — Raymart Salvador',
};

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-6 bg-paper dark:bg-ink-950">
      <div className="text-center max-w-lg">
        <p className="label text-run dark:text-run-soft">404</p>
        <h1 className="mt-4 font-heading text-4xl sm:text-5xl font-semibold tracking-tight text-ink-900 dark:text-paper">
          Page not found.
        </h1>
        <p className="mx-auto mt-5 text-lg text-ink-700 dark:text-paper-200/80">
          This route doesn&apos;t exist — but the work does.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-ink-900 dark:bg-paper px-5 py-3 font-medium text-paper dark:text-ink-900 hover:bg-run dark:hover:bg-run dark:hover:text-paper transition-colors duration-200 cursor-pointer"
        >
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}

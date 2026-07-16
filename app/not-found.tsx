import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found — Raymart Salvador',
};

export default function NotFound() {
  return (
    <main className="relative grid-bg min-h-screen grid place-items-center px-6">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[380px] w-[760px] rounded-full bg-run/20 blur-[120px]" />
      <div className="relative text-center">
        <p className="mono text-sm text-run">{'// 404'}</p>
        <h1 className="mt-4 font-heading text-4xl sm:text-6xl font-extrabold tracking-tight">
          Page not found.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-slate-600 dark:text-slate-300">
          This route doesn&apos;t exist — but the work does.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-run px-5 py-3 font-medium text-ink-950 hover:bg-run-400 transition-colors duration-200 cursor-pointer"
        >
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}

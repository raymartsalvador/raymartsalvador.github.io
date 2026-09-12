'use client';

import { useState } from 'react';

const EMAIL = 'raymartgsalvador@gmail.com';

export default function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  function copy() {
    const done = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(EMAIL).then(done).catch(() => {
        window.location.href = `mailto:${EMAIL}`;
      });
    } else {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center justify-center gap-2 border border-paper/40 dark:border-ink-900/30 px-5 py-3 font-medium hover:border-run-soft hover:text-run-soft dark:hover:border-run dark:hover:text-run transition-colors duration-200 cursor-pointer ${
        copied ? 'text-run-soft border-run-soft dark:text-run dark:border-run' : ''
      }`}
    >
      <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
    </button>
  );
}

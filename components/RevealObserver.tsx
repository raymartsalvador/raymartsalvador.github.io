'use client';

import { useEffect } from 'react';

const ROOT_MARGIN_BOTTOM = 0.08; // matches rootMargin '0px 0px -8% 0px'
const THRESHOLD = 0.08;

function isIntersectingNow(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const rootTop = 0;
  const rootBottom = window.innerHeight * (1 - ROOT_MARGIN_BOTTOM);
  const overlapTop = Math.max(rect.top, rootTop);
  const overlapBottom = Math.min(rect.bottom, rootBottom);
  const overlap = Math.max(0, overlapBottom - overlapTop);
  if (overlap <= 0 || rect.height <= 0) return false;
  const ratio = overlap / Math.min(rect.height, rootBottom - rootTop);
  return ratio >= THRESHOLD;
}

export default function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!nodes.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((el) => el.classList.add('in'));
      root.classList.add('js-reveal');
      return () => root.classList.remove('js-reveal');
    }

    // Pre-mark above-the-fold nodes BEFORE enabling hide-until-in CSS.
    nodes.forEach((el) => {
      if (isIntersectingNow(el)) el.classList.add('in');
    });
    root.classList.add('js-reveal');

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: THRESHOLD },
    );

    nodes.forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el);
    });

    return () => {
      io.disconnect();
      root.classList.remove('js-reveal');
    };
  }, []);

  return null;
}

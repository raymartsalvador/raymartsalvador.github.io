import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import RevealObserver from '@/components/RevealObserver';
import { caseStudies, getCaseStudy } from '@/data/case-studies';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: `${study.name} — Case Study — Raymart Salvador`,
    description: study.metaDescription,
    openGraph: {
      type: 'article',
      title: `${study.name} — Case Study`,
      description: study.oneLiner,
      images: [{ url: study.heroImage }],
    },
  };
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <>
      <p className="mono text-sm text-run">{eyebrow}</p>
      <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-bold tracking-tight">{title}</h2>
    </>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="text-run mt-2 h-1.5 w-1.5 rounded-full bg-run shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = caseStudies.filter((c) => c.slug !== study.slug);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-run focus:text-ink-950 focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        {/* Header */}
        <section className="relative grid-bg overflow-hidden">
          <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[380px] w-[760px] rounded-full bg-run/20 blur-[120px]" />
          <div className="relative mx-auto max-w-4xl px-6 pt-36 pb-12 sm:pt-40">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 mono text-sm text-slate-500 dark:text-slate-400 hover:text-ink-900 dark:hover:text-white transition-colors duration-200 cursor-pointer"
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
              All work
            </Link>
            <p className="mt-6 mono text-sm text-run">{study.category}</p>
            <h1 className="mt-3 font-heading font-extrabold tracking-tight text-4xl sm:text-5xl leading-[1.05]">
              {study.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {study.oneLiner}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {study.url && (
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-run px-5 py-2.5 font-medium text-ink-950 hover:bg-run-400 transition-colors duration-200 cursor-pointer"
                >
                  Visit live site
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
                    <path d="M7 17L17 7M8 7h9v9" />
                  </svg>
                </a>
              )}
              <ul className="flex flex-wrap gap-2 mono text-xs text-slate-500 dark:text-slate-400">
                {study.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-slate-200 dark:border-white/10 px-2.5 py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Hero screenshot */}
        <div className="mx-auto max-w-4xl px-6">
          <div className="frame border border-slate-200 dark:border-white/10 shadow-xl shadow-slate-900/5 dark:shadow-black/40 reveal">
            <div className="frame-bar bg-slate-100 dark:bg-ink-800 border-b border-slate-200 dark:border-white/10">
              <span className="frame-dot bg-red-400" />
              <span className="frame-dot bg-amber-400" />
              <span className="frame-dot bg-green-400" />
              {study.domain && (
                <span className="mono text-[11px] text-slate-400 dark:text-slate-500 ml-3 truncate">
                  {study.domain}
                </span>
              )}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={study.heroImage} alt={study.heroAlt} className="w-full object-cover" />
          </div>
        </div>

        {/* Narrative */}
        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 space-y-16">
          <section className="reveal">
            <SectionHeading eyebrow="01" title="The problem" />
            <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              {study.problem.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </section>

          <section className="reveal">
            <SectionHeading eyebrow="02" title="What I built" />
            <Bullets items={study.built} />
          </section>

          {study.gallery[0] && (
            <figure className="reveal">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg shadow-slate-900/5 dark:shadow-black/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.gallery[0].src}
                  alt={study.gallery[0].alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 mono text-xs text-slate-500 dark:text-slate-400 text-center">
                {study.gallery[0].caption}
              </figcaption>
            </figure>
          )}

          <section className="reveal">
            <SectionHeading eyebrow="03" title="Under the hood" />
            <Bullets items={study.architecture} />
          </section>

          {study.gallery[1] && (
            <figure className="reveal">
              <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg shadow-slate-900/5 dark:shadow-black/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.gallery[1].src}
                  alt={study.gallery[1].alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 mono text-xs text-slate-500 dark:text-slate-400 text-center">
                {study.gallery[1].caption}
              </figcaption>
            </figure>
          )}

          <section className="reveal">
            <SectionHeading eyebrow="04" title="Outcomes" />
            <ul className="mt-5 space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed">
              {study.outcomes.map((o) => (
                <li key={o} className="flex gap-2.5">
                  <svg
                    className="h-5 w-5 mt-0.5 text-run shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 11.1V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14l-3-3" />
                  </svg>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Next case studies + CTA */}
          <section className="reveal border-t border-slate-200 dark:border-white/10 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="mono text-sm text-run">more case studies</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {others.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/work/${c.slug}/`}
                      className="inline-flex items-center gap-2 rounded-lg border border-slate-300 dark:border-white/15 px-4 py-2.5 font-medium text-ink-900 dark:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors duration-200 cursor-pointer"
                    >
                      {c.name}
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
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-run px-5 py-3 font-medium text-ink-950 hover:bg-run-400 transition-colors duration-200 cursor-pointer self-start sm:self-auto"
              >
                Build something with me
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <RevealObserver />
    </>
  );
}

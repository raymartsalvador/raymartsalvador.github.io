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
      <p className="label text-run dark:text-run-soft">{eyebrow}</p>
      <h2 className="mt-2 font-heading text-2xl sm:text-3xl font-semibold tracking-tight text-ink-900 dark:text-paper">
        {title}
      </h2>
    </>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 text-ink-700 dark:text-paper-200/80 leading-relaxed">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-2.5 h-1 w-1 rounded-full bg-run shrink-0" />
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
        className="absolute left-4 top-4 z-50 -translate-y-16 rounded bg-run px-4 py-2 font-medium text-paper focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-run"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <section>
          <div className="mx-auto max-w-4xl px-6 pt-32 pb-12 sm:pt-40">
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-ink-700/70 dark:text-paper-200/60 hover:text-run dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
            >
              ← All work
            </Link>
            <p className="mt-8 label text-run dark:text-run-soft">{study.category}</p>
            <h1 className="mt-3 font-heading font-semibold tracking-tight text-4xl sm:text-5xl leading-[1.08] text-ink-900 dark:text-paper">
              {study.name}
            </h1>
            <p className="mt-5 max-w-measure text-lg text-ink-700 dark:text-paper-200/80 leading-relaxed">
              {study.oneLiner}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              {study.url && (
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-ink-900 dark:bg-paper px-5 py-2.5 font-medium text-paper dark:text-ink-900 hover:bg-run dark:hover:bg-run dark:hover:text-paper transition-colors duration-200 cursor-pointer"
                >
                  Visit live site ↗
                </a>
              )}
              <ul className="flex flex-wrap gap-2 text-xs text-ink-700/65 dark:text-paper-200/55">
                {study.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-ink-900/12 dark:border-paper/15 px-2.5 py-1"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-6">
          <div className="frame border border-ink-900/15 dark:border-paper/15 reveal">
            <div className="frame-bar bg-paper-200 dark:bg-ink-800 border-b border-ink-900/10 dark:border-paper/10">
              {study.domain && (
                <span className="mono text-[11px] text-ink-700/60 dark:text-paper-200/50 truncate">
                  {study.domain}
                </span>
              )}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={study.heroImage} alt={study.heroAlt} className="w-full object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20 space-y-16">
          <section className="reveal">
            <SectionHeading eyebrow="01" title="The problem" />
            <div className="mt-5 space-y-4 text-ink-700 dark:text-paper-200/80 leading-relaxed">
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
              <div className="overflow-hidden border border-ink-900/15 dark:border-paper/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.gallery[0].src}
                  alt={study.gallery[0].alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-ink-700/60 dark:text-paper-200/50 text-center">
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
              <div className="overflow-hidden border border-ink-900/15 dark:border-paper/15">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={study.gallery[1].src}
                  alt={study.gallery[1].alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-ink-700/60 dark:text-paper-200/50 text-center">
                {study.gallery[1].caption}
              </figcaption>
            </figure>
          )}

          <section className="reveal">
            <SectionHeading eyebrow="04" title="Outcomes" />
            <ul className="mt-5 space-y-3 text-ink-700 dark:text-paper-200/80 leading-relaxed">
              {study.outcomes.map((o) => (
                <li key={o} className="border-l-2 border-run pl-4">
                  {o}
                </li>
              ))}
            </ul>
          </section>

          <section className="reveal border-t border-ink-900/10 dark:border-paper/15 pt-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <p className="label text-run dark:text-run-soft">More case studies</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {others.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/work/${c.slug}/`}
                      className="inline-flex items-center gap-2 border border-ink-900/15 dark:border-paper/20 px-4 py-2.5 font-medium text-ink-900 dark:text-paper hover:border-run dark:hover:border-run-soft hover:text-run dark:hover:text-run-soft transition-colors duration-200 cursor-pointer"
                    >
                      {c.name} →
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-ink-900 dark:bg-paper px-5 py-3 font-medium text-paper dark:text-ink-900 hover:bg-run dark:hover:bg-run dark:hover:text-paper transition-colors duration-200 cursor-pointer self-start sm:self-auto"
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

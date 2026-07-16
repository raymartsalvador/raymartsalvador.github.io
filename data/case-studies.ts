/**
 * Case-study content for /work/[slug]/ pages.
 * Every claim here must be real and verifiable — no invented metrics.
 */

export interface CaseStudyImage {
  src: string;
  alt: string;
  caption: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  category: string;
  oneLiner: string;
  /** live site — omit for internal systems */
  url?: string;
  /** display domain for the browser-frame bar */
  domain?: string;
  heroImage: string;
  heroAlt: string;
  tags: string[];
  /** narrative paragraphs */
  problem: string[];
  /** what I built — bullets */
  built: string[];
  /** key technical decisions — bullets */
  architecture: string[];
  /** real results — bullets */
  outcomes: string[];
  gallery: CaseStudyImage[];
  metaDescription: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'certify',
    name: 'Certify+',
    category: 'SaaS · Certificate Platform',
    oneLiner:
      'A certificate platform for Philippine schools and training centers — design once, bulk-generate in seconds, verify with a QR scan.',
    url: 'https://certify.cybernestsolution.com',
    domain: 'certify.cybernestsolution.com',
    heroImage: '/assets/images/projects/certify.webp',
    heroAlt: 'Certify+ landing page — certificate generation platform',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'QR Verification'],
    problem: [
      'Most organizations in the Philippines still produce certificates by hand: names typed one at a time into design tools, mail-merge workarounds, recipients tracked across separate spreadsheets and email threads. There is no way to tell whether a certificate someone presents is authentic or tampered with.',
      'International platforms exist, but they charge in USD — typically $50+ a month — which prices out the local schools and training centers that need this most.',
    ],
    built: [
      'A visual drag-and-drop template builder — logos, signatures, and dynamic recipient fields placed directly on the design, no document formatting fights.',
      'CSV-driven bulk generation: upload a recipient list and produce hundreds of personalized certificates in seconds.',
      'Automated bulk email delivery — generate first, review the batch, then send each certificate to its recipient with no manual attachments.',
      'A public QR-code verification flow: every certificate carries a unique QR code and verification URL anyone can check instantly, with instant revocation if one was issued in error.',
      'Brand asset management and a partner-facing Business API for wiring certificate issuance into HR, LMS, or registrar workflows.',
    ],
    architecture: [
      'Next.js frontend with Supabase and PostgreSQL behind it — one person can build, operate, and support the whole stack.',
      'Hosted in-region for data-privacy compliance, a hard requirement for schools handling student records.',
      'Each certificate is issued with a unique verification identity, so authenticity checks work without an account.',
      'Freemium pricing built for the local market: a free-forever plan, with a company plan at ₱1,499/month instead of USD pricing.',
    ],
    outcomes: [
      'Live in production and operated solo — design, build, deploy, and support.',
      'Real organizations have generated hundreds of certificates through the platform.',
      'Verification changed from "trust the paper" to a QR scan — every certificate issued is independently checkable.',
    ],
    gallery: [
      {
        src: '/assets/images/case-studies/certify-features.webp',
        alt: 'Certify+ feature suite — template builder, CSV bulk generation, QR verification',
        caption: 'The core suite: visual builder, CSV bulk generation, QR verification, bulk email.',
      },
      {
        src: '/assets/images/case-studies/certify-how.webp',
        alt: 'Certify+ three-step flow — create a template, add recipients, generate and share',
        caption: 'Three steps from template to delivered, verifiable certificates.',
      },
    ],
    metaDescription:
      'Case study: Certify+ — a certificate generation and QR-verification SaaS for Philippine schools and training centers, built and operated end-to-end by Raymart Salvador.',
  },
  {
    slug: 'peyg',
    name: 'Peyg',
    category: 'SaaS · Site Builder & Lead Capture',
    oneLiner:
      'Mini-sites and structured lead capture for Filipino sellers and freelancers — from an FB post to a branded, verified site in about 5 minutes.',
    url: 'https://peyg.app',
    domain: 'peyg.app',
    heroImage: '/assets/images/projects/peyg.webp',
    heroAlt: 'Peyg landing page — mini-site builder for local brands',
    tags: ['Next.js', 'Supabase', 'Multi-tenant', 'Subdomains'],
    problem: [
      'A huge share of Philippine small business runs entirely inside Facebook and Instagram DMs. Sellers have no real web presence, buyers have no way to tell who is legitimate, and every sale starts with the same scattered "Hi po, available pa?" thread.',
      'A proper website — domain, developer, maintenance — costs more than most micro-enterprises can justify. So they stay in the chat threads and lose leads there.',
    ],
    built: [
      'Instant onboarding: a seller\'s social-media presence becomes a branded mini-site on their own subdomain (your-name.peyg.app) in about 5 minutes — no domain purchase, no setup.',
      'A hand-reviewed business-verification workflow — DTI, BIR, SEC, or official-receipt documents are manually checked so buyers see a real "verified" badge, not a self-declared one.',
      'Structured inquiry capture: instead of a generic DM, the seller receives a real lead — name, contact, message, and the exact product or service the buyer was looking at — organized in a lead inbox.',
      'Industry-tuned verticals on one engine: online sellers and professional services/freelancers first, hotels & staycations and bookings & appointments after, with real estate and startups next.',
    ],
    architecture: [
      'Multi-tenant Next.js + Supabase with per-tenant subdomain provisioning — one codebase serving every seller site.',
      'One shared engine with per-industry presets rather than separate products, so each new vertical is configuration plus polish, not a rebuild.',
      'The verification workflow is deliberately manual where it matters — trust is the product, so document review is not automated away.',
    ],
    outcomes: [
      'Live at peyg.app with multiple verticals launched and more in rollout — designed, built, and operated solo.',
      'Sellers go from a chat-thread presence to a branded, verified site in minutes instead of a weeks-long web project.',
      'Scattered social-media messages become organized, trackable leads the seller can actually follow up and close.',
    ],
    gallery: [
      {
        src: '/assets/images/case-studies/peyg-verticals.webp',
        alt: 'Peyg industry verticals — online sellers, professional services, hotels, bookings',
        caption: 'One engine, industry-tuned verticals — live and upcoming.',
      },
      {
        src: '/assets/images/case-studies/peyg-inquiry.webp',
        alt: 'Peyg structured inquiry flow turning DMs into organized leads',
        caption: 'Structured inquiries: a real lead with buyer details, not a "Hi po, available pa?" DM.',
      },
    ],
    metaDescription:
      'Case study: Peyg — a multi-tenant mini-site builder and lead-capture SaaS for Filipino sellers and freelancers, built and operated end-to-end by Raymart Salvador.',
  },
  {
    slug: 'bplo',
    name: 'BPLO Queueing System',
    category: 'Government · City of Biñan',
    oneLiner:
      'QueueWise — priority-aware ticketing and live display boards for the Business Permit & Licensing Office, built to survive peak permit-renewal season.',
    heroImage: '/assets/images/projects/bplo.webp',
    heroAlt: 'BPLO QueueWise — live queue-calling display board for the City of Biñan',
    tags: ['Full-stack', 'Realtime', 'High-throughput'],
    problem: [
      'The Business Permit & Licensing Office serves 100–500 citizens on an ordinary day — and during peak BOSS (Business One-Stop Shop) events, that swells into the thousands as every business in the city renews permits at once.',
      'Manual queueing meant no priority handling, no visibility into which counter serves whom, and long, disorderly waits exactly when the office was under the most pressure.',
    ],
    built: [
      'QueueWise: a ticketing system that understands priority lanes, not just first-come-first-served.',
      'Live display boards showing per-counter now-serving numbers and overall queue status across the office in real time.',
      'Separate flows for new applications and renewals, so the two very different transaction types stop competing for the same line.',
    ],
    architecture: [
      'Realtime updates drive the display boards — a called number appears on screen instantly, not on refresh.',
      'Designed for burst load: the system has to be at its best on the worst days, when thousands pass through during BOSS events.',
      'Deployed on-premise for the LGU — government data stays inside government infrastructure.',
    ],
    outcomes: [
      'In service at the City of Biñan BPLO, handling 100–500 citizens daily.',
      'Scales to thousands of transactions during peak BOSS events.',
      'An internal government deployment — which is why there is no public link to visit.',
    ],
    gallery: [
      {
        src: '/assets/images/projects/bplo.webp',
        alt: 'QueueWise queue status dashboard and live counter displays at the Biñan BPLO',
        caption: 'The live queue-status dashboard and counter displays in service at the BPLO.',
      },
    ],
    metaDescription:
      'Case study: QueueWise — a priority-aware queueing system with realtime display boards for the City of Biñan Business Permit & Licensing Office, led and built by Raymart Salvador.',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

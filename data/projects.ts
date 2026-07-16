/**
 * Single source of truth for portfolio projects.
 * Add a project by appending an object here — no markup to copy.
 * `description` may contain inline <strong> for emphasis (trusted, static content).
 */

export interface FeaturedProject {
  slug: string;
  name: string;
  /** e.g. "SaaS · Certificate Platform" */
  category: string;
  /** display domain shown in the browser-frame bar */
  domain: string;
  url: string;
  image: string;
  alt: string;
  description: string;
  tags: string[];
  /** flip the image to the right on large screens */
  reversed?: boolean;
  /** one-line real, verifiable result (users, volume, time saved) — leave unset until known */
  outcome?: string;
}

export interface MiniProject {
  slug: string;
  name: string;
  /** e.g. "Government · Biñan" */
  category: string;
  description: string;
  tags: string[];
  url?: string;
  image?: string;
  alt?: string;
  /** small overlay label on the screenshot (e.g. "gov · on-premise") */
  badge?: string;
  /** render the private/on-prem lock treatment instead of a screenshot */
  internal?: boolean;
  /** one-line real, verifiable result (users, volume, time saved) — leave unset until known */
  outcome?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: 'certify',
    name: 'Certify+',
    category: 'SaaS · Certificate Platform',
    domain: 'certify.cybernestsolution.com',
    url: 'https://certify.cybernestsolution.com',
    image: '/assets/images/projects/certify.webp',
    alt: 'Certify+ landing page — certificate generation platform',
    description:
      'A platform for schools and training centers to design, bulk-generate, and verify certificates. I built the <strong class="font-medium text-ink-900 dark:text-white">drag-and-drop template builder</strong>, CSV-driven bulk generation, automated email delivery, and a public <strong class="font-medium text-ink-900 dark:text-white">QR-code verification</strong> flow — hosted in-region for data-privacy compliance.',
    tags: ['Next.js', 'Supabase', 'PostgreSQL', 'QR Verification'],
  },
  {
    slug: 'peyg',
    name: 'Peyg',
    category: 'SaaS · Site Builder & Lead Capture',
    domain: 'peyg.app',
    url: 'https://peyg.app',
    image: '/assets/images/projects/peyg.webp',
    alt: 'Peyg landing page — mini-site builder for local brands',
    description:
      'Lets sellers and freelancers launch a branded mini-site with structured lead capture in <strong class="font-medium text-ink-900 dark:text-white">~5 minutes</strong>. I built subdomain provisioning, a business-verification workflow, and an inquiry system that turns scattered social-media messages into organized, trackable leads.',
    tags: ['Next.js', 'Supabase', 'Multi-tenant', 'Subdomains'],
    reversed: true,
  },
];

export const miniProjects: MiniProject[] = [
  {
    slug: 'bplo',
    name: 'BPLO Queueing System',
    category: 'Government · Biñan',
    image: '/assets/images/projects/bplo.webp',
    alt: 'BPLO QueueWise — live queue-calling display board for the City of Biñan',
    badge: 'gov · on-premise',
    description:
      'Led the build of <strong class="font-medium text-ink-900 dark:text-white">QueueWise</strong> for the Business Permit & Licensing Office — priority-aware ticketing and live display boards serving 100–500 citizens daily, scaling to thousands during peak BOSS events.',
    tags: ['Full-stack', 'Realtime', 'High-throughput'],
  },
  {
    slug: 'aerocomp',
    name: 'AeroComp',
    category: 'Client · Manufacturing',
    url: 'https://aerocomp.ph',
    image: '/assets/images/projects/aerocomp.webp',
    alt: 'AeroComp — ballistic protection manufacturer marketing site',
    description:
      'Marketing site and full admin panel for a Philippine ballistic-armor manufacturer — product management, appointment booking, and CMS-driven carousel, partners, and featured video.',
    tags: ['Full-stack', 'Admin CMS'],
  },
  {
    slug: 'stayflix',
    name: 'StayFlix',
    category: 'Client · Booking Platform',
    url: 'https://www.stayflix.ph',
    image: '/assets/images/projects/stayflix.webp',
    alt: 'StayFlix — verified Pansol resort booking platform',
    description:
      'A resort-booking platform for verified Pansol hot-spring resorts — searchable listings with price, group-size and amenity filters, map view, saved stays, and a reservation flow.',
    tags: ['Booking', 'Search & Filters'],
  },
  {
    slug: 'eneda',
    name: 'ENEDA',
    category: 'Client · Membership',
    url: 'https://www.eneda-ph.com',
    image: '/assets/images/projects/eneda.webp',
    alt: 'ENEDA — Entrepreneurship Educators Association of the Philippines membership site',
    description:
      'Public site and member platform for the Entrepreneurship Educators Association of the Philippines — membership sign-up, events, news, and appointment scheduling.',
    tags: ['Membership', 'CMS'],
  },
  {
    slug: 'orbit360',
    name: 'Orbit 360',
    category: 'Client · Rentals',
    url: 'https://www.orbit360.rentals',
    image: '/assets/images/projects/orbit360.webp',
    alt: 'Orbit 360 — 360° camera rental and booking site in Lipa, Batangas',
    description:
      'Booking site for a 360° camera-rental service in Lipa, Batangas — equipment catalog, reservations, booking tracking, and customer reviews.',
    tags: ['Booking', 'Web Design'],
  },
  {
    slug: 'inokuchi',
    name: 'Inokuchi Coffee Bar',
    category: 'Client · F&B',
    url: 'https://www.inokuchicoffeebar.com',
    image: '/assets/images/projects/inokuchi.webp',
    alt: 'Inokuchi Coffee Bar — Japanese-inspired coffee bar marketing site in San Pedro',
    description:
      'Marketing site for a Japanese-inspired coffee bar in San Pedro — menu, catering packages, and a coffee-booth booking flow, in a clean minimalist theme.',
    tags: ['Web Design', 'CMS'],
  },
  {
    slug: 'toshiba',
    name: 'E-Resignation & Clearance',
    category: 'Enterprise · Toshiba',
    internal: true,
    description:
      'Sole developer on an on-premise clearance system for an 8,000-employee manufacturer — digitized a paper process, processed <strong class="font-medium text-ink-900 dark:text-white">2,500+ resignations</strong> in 2 years, and cut turnaround from weeks to days.',
    tags: ['ASP.NET Core', 'SQL Server'],
  },
];

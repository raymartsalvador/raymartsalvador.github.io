/**
 * Speaking engagements & community involvement.
 * Framed by topic/role — no employer titles (see resume framing rules).
 */

export interface SpeakingEntry {
  slug: string;
  /** short role pill, e.g. "Fireside Chat Panelist" */
  role: string;
  /** the event name */
  event: string;
  /** host org(s) */
  org: string;
  /** human-readable date */
  date: string;
  description: string;
  image: string;
  alt: string;
}

export const speakingEntries: SpeakingEntry[] = [
  {
    slug: 'innobazaar-2026',
    role: 'Fireside Chat Panelist',
    event: 'Innobazaar 2026 — Cohort 2 Demo Day',
    org: 'DOST · PUP Pylon TBI',
    date: '2026',
    description:
      'Invited to the fireside-chat panel at the PUP Pylon TBI Cohort 2 Demo Day, sharing hands-on lessons on building software products and taking them from prototype to market with the incubator’s startup founders.',
    image: '/assets/images/speaking/innobazaar.jpg',
    alt: 'Raymart Salvador speaking on the fireside-chat panel at Innobazaar 2026',
  },
  {
    slug: 'pylon-demo-day',
    role: 'Startup Pitch',
    event: 'Cohort 1 Pitching & Demo Day',
    org: 'DOST · PUP Pylon TBI',
    date: 'June 2025',
    description:
      'Pitched a product venture to a panel of DOST, DTI, and investor judges as an incubatee of the DOST-backed PUP Pylon Technology Business Incubator.',
    image: '/assets/images/speaking/demo-day.jpg',
    alt: 'Raymart Salvador pitching on stage at the DOST PUP Pylon TBI Demo Day',
  },
  {
    slug: 'aces-arduino',
    role: 'Workshop Speaker',
    event: '“Wired for the Web” Arduino Seminar',
    org: 'ACES · PUP CITE',
    date: 'June 6, 2026',
    description:
      'Led a hands-on embedded-systems workshop for Computer Engineering freshmen at my alma mater — from the first Arduino “Blink” sketch to sensor-driven mini-projects.',
    image: '/assets/images/speaking/arduino-seminar.jpg',
    alt: 'Raymart Salvador leading the ACES Arduino seminar at PUP',
  },
];

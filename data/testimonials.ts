/**
 * Client testimonials. The section renders only when this array has entries —
 * add real quotes (with the client's permission) and they appear automatically.
 * Never invent quotes.
 */

export interface Testimonial {
  quote: string;
  /** person's name, e.g. "Juan dela Cruz" */
  name: string;
  /** role + org, e.g. "Owner, Inokuchi Coffee Bar" */
  role: string;
  /** optional link to the client's live site */
  url?: string;
}

export const testimonials: Testimonial[] = [
  // {
  //   quote: 'Raymart took us from idea to a live booking site in weeks…',
  //   name: 'Client Name',
  //   role: 'Owner, StayFlix',
  //   url: 'https://www.stayflix.ph',
  // },
];

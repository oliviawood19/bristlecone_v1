/**
 * content.ts
 * -----------
 * Single source of truth for all marketing copy, data arrays, and contact
 * URLs used throughout the Bristlecone Companies website.
 *
 * Keeping content here means:
 *  - Copy edits never require touching component files
 *  - Adding a new page is as simple as importing the data it needs
 *  - TypeScript enforces consistent data shapes across components
 */

// ─── Contact / mailto URLs ────────────────────────────────────────────────────

/** Primary contact email displayed in the footer and navbar */
export const CONTACT_EMAIL = "hello@bristleconecompanies.com";

/**
 * Pre-populated mailto link for business owners exploring a sale.
 * Subject + body fields give context to the Bristlecone team immediately.
 */
export const OWNER_MAILTO =
  "mailto:info@bristleconecompanies.com?subject=Selling%20My%20Business&body=Name%3A%0ACompany%3A%0ARevenue%2FEBITDA%3A%0ATimeline%3A%0ANotes%3A";

/**
 * Pre-populated mailto link for candidates interested in joining the team.
 */
export const TALENT_MAILTO =
  "mailto:info@bristleconecompanies.com?subject=Careers%20Inquiry&body=Name%3A%0ARole%20Interest%3A%0ALinkedIn%3A%0AResume%20Link%3A%0ANotes%3A";

/** LinkedIn profile URL */
export const LINKEDIN_URL = "https://linkedin.com";

// ─── Section: What We Do (principle cards) ────────────────────────────────────

export interface PrincipleCard {
  title: string;
  desc: string;
}

/**
 * Four principle cards in the "Business builders, permanent owners" section.
 * Each card appears on a dark (primary) background with the wood-grain overlay.
 */
export const PRINCIPLE_CARDS: PrincipleCard[] = [
  {
    title: "Forever Mindset",
    desc: "We acquire to own indefinitely and have no intention to sell. This changes everything: how we invest, how we operate, and how we treat people.",
  },
  {
    title: "Team & Culture First",
    desc: "Everything starts with people. We invest in teams, protect what makes each culture special, and create environments where talented people thrive.",
  },
  {
    title: "Operator DNA",
    desc: "Small actions matter when done consistently over time. We care about the details, discipline, and daily execution that drive real outcomes.",
  },
  {
    title: "Independence & Autonomy",
    desc: "The best decisions are made by people closest to customers. We maintain each business' independence and empower our leaders with real autonomy.",
  },
];

// ─── Section: Why Bristlecone (promise items) ─────────────────────────────────

export interface PromiseItem {
  /** Zero-padded display number, e.g. "01" */
  num: string;
  title: string;
  desc: string;
}

/**
 * Three "Bristlecone Promise" items shown in a bordered left-rule grid.
 */
export const PROMISE_ITEMS: PromiseItem[] = [
  {
    num: "01",
    title: "Your team stays",
    desc: "We don't slash costs to boost short-term margins.",
  },
  {
    num: "02",
    title: "Your brand remains",
    desc: "We honor the legacy you built.",
  },
  {
    num: "03",
    title: "We hold forever",
    desc: "No flipping, no exit strategy.",
  },
];

// ─── Section: Who We're a Fit For (numbered criteria) ────────────────────────

export interface FitCriterion {
  text: string;
}

/**
 * Five numbered criteria displayed via the <NumberedCriteria> component.
 */
export const FIT_CRITERIA: FitCriterion[] = [
  { text: "Bootstrapped founders who've built something enduring" },
  { text: "Businesses measuring success in decades, not quarters" },
  { text: "Leaders who value their team's growth" },
  { text: "Companies with a core DNA worth preserving" },
  {
    text: "Operators seeking institutional rigor with family-business care",
  },
];

// ─── Section: What We Offer (icon cards) ──────────────────────────────────────

export interface OfferingCard {
  /** Path to icon asset — import the image and pass it here */
  icon: string;
  title: string;
  desc: string;
}

/**
 * Four offering cards shown in a 2×2 grid.
 * Icons are imported in the component that renders this data so that
 * Vite's asset pipeline can bundle/fingerprint them correctly.
 */
export const OFFERING_CARD_DATA = [
  {
    key: "capital",
    title: "Permanent Capital",
    desc: "We buy to hold forever. No flips, no exits, no short-term horizons. Your legacy is safe with us because we measure success in decades, not quarters.",
  },
  {
    key: "preserve",
    title: "Preserve What Works",
    desc: "You didn't build something great by accident. We protect the core DNA of your business and honor the history that got you here.",
  },
  {
    key: "people",
    title: "Invest in People",
    desc: "Businesses don't compound—people do. We introduce systems, training, and growth opportunities for your team.",
  },
  {
    key: "discipline",
    title: "Operate with Discipline",
    desc: "Institutional rigor with the care of a family business. We bring excellence in the margins without losing the soul.",
  },
] as const;

// ─── Section: Testimonials ────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

/**
 * Three founder testimonials rendered in the <TestimonialGrid> component.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They understood what we'd built. More importantly, they understood why it mattered. Selling to Bristlecone wasn't an exit; it was a graduation.",
    author: "Jean Doe",
    role: "Founder, Systrends",
  },
  {
    quote:
      "I talked to twenty PE firms. Bristlecone was the only one that didn't ask me how much cost I could cut in the first 100 days.",
    author: "Michael Chen",
    role: "CEO, LegalTech Solutions",
  },
  {
    quote:
      "They kept their word on every single deal point. The transition was seamless, and my team is happier now than they were before.",
    author: "Sarah Jenkins",
    role: "Founder, ConstructFlow",
  },
];

// ─── Section: Dual CTA panels ─────────────────────────────────────────────────

export interface CTAPanel {
  headline: string;
  ctaText: string;
  href: string;
  variant: "primary" | "default";
}

/**
 * Two CTA panels at the bottom of the home page.
 * "primary" renders on the dark brand background; "default" on a light tint.
 */
export const CTA_PANELS: CTAPanel[] = [
  {
    headline: "Ready to Sell Your Business?",
    ctaText: "Get in Touch",
    href: OWNER_MAILTO,
    variant: "primary",
  },
  {
    headline: "Excited to Join Our Team?",
    ctaText: "Careers",
    href: TALENT_MAILTO,
    variant: "default",
  },
];

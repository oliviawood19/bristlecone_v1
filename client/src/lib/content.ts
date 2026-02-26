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

// ─── Asset imports (must be at top level for TypeScript/Vite) ─────────────────
// Testimonial company logos — drop replacements into attached_assets/
import systrendsLogo from "@assets/systrends-logo.png";
import certServiceLogo from "@assets/certificate-of-service-logo.png";
// Testimonial founder headshots — drop replacements into attached_assets/
import daveHeadshot from "@assets/davedarnell_1772081528113.jpg";
import kathrynHeadshot from "@assets/2_1772081334415.jpg";
import jayHeadshot from "@assets/3_1772081334416.jpg";

// ─── Contact / mailto URLs ────────────────────────────────────────────────────

/** Primary contact email displayed in the footer and navbar */
export const CONTACT_EMAIL = "info@bristleconecompanies.com";

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
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/bristleconecompanies/";

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

// ─── Section: Testimonials ────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  author: string;
  rolePrefix: string;
  companyName: string;
  companyUrl: string;
  logoImage: string;
  headshotImage: string;
}

/**
 * Three founder testimonials rendered in the <TestimonialGrid> component.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Most buyers understood what was in the prospectus. Bristlecone understood what we'd actually built — and I recognized in them the same instincts it took to build it.",
    author: "Jay Jump",
    rolePrefix: "Co-Founder,",
    companyName: "Certificate of Service",
    companyUrl: "https://www.certificateofservice.com/",
    logoImage: certServiceLogo,
    headshotImage: jayHeadshot,
  },
  {
    quote:
      "When you're selling something you built with your own hands, you’re on high alert for red flags and your gut instinct matters. I didn't have a single concern with Bristlecone. At the end of it, I sold to people I was happy to call friends.",
    author: "Kathryn Jump",
    rolePrefix: "Co-Founder,",
    companyName: "Certificate of Service",
    companyUrl: "https://www.certificateofservice.com/",
    logoImage: certServiceLogo,
    headshotImage: kathrynHeadshot,
  },
  {
    quote:
      "A lot of buyers will turn around and sell a business again quickly, and the company's identity just disappears. What's impressed me about Bristlecone is that Systrends has kept growing while staying true to what we built. The business has nearly doubled and it still feels like mine.",
    author: "Dave Darnell",
    rolePrefix: "Founder,",
    companyName: "Systrends",
    companyUrl: "https://www.systrends.com/",
    logoImage: systrendsLogo,
    headshotImage: daveHeadshot,
  },
];

// ─── Footer navigation ────────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

/**
 * Site navigation links shown in the footer's right column.
 * Add new pages here as the site grows — they'll appear automatically.
 */
export const FOOTER_NAV_LINKS: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Careers", href: "https://jobs.ashbyhq.com/bristleconecompanies" },
];

/**
 * Legal links shown at the bottom-right of the footer.
 * Replace "#" with real policy URLs when they're ready.
 */
export const FOOTER_LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];


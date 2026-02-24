/**
 * Footer.tsx
 * -----------
 * Site-wide footer rendered at the bottom of every page.
 *
 * Layout:  Three columns on md+, stacked on mobile (flex-col → flex-row).
 *            Left:   copyright
 *            Center: contact email (mailto link)
 *            Right:  social icons (LinkedIn, Email)
 *
 * All contact URLs and text come from lib/content.ts.
 */

import { Linkedin, Mail } from "lucide-react";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-primary/20">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Copyright */}
        <p className="text-sm text-primary-foreground/60 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Bristlecone Companies
        </p>

        {/* Contact email — links to mailto */}
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-sm text-primary-foreground/60 font-medium tracking-wide hover:text-primary-foreground transition-colors"
        >
          {CONTACT_EMAIL}
        </a>

        {/* Social links */}
        <div className="flex gap-4 text-primary-foreground/80">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            aria-label="Email us"
            className="hover:text-white transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

      </div>
    </footer>
  );
}

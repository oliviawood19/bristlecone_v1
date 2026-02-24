import { Link } from "wouter";
import { Linkedin } from "lucide-react";
import {
  LINKEDIN_URL,
  FOOTER_NAV_LINKS,
  FOOTER_LEGAL_LINKS,
} from "@/lib/content";
import signatureLogo from "@assets/Bristlecone_Signature_Logo_transparent.png";
import inc5000Badge  from "@assets/inc5000-badge-transparent.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container-custom py-4 sm:py-5">

        <div className="flex flex-col gap-4">

          {/* ── TOP ROW: logo, nav links, LinkedIn + Inc 5000 ──────────── */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
            <img
              src={signatureLogo}
              alt="Bristlecone Companies"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain brightness-0 invert opacity-90"
            />

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
                {FOOTER_NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bristlecone Companies on LinkedIn"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <img
                src={inc5000Badge}
                alt="Inc. 5000 — America's Fastest-Growing Private Companies"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
            </div>
          </div>

          {/* ── BOTTOM ROW: copyright + legal links aligned ────────────── */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between gap-2 border-t border-primary-foreground/10 pt-3">
            <span className="text-xs text-primary-foreground/40">
              &copy; {new Date().getFullYear()} Bristlecone Companies
            </span>
            <div className="flex items-center justify-center gap-2 text-xs text-primary-foreground/40">
              {FOOTER_LEGAL_LINKS.map((link, i) => (
                <span key={link.label}>
                  {i > 0 && (
                    <span aria-hidden="true" className="mr-2">|</span>
                  )}
                  <a
                    href={link.href}
                    className="underline underline-offset-2 hover:text-primary-foreground/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

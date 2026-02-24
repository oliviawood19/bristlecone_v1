/**
 * Navbar.tsx
 * -----------
 * Fixed top navigation bar.
 *
 * Behaviour:
 *  - Transparent → backdrop-blurred background on scroll (isScrolled state).
 *  - Logo morphs: signature wordmark at top → pinecone icon when scrolled.
 *  - Desktop: "Get in Touch" button (Button component, outline variant).
 *  - Mobile: hamburger → full-screen Sheet overlay with contact links.
 *
 * All email/URL constants come from lib/content.ts.
 */

import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Mail, Linkedin, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CONTACT_EMAIL, LINKEDIN_URL } from "@/lib/content";
import signatureLogo from "@assets/Bristlecone_Signature Logo.png";
import pineconeLogo  from "@assets/pinecone-logo-transparent.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen,     setIsOpen]     = useState(false);

  // Track scroll position to swap logo and show backdrop
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md bg-background">
      <div className="container-custom flex items-center justify-between py-4 border-b border-primary">

        {/* ── Logo ──────────────────────────────────────────────────────── */}
        {/*
          Two images stacked in the same position; opacity + scale transitions
          cross-fade between the signature wordmark (at top of page) and the
          compact pinecone icon (when scrolled).
        */}
        <Link href="/" aria-label="Bristlecone Companies — home" className="z-50 relative">
          {/* Pinecone icon — visible when scrolled */}
          <img
            src={pineconeLogo}
            alt="Bristlecone Companies"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 h-12 w-auto object-contain",
              "transition-all duration-500 ease-in-out",
              isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-75",
            )}
          />
          {/* Signature wordmark — visible at page top */}
          <img
            src={signatureLogo}
            alt="Bristlecone Companies"
            className={cn(
              "h-10 w-auto object-contain",
              "transition-all duration-500 ease-in-out",
              isScrolled ? "opacity-0 scale-75" : "opacity-100 scale-100",
            )}
          />
        </Link>

        {/* ── Desktop CTA ───────────────────────────────────────────────── */}
        {/* Hidden on mobile; uses Button component with outline variant */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://jobs.ashbyhq.com/bristleconecompanies"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-base text-primary hover:text-primary/70 transition-colors"
            data-testid="link-careers"
          >
            Careers
          </a>
          <Button
            asChild
            variant="outline"
            className="
              group rounded-none font-serif text-base text-primary border-primary
              hover:bg-primary hover:text-primary-foreground
            "
          >
            <a href={`mailto:${CONTACT_EMAIL}`}>
              Get in Touch
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* ── Mobile menu trigger ───────────────────────────────────────── */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="z-50 relative text-primary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </SheetTrigger>

          {/* ── Mobile sheet overlay ─────────────────────────────────── */}
          {/*
            Full-viewport overlay (100vw × 100vh) centred on a simple
            "Get in Touch" prompt with social icon links pinned to the footer.
          */}
          <SheetContent
            side="right"
            className="w-[100vw] sm:w-[100vw] h-full border-none bg-background p-0 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center items-center px-6">
              <a
                href="https://jobs.ashbyhq.com/bristleconecompanies"
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-lg text-primary hover:text-primary/70 transition-colors animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200"
                data-testid="link-careers-mobile"
              >
                Careers
              </a>
            </div>

            {/* Social / contact links pinned to bottom of overlay */}
            <div className="absolute bottom-8 flex gap-6 text-muted-foreground">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email us"
                className="hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  );
}

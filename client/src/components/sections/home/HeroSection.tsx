/**
 * HeroSection.tsx
 * ----------------
 * Full-viewport hero: split-screen layout on desktop (text left, tree image
 * right), single-column with background image on mobile.
 *
 * Animation:  CSS classes from index.css (.hero-fade-*, .hero-tree).
 *             No inline <style> blocks — all keyframes live in index.css.
 * CTA:        Uses the reusable <Button> component (variant="link-animated").
 */

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/content";
import bristleconeTreeImg from "@assets/drawn_bristlecone.png";

export function HeroSection() {
  return (
    <section className="relative bg-background overflow-hidden min-h-[85vh] sm:min-h-screen flex flex-col mt-4 sm:mt-6">
      {/* ── Mobile: full-bleed background tree image ─────────────────── */}
      <div className="absolute inset-0 lg:hidden pointer-events-none">
        <div className="absolute inset-0 hero-tree">
          <img
            src={bristleconeTreeImg}
            alt=""
            aria-hidden="true"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-bottom opacity-90"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 via-60% to-transparent" />
      </div>
      {/* ── Desktop: tree image pinned to the right edge ─────────────── */}
      <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block pointer-events-none">
        <div
          className="
            absolute inset-y-0 left-0 w-24 z-10
            bg-gradient-to-r from-background to-transparent
          "
        />
        <div className="hero-tree absolute inset-0 -left-10 -bottom-5 -right-5 flex items-center justify-center">
          <img
            src={bristleconeTreeImg}
            alt="Bristlecone Pine illustration"
            loading="eager"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-90"
          />
        </div>
      </div>
      {/* ── Content inside container-custom for consistent margins ──── */}
      <div className="relative z-10 container-custom flex-1 flex items-center min-h-[85vh] sm:min-h-screen">
        <div
          className="
            lg:w-[55%] lg:overflow-visible
            pt-24 pb-12 sm:pt-36 sm:pb-20 lg:py-0
          "
        >
          <h1
            className="hero-fade-2 font-serif font-bold text-primary tracking-[-0.01em] sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] mb-6 sm:mb-8 lg:max-w-[130%] text-[44px]"
          >
            Enduring ownership for enduring businesses
          </h1>

          <p
            className="hero-fade-4 font-sans sm:text-xl md:text-[22px] max-w-[48ch] mb-10 sm:mb-12 text-[18px] text-[#6b6b61] font-medium lg:font-light"
          >
            Bristlecone acquires and operates essential businesses to steward
            what matters most—people, customers, and legacy—and unlock their
            full potential over decades.
          </p>

          <div className="hero-fade-5">
            <Button asChild variant="link-animated" className="no-elevate cta-underline tracking-[0.08em] hover:border-transparent text-[16px]">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

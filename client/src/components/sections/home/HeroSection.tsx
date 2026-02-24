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
    <section className="relative bg-background overflow-hidden min-h-screen flex flex-col mt-4 sm:mt-6">

      {/* ── Split-screen body ───────────────────────────────────────────── */}
      <div className="relative flex flex-col lg:flex-row flex-1 min-h-screen">

        {/* ── Mobile: full-bleed background tree image ─────────────────── */}
        {/*
          On small screens the tree fills the section background behind the
          text, fading out toward the top so the headline remains legible.
          Hidden on lg+ where the right panel takes over.
        */}
        <div className="absolute inset-0 lg:hidden pointer-events-none">
          <div className="absolute inset-0 hero-tree">
            <img
              src={bristleconeTreeImg}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-bottom opacity-90"
            />
          </div>
          {/* Gradient: strong background color at top (text), fades to image at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 via-60% to-transparent" />
        </div>

        {/* ── Left panel: headline + body copy + CTA ───────────────────── */}
        <div
          className="
            relative z-10 flex flex-col justify-center
            flex-none lg:w-[52%]
            px-6 sm:px-12 lg:px-20
            pt-28 pb-16 sm:pt-36 sm:pb-20 lg:py-0
          "
        >
          {/* Headline — staggered fade-up (hero-fade-2) */}
          <h1
            className="
              hero-fade-2 font-serif font-bold text-primary leading-[1.08] tracking-[-0.01em]
              text-[32px] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px]
              mb-6 sm:mb-8
            "
          >
            Enduring
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            ownership
            <br />
            for enduring
            <br />
            businesses
          </h1>

          {/* Body copy */}
          <p
            className="
              hero-fade-4 font-sans font-light text-muted-foreground
              text-[15px] sm:text-lg leading-relaxed
              max-w-[44ch] mb-10 sm:mb-12
            "
          >
            Bristlecone acquires and operates essential businesses to steward
            what matters most—people, customers, and legacy—and unlock their
            full potential over decades.
          </p>

          {/* CTA — Button component with link-animated variant */}
          <div className="hero-fade-5">
            <Button asChild variant="link-animated" className="cta-underline text-sm tracking-[0.08em]">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                Get in Touch
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>

        {/* ── Right panel: tree image (desktop only) ───────────────────── */}
        {/*
          On lg+ the tree is shown in its own panel occupying the right 48%.
          A left-edge gradient softly blends the panel into the left column.
        */}
        <div className="relative flex-none lg:w-[48%] hidden lg:block lg:h-auto overflow-hidden">
          {/* Left-edge soft fade into background */}
          <div
            className="
              absolute inset-y-0 left-0 w-24 z-10
              bg-gradient-to-r from-background to-transparent pointer-events-none
            "
          />
          <div className="hero-tree absolute inset-0 -left-10 -bottom-5 -right-5 flex items-center justify-center">
            <img
              src={bristleconeTreeImg}
              alt="Bristlecone Pine illustration"
              className="w-full h-full object-cover object-center opacity-90"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

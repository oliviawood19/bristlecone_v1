/**
 * Footer.tsx
 * -----------
 * Two-column footer on a dark green (primary) background.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │  [Logo]                                                    Home      │
 * │  [LinkedIn]  [INC 5000 badge ×2]                                     │
 * │  © 2026 Bristlecone Companies          Privacy | Terms               │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * Left side (flex-col, justify-between):  logo/LinkedIn/badge ↑  copyright ↓
 * Right side (flex-col, justify-between): nav links ↑  legal links ↓
 *
 * Mobile: left group stacks above right group.
 *
 * Assets:
 *   - Bristlecone_Signature_Logo_transparent.png
 *     CSS `brightness-0 invert` renders dark-green art as white.
 *   - inc5000-badge-transparent.png — white bg removed.
 *
 * All URLs / link data come from lib/content.ts.
 */

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
      <div className="container-custom py-5 sm:py-6">

        {/*
          Two-column layout — both columns stretch to the same height so
          copyright (left, bottom) and legal links (right, bottom) align.

            Left  — logo → LinkedIn → badge → copyright   (justify-between)
            Right — nav links → legal links               (justify-between)

          On mobile the two groups stack vertically, left on top.
        */}
        <div className="flex flex-col sm:flex-row sm:items-stretch justify-between gap-6 sm:gap-8">

          {/* ── LEFT: brand marks stacked, copyright pinned to bottom ──── */}
          <div className="flex flex-col items-start justify-between gap-3">

            {/* Top group: logo → LinkedIn + badge (centered under logo) */}
            <div className="flex flex-col items-start gap-3">

              {/* Signature logo — CSS filter makes dark-green art appear white */}
              <img
                src={signatureLogo}
                alt="Bristlecone Companies"
                className="h-10 sm:h-12 w-auto object-contain brightness-0 invert opacity-90"
              />

              {/* LinkedIn icon + INC 5000 badge — centered under the logo */}
              <div className="flex items-center justify-center gap-5 w-full">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bristlecone Companies on LinkedIn"
                  className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>

                <img
                  src={inc5000Badge}
                  alt="Inc. 5000 — America's Fastest-Growing Private Companies"
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </div>

            </div>

            {/* Copyright — pinned to bottom of left column */}
            <span className="text-xs text-primary-foreground/40">
              &copy; {new Date().getFullYear()} Bristlecone Companies
            </span>

          </div>

          {/* ── RIGHT: nav pinned to top, legal links pinned to bottom ─── */}
          <div className="flex flex-col items-start sm:items-end justify-between gap-1.5">

            {/* Nav links — right-aligned on desktop */}
            <nav aria-label="Footer navigation">
              <ul className="flex items-center gap-4">
                {FOOTER_NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Legal links — bottom-aligned to match copyright on the left */}
            <div className="flex items-center gap-2 text-xs text-primary-foreground/40">
              {FOOTER_LEGAL_LINKS.map((link, i) => (
                <>
                  {i > 0 && (
                    <span key={`sep-${i}`} aria-hidden="true">|</span>
                  )}
                  <a
                    key={link.label}
                    href={link.href}
                    className="underline underline-offset-2 hover:text-primary-foreground/70 transition-colors"
                  >
                    {link.label}
                  </a>
                </>
              ))}
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

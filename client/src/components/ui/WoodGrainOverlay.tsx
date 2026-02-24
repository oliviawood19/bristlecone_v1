/**
 * WoodGrainOverlay.tsx
 * ---------------------
 * Reusable decorative background overlay that applies the bristlecone pine
 * wood-grain texture pattern to any absolutely-positioned parent container.
 *
 * Usage:
 *   <div className="relative overflow-hidden ...">
 *     <WoodGrainOverlay opacity={0.08} />
 *     <div className="relative z-10">...content...</div>
 *   </div>
 *
 * The parent must have `position: relative` and `overflow: hidden`.
 * Content above the overlay must use `relative z-10` (or higher).
 */

import woodGrainPattern from "@assets/generated_images/abstract_bristlecone_pine_wood_grain_line_pattern.png";
import { cn } from "@/lib/utils";

interface WoodGrainOverlayProps {
  /**
   * Opacity of the texture layer (0–1).
   * @default 0.08
   */
  opacity?: number;
  /**
   * When true, adds a subtle dark-to-transparent gradient wash on top of the
   * texture. Useful on dark (primary) backgrounds to improve text legibility.
   * @default false
   */
  withGradientWash?: boolean;
  className?: string;
}

export function WoodGrainOverlay({
  opacity = 0.08,
  withGradientWash = false,
  className,
}: WoodGrainOverlayProps) {
  return (
    /* Absolutely fills the parent container — parent needs position:relative */
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 pointer-events-none", className)}
    >
      {/* Wood grain texture tile */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${woodGrainPattern})`,
          backgroundRepeat: "repeat",
          backgroundSize: "520px",
          backgroundPosition: "center",
          opacity,
        }}
      />

      {/* Optional gradient wash — adds depth on primary-colored panels */}
      {withGradientWash && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent" />
      )}
    </div>
  );
}

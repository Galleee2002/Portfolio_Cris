import React from "react";
import type { TimelineDotProps } from "./TimelineDot.types";

/**
 * TimelineDot Atom
 *
 * Punto circular que marca cada evento en la timeline.
 * Átomo básico con efecto neón.
 *
 * @component
 */
export const TimelineDot: React.FC<TimelineDotProps> = ({
  isActive = false,
  className = "",
}) => {
  const activeClasses = isActive
    ? "w-4 h-4 bg-neon-turquoise shadow-[0_0_20px_rgba(0,255,240,0.8)]"
    : "w-3 h-3 bg-neon-fuchsia shadow-[0_0_10px_rgba(255,0,200,0.5)]";

  return (
    <div
      className={`absolute left-0 top-2 -translate-x-1/2 rounded-full border-2 border-tech-black transition-all duration-300 ${activeClasses} ${className}`}
      aria-hidden="true"
    />
  );
};

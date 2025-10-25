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
    ? "w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-neon-turquoise shadow-[0_0_15px_rgba(0,255,240,0.7)] sm:shadow-[0_0_20px_rgba(0,255,240,0.8)]"
    : "w-2.5 h-2.5 sm:w-3 sm:h-3 bg-neon-fuchsia shadow-[0_0_8px_rgba(255,0,200,0.5)] sm:shadow-[0_0_10px_rgba(255,0,200,0.5)]";

  return (
    <div
      className={`absolute left-0 top-1.5 sm:top-2 -translate-x-1/2 rounded-full border-2 border-tech-black transition-all duration-300 ${activeClasses} ${className}`}
      aria-hidden="true"
    />
  );
};

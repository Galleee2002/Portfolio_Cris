import React from "react";
import type { TimelineLineProps } from "./TimelineLine.types";

/**
 * TimelineLine Atom
 *
 * Línea vertical de la timeline que conecta los puntos.
 * Átomo básico para construcción de timelines.
 *
 * @component
 */
export const TimelineLine: React.FC<TimelineLineProps> = ({
  isLast = false,
  className = "",
}) => {
  if (isLast) return null;

  return (
    <div
      className={`absolute left-0 top-8 bottom-0 w-0.5 bg-linear-to-b from-neon-turquoise via-neon-fuchsia to-neon-turquoise opacity-50 ${className}`}
      aria-hidden="true"
    />
  );
};

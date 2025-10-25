import React from "react";
import type { TimelineTextProps } from "./TimelineText.types";

/**
 * TimelineText Atom
 *
 * Texto estilizado para elementos de la timeline.
 * Átomo reutilizable con diferentes variantes.
 *
 * @component
 */
export const TimelineText: React.FC<TimelineTextProps> = ({
  children,
  variant = "body",
  className = "",
}) => {
  const variantClasses = {
    title: "text-xl md:text-2xl font-bold text-neon-turquoise font-title",
    subtitle: "text-lg md:text-xl font-semibold text-neon-fuchsia font-body",
    body: "text-base md:text-lg text-white font-body leading-relaxed",
    caption: "text-sm md:text-base text-white font-body",
  };

  return (
    <span className={`${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
};

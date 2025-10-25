import React from "react";
import type { AboutSectionProps } from "./AboutSection.types";

/**
 * AboutSection Organism
 *
 * Sección "Sobre Mí" del portfolio.
 * Muestra información personal y profesional.
 *
 * @component
 */
export const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Sobre Mí",
  paragraphs,
  className = "",
}) => {
  return (
    <div className={`max-w-3xl mx-auto text-center ${className}`}>
      <h2 className="section-title">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-lg text-text-primary/80 font-body ${
            index < paragraphs.length - 1 ? "mb-6" : ""
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

import React from "react";
import type { AboutSectionProps } from "./AboutSection.types";

export const AboutSection: React.FC<AboutSectionProps> = ({
  title = "Sobre Mí",
  paragraphs,
  className = "",
}) => {
  return (
    <div
      className={`max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto text-center px-4 ${className}`}
    >
      <h2 className="section-title">{title}</h2>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-sm sm:text-base md:text-lg text-text-primary/80 font-body ${
            index < paragraphs.length - 1 ? "mb-4 sm:mb-5 md:mb-6" : ""
          }`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

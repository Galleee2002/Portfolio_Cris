import React from "react";
import { TimelineItem } from "../../molecules";
import type { ExperiencesSectionProps } from "./ExperiencesSection.types";

/**
 * ExperiencesSection Organism
 *
 * Sección completa de experiencias profesionales con timeline.
 * Organismo que agrupa múltiples TimelineItems en una visualización coherente.
 *
 * @component
 */
export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  experiences,
  title = "Experiencia Profesional",
  id = "experience",
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`section-container py-16 md:py-24 ${className}`}
    >
      {/* Title */}
      <h2 className="section-title">{title}</h2>

      {/* Timeline Container */}
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
              isActive={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

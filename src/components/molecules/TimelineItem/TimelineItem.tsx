import React from "react";
import {
  TimelineLine,
  TimelineDot,
  TimelineText,
  TechnologyTag,
} from "../../atoms";
import type { TimelineItemProps } from "./TimelineItem.types";

/**
 * TimelineItem Molecule
 *
 * Elemento individual de la timeline que combina punto, línea y contenido.
 * Molécula que agrupa átomos de timeline con información de experiencia.
 *
 * @component
 */
export const TimelineItem: React.FC<TimelineItemProps> = ({
  experience,
  isLast = false,
  isActive = false,
  className = "",
}) => {
  return (
    <div
      className={`relative pl-6 sm:pl-8 md:pl-10 pb-8 sm:pb-10 md:pb-12 ${className}`}
    >
      {/* Dot */}
      <TimelineDot isActive={isActive} />

      {/* Line */}
      <TimelineLine isLast={isLast} />

      {/* Content */}
      <div className="space-y-1.5 sm:space-y-2">
        {/* Title & Company */}
        <div>
          <TimelineText variant="title">{experience.title}</TimelineText>
          <TimelineText variant="subtitle" className="block mt-0.5 sm:mt-1">
            {experience.company}
          </TimelineText>
        </div>

        {/* Period & Location */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-4">
          <TimelineText variant="caption" className="flex items-center gap-1">
            <span className="text-neon-turquoise">📅</span>
            {experience.period}
          </TimelineText>
          {experience.location && (
            <TimelineText variant="caption" className="flex items-center gap-1">
              <span className="text-neon-fuchsia">📍</span>
              {experience.location}
            </TimelineText>
          )}
        </div>

        {/* Description */}
        <TimelineText variant="body" className="block pt-0.5 sm:pt-1">
          {experience.description}
        </TimelineText>

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1.5 sm:pt-2">
            {experience.technologies.map((tech, index) => (
              <TechnologyTag key={index} technology={tech} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

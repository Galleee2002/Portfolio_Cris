import React from "react";
import { SkillCard } from "@molecules/SkillCard";
import type { SkillsSectionProps } from "./SkillsSection.types";

/**
 * SkillsSection Organism
 *
 * Sección que muestra las habilidades y herramientas.
 * Utiliza SkillCard para cada habilidad.
 *
 * @component
 */
export const SkillsSection: React.FC<SkillsSectionProps> = ({
  title = "Habilidades",
  skills,
  className = "",
}) => {
  return (
    <div className={className}>
      <h2 className="section-title">{title}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

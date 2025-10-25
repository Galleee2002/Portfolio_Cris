import React from "react";
import { FocusCards } from "@molecules/FocusCards";
import type { ProjectsSectionProps } from "./ProjectsSection.types";

/**

 * @component
 */
export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title = "Proyectos Destacados",
  projects,
  onProjectClick,
  className = "",
}) => {
  // Transformar los proyectos al formato de FocusCards
  const focusCardsData = projects.map((project) => ({
    title: project.title,
    description: project.description,
    src:
      project.imageUrl ||
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=3540&auto=format&fit=crop",
  }));

  const handleCardClick = (index: number) => {
    const projectId = projects[index].id;
    onProjectClick?.(projectId);
  };

  return (
    <div className={className}>
      <h2 className="section-title">{title}</h2>
      <FocusCards cards={focusCardsData} onCardClick={handleCardClick} />
    </div>
  );
};

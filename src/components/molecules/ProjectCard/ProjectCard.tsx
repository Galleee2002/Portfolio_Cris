import React from "react";
import { Icon } from "@atoms/Icon";
import type { ProjectCardProps } from "./ProjectCard.types";

/**
 * ProjectCard Molecule
 *
 * Tarjeta simple para mostrar un proyecto de videojuego.
 * Combina imagen/icono, título y descripción en una tarjeta estática.
 *
 * @component
 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  imageUrl,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`card cursor-pointer hover:scale-105 transition-transform duration-300 ${className}`}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="h-full flex flex-col p-4">
        {/* Imagen o Icono */}
        <div className="h-48 bg-neon-turquoise/10 rounded-lg flex items-center justify-center overflow-hidden mb-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : icon ? (
            <Icon
              icon={icon}
              size={60}
              className="text-neon-turquoise"
              ariaLabel={title}
            />
          ) : null}
        </div>

        {/* Título */}
        <h3 className="text-xl font-title font-bold text-neon-turquoise mb-2">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-white/80 font-body text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

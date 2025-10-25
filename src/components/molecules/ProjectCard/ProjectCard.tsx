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
      <div className="h-full flex flex-col p-3 sm:p-4 md:p-5">
        {/* Imagen o Icono */}
        <div className="h-40 sm:h-44 md:h-48 lg:h-52 bg-neon-turquoise/10 rounded-lg flex items-center justify-center overflow-hidden mb-3 sm:mb-4">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : icon ? (
            <Icon
              icon={icon}
              size={48}
              className="text-neon-turquoise sm:w-14 sm:h-14 md:w-16 md:h-16"
              ariaLabel={title}
            />
          ) : null}
        </div>

        {/* Título */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-title font-bold text-neon-turquoise mb-1.5 sm:mb-2">
          {title}
        </h3>

        {/* Descripción */}
        <p className="text-white/80 font-body text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
};

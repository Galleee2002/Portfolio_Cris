import React from "react";
import { Icon } from "@atoms/Icon";
import type { SkillCardProps } from "./SkillCard.types";

/**
 * SkillCard Molecule
 *
 * Tarjeta para mostrar una habilidad o herramienta.
 * Combina Icon y elementos de texto centrados.
 *
 * @component
 */
export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  icon,
  className = "",
}) => {
  return (
    <div className={`card text-center ${className}`}>
      {/* Icono */}
      {icon && (
        <div className="mb-3 sm:mb-4 flex justify-center">
          <Icon
            icon={icon}
            size={40}
            className="text-neon-turquoise sm:w-12 sm:h-12 md:w-14 md:h-14"
            ariaLabel={title}
          />
        </div>
      )}

      {/* Contenido */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-title font-bold mb-1.5 sm:mb-2 text-neon-turquoise">
        {title}
      </h3>
      <p className="text-text-primary/60 font-body text-xs sm:text-sm md:text-base">
        {description}
      </p>
    </div>
  );
};

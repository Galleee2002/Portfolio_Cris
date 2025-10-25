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
        <div className="mb-4 flex justify-center">
          <Icon
            icon={icon}
            size={48}
            className="text-neon-turquoise"
            ariaLabel={title}
          />
        </div>
      )}

      {/* Contenido */}
      <h3 className="text-xl font-title font-bold mb-2 text-neon-turquoise">
        {title}
      </h3>
      <p className="text-text-primary/60 font-body text-sm">{description}</p>
    </div>
  );
};

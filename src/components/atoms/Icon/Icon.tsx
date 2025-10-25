import React from "react";
import type { IconProps } from "./Icon.types";

/**
 * Icon Atom
 *
 * Átomo para renderizar iconos de Lucide React.
 * Componente base reutilizable para todos los iconos del proyecto.
 *
 * @component
 * @example
 * ```tsx
 * import { Home } from 'lucide-react';
 * <Icon icon={Home} size={24} color="text-neon-turquoise" />
 * ```
 */
export const Icon: React.FC<IconProps> = ({
  icon: LucideIcon,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  onClick,
  ariaLabel,
}) => {
  return (
    <LucideIcon
      size={size}
      color={color.startsWith("#") ? color : undefined}
      className={!color.startsWith("#") ? `${color} ${className}` : className}
      strokeWidth={strokeWidth}
      onClick={onClick}
      aria-label={ariaLabel}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    />
  );
};

import type { LucideIcon } from "lucide-react";

/**
 * Props para el componente Icon
 */
export interface IconProps {
  /** El icono de Lucide a renderizar */
  icon: LucideIcon;
  /** Tamaño del icono en píxeles */
  size?: number;
  /** Color del icono (clase de Tailwind o código hex) */
  color?: string;
  /** Clase adicional de CSS */
  className?: string;
  /** Stroke width del icono */
  strokeWidth?: number;
  /** Handler para click */
  onClick?: () => void;
  /** Label accesible para lectores de pantalla */
  ariaLabel?: string;
}

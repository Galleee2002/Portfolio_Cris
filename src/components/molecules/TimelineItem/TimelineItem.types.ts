import type { Experience } from "../../../types/common.types";

/**
 * TimelineItem Types
 *
 * Props para la molécula TimelineItem
 */
export interface TimelineItemProps {
  /**
   * Datos de la experiencia a mostrar
   */
  experience: Experience;
  /**
   * Indica si es el último elemento de la timeline
   */
  isLast?: boolean;
  /**
   * Indica si el elemento está activo/destacado
   */
  isActive?: boolean;
  /**
   * Clases CSS adicionales
   */
  className?: string;
}

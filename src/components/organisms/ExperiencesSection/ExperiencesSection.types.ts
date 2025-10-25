import type { Experience } from "../../../types/common.types";

/**
 * ExperiencesSection Types
 *
 * Props para el organismo ExperiencesSection
 */
export interface ExperiencesSectionProps {
  /**
   * Array de experiencias profesionales a mostrar
   */
  experiences: Experience[];
  /**
   * Título de la sección
   */
  title?: string;
  /**
   * ID para navegación con anchor
   */
  id?: string;
  /**
   * Clases CSS adicionales
   */
  className?: string;
}

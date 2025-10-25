import type { ReactNode } from "react";

/**
 * Sección del HomeTemplate
 */
export interface HomeSection {
  /** Identificador único de la sección */
  id: string;

  /** Título de la sección */
  title?: string;

  /** Contenido de la sección */
  content: ReactNode;

  /** Clases CSS adicionales */
  className?: string;
}

/**
 * Props para el HomeTemplate
 */
export interface HomeTemplateProps {
  /** Sección Hero (presentación principal) */
  heroSection?: ReactNode;

  /** Sección de proyectos destacados */
  projectsSection?: ReactNode;

  /** Sección de experiencias profesionales */
  experiencesSection?: ReactNode;

  /** Sección sobre mí */
  aboutSection?: ReactNode;

  /** Sección de habilidades */
  skillsSection?: ReactNode;

  /** Sección de contacto */
  contactSection?: ReactNode;

  /** Secciones personalizadas adicionales */
  customSections?: HomeSection[];

  /** Clases CSS adicionales */
  className?: string;
}

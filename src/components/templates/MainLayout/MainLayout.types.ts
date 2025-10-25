import type { ReactNode } from "react";

/**
 * Props para el MainLayout Template
 * Define la estructura principal de la aplicación
 */
export interface MainLayoutProps {
  /** Contenido del header (organismo Header con navegación integrada) */
  header?: ReactNode;

  /** Contenido principal de la página */
  children: ReactNode;

  /** Contenido del footer (organismo Footer) */
  footer?: ReactNode;

  /** Clases CSS adicionales para el contenedor principal */
  className?: string;
}

import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

/**
 * Link social para el footer
 */
export interface SocialLink {
  /** Identificador único */
  id: string;

  /** Nombre de la red social */
  name: string;

  /** URL del perfil */
  url: string;

  /** Ícono de Lucide */
  icon?: LucideIcon;
}

/**
 * Props para el Footer Organism
 */
export interface FooterProps {
  /** Nombre del diseñador */
  designerName?: string;

  /** Email de contacto */
  email?: string;

  /** Enlaces a redes sociales */
  socialLinks?: SocialLink[];

  /** Año de copyright */
  year?: number;

  /** Texto adicional (puede ser string o elemento React) */
  additionalText?: ReactNode;

  /** Clases CSS adicionales */
  className?: string;
}

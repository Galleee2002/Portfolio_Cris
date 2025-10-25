import type { LucideIcon } from "lucide-react";

/**
 * Item de navegación
 */
export interface NavigationItem {
  /** Identificador único del item */
  id: string;

  /** Texto a mostrar */
  label: string;

  /** URL o ruta del enlace */
  href: string;

  /** Indica si es el item activo actualmente */
  isActive?: boolean;

  /** Ícono opcional de Lucide */
  icon?: LucideIcon;
}

/**
 * Props para el Navigation Organism
 */
export interface NavigationProps {
  /** Lista de items de navegación */
  items: NavigationItem[];

  /** Callback cuando se hace click en un item */
  onItemClick?: (item: NavigationItem) => void;

  /** Orientación del menú */
  orientation?: "horizontal" | "vertical";

  /** Clases CSS adicionales */
  className?: string;
}

import type { NavigationItem } from "../Navigation/Navigation.types";

/**
 * Props para el Header Organism
 */
export interface HeaderProps {
  /** Logo o título del portfolio */
  logo?: string;

  /** Nombre del diseñador */
  designerName?: string;

  /** Callback cuando se hace click en el logo */
  onLogoClick?: () => void;

  /** Mostrar efecto de scroll sticky */
  isSticky?: boolean;

  /** Items de navegación */
  navigationItems?: NavigationItem[];

  /** Callback cuando se hace click en un item de navegación */
  onNavigationItemClick?: (item: NavigationItem) => void;

  /** Clases CSS adicionales */
  className?: string;
}

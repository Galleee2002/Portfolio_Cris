import React from "react";
import { Icon } from "@atoms/Icon";
import type { NavigationProps, NavigationItem } from "./Navigation.types";

/**
 * Navigation Organism
 *
 * Menú de navegación principal del portfolio.
 * Soporta orientación horizontal y vertical.
 * Utiliza iconos de Lucide React.
 *
 * @component
 */
export const Navigation: React.FC<NavigationProps> = ({
  items,
  onItemClick,
  orientation = "horizontal",
  className = "",
}) => {
  const handleItemClick = (item: NavigationItem, e: React.MouseEvent) => {
    e.preventDefault();

    if (onItemClick) {
      onItemClick(item);
    }

    // Scroll suave a la sección
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${className}`}>
      <ul
        className={`
          flex 
          ${
            orientation === "horizontal"
              ? "flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-5"
              : "flex-col space-y-2"
          }
          items-center justify-center
        `}
      >
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={(e) => handleItemClick(item, e)}
              className={`
                group relative px-2 py-1.5 sm:px-3 sm:py-2 md:px-4 rounded-lg font-body font-medium
                transition-all duration-300 text-xs sm:text-sm md:text-base
                ${
                  item.isActive
                    ? "text-neon-turquoise"
                    : "text-text-primary/70 hover:text-neon-turquoise"
                }
              `}
            >
              {/* Contenido */}
              <span className="relative flex items-center space-x-1 sm:space-x-2">
                {item.icon && (
                  <Icon
                    icon={item.icon}
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110 sm:w-4 sm:h-4 md:w-5 md:h-5"
                  />
                )}
                <span className="hidden sm:inline">{item.label}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

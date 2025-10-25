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
              ? "flex-row gap-5"
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
                group relative px-4 py-2 rounded-lg font-body font-medium
                transition-all duration-300 text-sm sm:text-base
                ${
                  item.isActive
                    ? "text-neon-turquoise"
                    : "text-text-primary/70 hover:text-neon-turquoise"
                }
              `}
            >
              {/* Contenido */}
              <span className="relative flex items-center space-x-2">
                {item.icon && (
                  <Icon
                    icon={item.icon}
                    size={18}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                )}
                <span>{item.label}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

import React, { useState, useEffect } from "react";
import { Navigation } from "../Navigation";
import type { HeaderProps } from "./Header.types";

/**

 *
 * @component
 */
export const Header: React.FC<HeaderProps> = ({
  logo,
  designerName = "Cristian",
  onLogoClick,
  isSticky = true,
  navigationItems = [],
  onNavigationItemClick,
  className = "",
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        ${isSticky ? "fixed top-0 left-0 right-0 z-50" : ""} 
        transition-all duration-300
        backdrop-blur-lg bg-black/30
        border-b border-white/10
        ${isScrolled ? "shadow-lg shadow-purple-500/10" : ""}
        ${className}
      `}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          {logo && (
            <div
              className="flex items-center cursor-pointer group"
              onClick={onLogoClick}
            >
              <img
                src={logo}
                alt={`${designerName} Logo`}
                className="h-8 sm:h-9 md:h-10 w-auto transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}

          {navigationItems.length > 0 && (
            <Navigation
              items={navigationItems}
              onItemClick={onNavigationItemClick}
              orientation="horizontal"
              className="flex-1 justify-center"
            />
          )}
        </div>
      </div>
    </div>
  );
};

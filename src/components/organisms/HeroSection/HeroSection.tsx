import React from "react";
import { Button } from "@atoms/Button";
import { Avatar } from "@atoms/Avatar";
import type { HeroSectionProps } from "./HeroSection.types";

/**
 * HeroSection Organism
 *
 * Sección de presentación principal del portfolio.
 * Incluye avatar, título, descripción y botones de acción.
 *
 * @component
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  avatarSrc,
  avatarAlt = "Foto de perfil",
  onViewProjects,
  onContact,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 sm:gap-5 md:gap-6 px-4 ${className}`}
    >
      {avatarSrc && (
        <div className="mb-2 sm:mb-3 md:mb-4">
          <Avatar src={avatarSrc} alt={avatarAlt} size="xl" />
        </div>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-title font-bold text-center leading-tight">
        {title}
      </h1>
      <h2
        className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-body text-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-relaxed px-4"
        style={{
          color: "#00E8FF",
          textShadow:
            "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7)",
        }}
      >
        {subtitle}
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4">
        <Button variant="secondary" onClick={onViewProjects}>
          Ver Proyectos
        </Button>
        <Button variant="secondary" onClick={onContact}>
          Contactar
        </Button>
      </div>
    </div>
  );
};

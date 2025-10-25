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
    <div className={`flex flex-col items-center gap-6 ${className}`}>
      {avatarSrc && (
        <div className="mb-4">
          <Avatar src={avatarSrc} alt={avatarAlt} size="xl" />
        </div>
      )}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-title font-bold text-center leading-tight">
        {title}
      </h1>
      <h2
        className="text-xl sm:text-2xl lg:text-3xl font-body text-center max-w-4xl leading-relaxed"
        style={{
          color: "#00E8FF",
          textShadow:
            "0 0 20px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.7)",
        }}
      >
        {subtitle}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
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

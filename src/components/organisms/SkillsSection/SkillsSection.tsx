import React from "react";
import { LogoLoop } from "@molecules/LogoLoop";
import { Icon } from "@atoms/Icon";
import type { SkillsSectionProps } from "./SkillsSection.types";

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  title = "Habilidades",
  tools,
  className = "",
}) => {
  const techLogos = tools?.map((tool) => ({
    node: (
      <div
        className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
        style={{ color: tool.color }}
      >
        <Icon icon={tool.icon} size={48} className="w-full h-full" />
      </div>
    ),
    title: tool.name,
    href: tool.href,
  }));

  return (
    <div className={className}>
      <h2 className="section-title">{title}</h2>

      {techLogos && techLogos.length > 0 && (
        <div className="mt-6 sm:mt-8 md:mt-10">
          <div className="px-2 sm:px-4 md:px-6">
            <LogoLoop
              logos={techLogos}
              speed={35}
              direction="left"
              logoHeight={64}
              gap={48}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="rgb(10, 10, 15)"
              ariaLabel="Herramientas de diseño de videojuegos"
              className="py-6 sm:py-8 md:py-10"
            />
          </div>
        </div>
      )}
    </div>
  );
};

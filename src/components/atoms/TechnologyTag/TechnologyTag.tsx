import React from "react";
import type { TechnologyTagProps } from "./TechnologyTag.types";

const TECHNOLOGY_COLORS: Record<
  string,
  { bg: string; text: string; glow: string }
> = {
  Unity: { bg: "#000000", text: "#FFFFFF", glow: "#FFFFFF" },
  "Unreal Engine": { bg: "#0E1128", text: "#FFFFFF", glow: "#0E1128" },
  "C#": { bg: "#68217A", text: "#FFFFFF", glow: "#68217A" },
  Blender: { bg: "#E87D0D", text: "#FFFFFF", glow: "#E87D0D" },
  Git: { bg: "#F05032", text: "#FFFFFF", glow: "#F05032" },
  Photoshop: { bg: "#31A8FF", text: "#FFFFFF", glow: "#31A8FF" },
  Jira: { bg: "#0052CC", text: "#FFFFFF", glow: "#0052CC" },
  JavaScript: { bg: "#F7DF1E", text: "#000000", glow: "#F7DF1E" },
  TypeScript: { bg: "#3178C6", text: "#FFFFFF", glow: "#3178C6" },
  React: { bg: "#61DAFB", text: "#000000", glow: "#61DAFB" },
  Python: { bg: "#3776AB", text: "#FFFFFF", glow: "#3776AB" },
  Maya: { bg: "#0696D7", text: "#FFFFFF", glow: "#0696D7" },
  "Substance Painter": { bg: "#FC6C3F", text: "#FFFFFF", glow: "#FC6C3F" },
  Figma: { bg: "#F24E1E", text: "#FFFFFF", glow: "#F24E1E" },
  Godot: { bg: "#478CBF", text: "#FFFFFF", glow: "#478CBF" },
};

const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : "0, 255, 240";
};

export const TechnologyTag: React.FC<TechnologyTagProps> = ({
  technology,
  className = "",
}) => {
  const colors = TECHNOLOGY_COLORS[technology] || {
    bg: "#06b6d4",
    text: "#FFFFFF",
    glow: "#06b6d4",
  };

  const rgbGlow = hexToRgb(colors.glow);

  return (
    <span
      className={`px-3 py-1.5 text-sm md:text-base rounded-full font-body font-medium transition-all duration-300 cursor-default ${className}`}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px rgba(${rgbGlow}, 0.6), 0 0 30px rgba(${rgbGlow}, 0.4)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {technology}
    </span>
  );
};

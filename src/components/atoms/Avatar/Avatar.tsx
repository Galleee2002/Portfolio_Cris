import React from "react";
import type { AvatarProps } from "./Avatar.types";

/**
 * Avatar Atom
 *
 * Componente para mostrar una imagen circular de perfil.
 * Soporta diferentes tamaños predefinidos.
 *
 * @component
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
    xl: "w-40 h-40",
  };

  return (
    <div
      className={`rounded-full overflow-hidden border-4 border-primary shadow-glow pulse-glow ${sizeClasses[size]} ${className}`}
      style={{
        boxShadow:
          "0 0 30px rgba(255, 255, 255, 0.3), 0 0 50px rgba(255, 255, 255, 0.2)",
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

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
    sm: "w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16",
    md: "w-20 h-20 sm:w-22 sm:h-22 md:w-24 md:h-24",
    lg: "w-28 h-28 sm:w-30 sm:h-30 md:w-32 md:h-32",
    xl: "w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40",
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

import React from "react";
import type { ButtonProps } from "./Button.types";

/**
 * Button Atom
 *
 * Botón reutilizable con variantes de estilo.
 * Átomo base para todos los botones del proyecto.
 *
 * @component
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  type = "button",
  className = "",
  ariaLabel,
}) => {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 transform";

  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    outline:
      "border-2 border-neon-turquoise text-neon-turquoise hover:bg-neon-turquoise/10",
  };

  const sizeClasses = {
    small: "px-3 py-1.5 text-xs sm:px-4 sm:text-sm",
    medium: "px-4 py-2 text-sm sm:px-6 sm:py-2.5 md:text-base",
    large: "px-6 py-2.5 text-base sm:px-8 sm:py-3 md:text-lg",
  };

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed"
    : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabledClasses}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

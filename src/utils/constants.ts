/**
 * CONSTANTS - Constantes de la aplicación
 */

export const APP_NAME = "Portfolio de Diseño de Videojuegos";
export const APP_VERSION = "1.0.0";

// URLs y endpoints
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

// Redes sociales (actualizar con tus datos)
export const SOCIAL_LINKS = {
  linkedin: "",
  github: "",
  twitter: "",
  artstation: "",
  behance: "",
};

// Configuración
export const MAX_PROJECTS_PER_PAGE = 9;
export const ANIMATION_DURATION = 300; // ms

// Breakpoints (sincronizados con Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

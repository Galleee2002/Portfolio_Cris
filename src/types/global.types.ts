/**
 * GLOBAL TYPES - Tipos globales de la aplicación
 */

// Tipos básicos reutilizables
export type ID = string | number;

export type Status = "idle" | "loading" | "success" | "error";

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
}

// Props comunes
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Tipos de estilo
export type Size = "sm" | "md" | "lg" | "xl";
export type Variant = "primary" | "secondary" | "ghost" | "outline";
export type Theme = "light" | "dark";

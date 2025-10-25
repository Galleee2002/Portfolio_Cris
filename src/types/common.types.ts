/**
 * Tipos comunes utilizados en toda la aplicación
 */

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "other";

export const SkillCategories = {
  FRONTEND: "frontend",
  BACKEND: "backend",
  DATABASE: "database",
  TOOLS: "tools",
  OTHER: "other",
} as const;

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  id: number | string;
  platform: string;
  url: string;
  icon?: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
  location?: string;
}

/**
 * PROJECT TYPES - Tipos relacionados con proyectos de videojuegos
 */

import type { ID } from "./global.types";

export interface Project {
  id: ID;
  title: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  category: ProjectCategory;
  role: string;
  tools: string[];
  duration: string;
  year: number;
  featured: boolean;
  externalLink?: string;
  videoUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectCategory =
  | "Level Design"
  | "Game Design"
  | "UI/UX Design"
  | "Narrative Design"
  | "3D Modeling"
  | "Concept Art"
  | "Other";

export interface ProjectFilters {
  category?: ProjectCategory;
  tags?: string[];
  year?: number;
  featured?: boolean;
  search?: string;
}

export type ProjectStatus = "draft" | "published" | "archived";

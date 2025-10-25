import { Gamepad2, Map, FileText, Palette } from "lucide-react";
import type { LucideIcon } from "lucide-react";

/**
 * Estructura de datos para habilidades
 */
export interface SkillData {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Datos de habilidades del portfolio
 */
export const skills: SkillData[] = [
  {
    id: 1,
    icon: Gamepad2,
    title: "Game Design",
    description: "Mecánicas y sistemas",
  },
  {
    id: 2,
    icon: Map,
    title: "Level Design",
    description: "Espacios y flujo",
  },
  {
    id: 3,
    icon: FileText,
    title: "Narrativa",
    description: "Historia y personajes",
  },
  {
    id: 4,
    icon: Palette,
    title: "Herramientas",
    description: "Unity, Unreal",
  },
];

import type { Experience } from "../types/common.types";

/**
 * Datos de ejemplo de experiencias profesionales
 */
export const experiences: Experience[] = [
  {
    id: 1,
    title: "Game Designer",
    company: "Studio ABC",
    period: "2022 - Presente",
    description:
      "Diseño de mecánicas de juego, level design y documentación de sistemas.",
    technologies: ["Unity", "Unreal Engine", "C#"],
    location: "Madrid, España",
  },
  {
    id: 2,
    title: "Level Designer",
    company: "Indie Games",
    period: "2020 - 2022",
    description:
      "Creación de niveles, balance de dificultad y optimización de gameplay.",
    technologies: ["Unity", "Blender", "Git"],
    location: "Remoto",
  },
  {
    id: 3,
    title: "Junior Designer",
    company: "Game Studio XYZ",
    period: "2018 - 2020",
    description:
      "Asistencia en diseño de juegos, testing y documentación de proyectos.",
    technologies: ["Unity", "Photoshop", "Jira"],
    location: "Barcelona, España",
  },
];

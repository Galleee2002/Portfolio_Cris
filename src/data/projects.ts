import type { LucideIcon } from "lucide-react";

/**
 * Estructura de datos para proyectos
 */
export interface ProjectData {
  id: number;
  title: string;
  description: string;
  icon?: LucideIcon;
  imageUrl?: string;
}

/**
 * Datos de ejemplo de proyectos de videojuegos
 */
export const projects: ProjectData[] = [
  {
    id: 1,
    title: "Aventura Épica",
    description:
      "Un mundo abierto lleno de desafíos y exploración. Diseño de niveles para una experiencia inmersiva inolvidable.",
    imageUrl:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Mundo Cyberpunk",
    description:
      "Diseño de entornos futuristas y mecánicas de juego innovadoras para una experiencia cyberpunk única.",
    imageUrl:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=3465&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Reino de Fantasía",
    description:
      "Diseño de niveles para un RPG de fantasía con mecánicas complejas y narrativa envolvente.",
    imageUrl:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Aventura Espacial",
    description:
      "Exploración espacial con diseño de niveles procedurales y mecánicas de supervivencia en el espacio.",
    imageUrl:
      "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?q=80&w=3474&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Horror Psicológico",
    description:
      "Diseño de ambientes terroríficos y mecánicas de tensión para una experiencia de horror inmersiva.",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Plataformas Retro",
    description:
      "Diseño de niveles clásicos con mecánicas modernas para un plataformas de estilo retro renovado.",
    imageUrl:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=3540&auto=format&fit=crop",
  },
];

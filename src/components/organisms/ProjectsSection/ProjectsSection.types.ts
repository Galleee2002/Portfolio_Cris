import type { ProjectData } from "@data/projects";

export interface ProjectsSectionProps {
  title?: string;
  projects: ProjectData[];
  onProjectClick?: (id: number) => void;
  className?: string;
}

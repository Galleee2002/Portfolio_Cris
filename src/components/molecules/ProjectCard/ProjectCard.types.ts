import type { LucideIcon } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  imageUrl?: string;
  onClick?: () => void;
  className?: string;
}

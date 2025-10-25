import type { SkillData } from "@data/skills";

export interface SkillsSectionProps {
  title?: string;
  skills: SkillData[];
  className?: string;
}

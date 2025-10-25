export interface HeroSectionProps {
  title: string;
  subtitle: string;
  avatarSrc?: string;
  avatarAlt?: string;
  onViewProjects?: () => void;
  onContact?: () => void;
  className?: string;
}

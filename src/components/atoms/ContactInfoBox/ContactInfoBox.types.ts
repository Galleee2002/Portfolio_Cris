export interface ContactInfoBoxProps {
  label: string;
  value: string;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  className?: string;
}

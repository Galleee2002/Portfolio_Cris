/**
 * TimelineText Types
 *
 * Props para el átomo TimelineText
 */
export interface TimelineTextProps {
  /**
   * Texto a mostrar
   */
  children: React.ReactNode;
  /**
   * Variante de estilo del texto
   */
  variant?: "title" | "subtitle" | "body" | "caption";
  /**
   * Clases CSS adicionales
   */
  className?: string;
}

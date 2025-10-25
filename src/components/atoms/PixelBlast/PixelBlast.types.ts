export type PixelBlastVariant = "square" | "circle" | "triangle" | "diamond";

export interface PixelBlastProps {
  /**
   * Forma de los píxeles
   * @default 'square'
   */
  variant?: PixelBlastVariant;

  /**
   * Tamaño de los píxeles
   * @default 3
   */
  pixelSize?: number;

  /**
   * Color principal en formato hex
   * @default '#B19EEF'
   */
  color?: string;

  /**
   * Clase CSS adicional
   */
  className?: string;

  /**
   * Estilos inline
   */
  style?: React.CSSProperties;

  /**
   * Habilitar antialiasing
   * @default true
   */
  antialias?: boolean;

  /**
   * Escala del patrón
   * @default 2
   */
  patternScale?: number;

  /**
   * Densidad del patrón
   * @default 1
   */
  patternDensity?: number;

  /**
   * Habilitar efecto líquido
   * @default false
   */
  liquid?: boolean;

  /**
   * Fuerza del efecto líquido
   * @default 0.1
   */
  liquidStrength?: number;

  /**
   * Radio del efecto líquido
   * @default 1
   */
  liquidRadius?: number;

  /**
   * Variación en el tamaño de píxeles
   * @default 0
   */
  pixelSizeJitter?: number;

  /**
   * Habilitar ondas al hacer clic
   * @default true
   */
  enableRipples?: boolean;

  /**
   * Escala de intensidad de las ondas
   * @default 1
   */
  rippleIntensityScale?: number;

  /**
   * Grosor de las ondas
   * @default 0.1
   */
  rippleThickness?: number;

  /**
   * Velocidad de las ondas
   * @default 0.3
   */
  rippleSpeed?: number;

  /**
   * Velocidad de oscilación del líquido
   * @default 4.5
   */
  liquidWobbleSpeed?: number;

  /**
   * Pausar automáticamente cuando no es visible
   * @default true
   */
  autoPauseOffscreen?: boolean;

  /**
   * Velocidad de animación global
   * @default 0.5
   */
  speed?: number;

  /**
   * Fondo transparente
   * @default true
   */
  transparent?: boolean;

  /**
   * Desvanecimiento en los bordes
   * @default 0.5
   */
  edgeFade?: number;

  /**
   * Cantidad de ruido visual
   * @default 0
   */
  noiseAmount?: number;
}

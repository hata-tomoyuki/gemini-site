
export interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
  breathSpeed: number;
  breathPhase: number;
}

export interface IlluminationColor {
  name: string;
  hex: string;
  meaning: string;
}


import { IlluminationColor } from './types';

export const COLORS = {
  midnight: '#020617',
  charcoal: '#171717',
  navy: '#0f172a',
  warmWhite: '#fffdf5',
};

export const ILLUMINATION_PALETTE: IlluminationColor[] = [
  { name: 'Gold', hex: '#d4af37', meaning: '希望の輝き' },
  { name: 'Champagne Pink', hex: '#f1dada', meaning: '慈しみの光' },
  { name: 'Deep Red', hex: '#8b0000', meaning: '情熱の静寂' },
  { name: 'Emerald Green', hex: '#065f46', meaning: '生命の鼓動' },
  { name: 'Sapphire Blue', hex: '#1d4ed8', meaning: '聖夜の知性' },
];

export const BOKEH_COLORS = [
  'rgba(212, 175, 55, 0.4)',  // Gold
  'rgba(241, 218, 218, 0.3)', // Champagne
  'rgba(139, 0, 0, 0.3)',    // Red
  'rgba(6, 95, 70, 0.3)',    // Green
  'rgba(29, 78, 216, 0.3)',  // Blue
];

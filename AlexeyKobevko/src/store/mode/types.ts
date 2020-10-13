export enum Mode {
  day = 'day',
  night = 'night',
}

export interface ModeProps {
  mode: keyof typeof Mode;
}

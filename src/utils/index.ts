export type BreakXS = 'xs'; // 4 columns
export type BreakSM = 'sm' | 'md' | 'lg' | 'xl'; // 12 columns

export type Break = BreakXS | BreakSM;

export const breakPoints: Record<Break, number> = {
  lg: 1024,
  md: 800,
  sm: 600,
  xl: 1288,
  xs: 360,
};

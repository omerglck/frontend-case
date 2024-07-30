export const SCREEN_NAMES = {
  HOME: 'Home',
  WALLET: 'Wallet',
  DETAIL: 'Detail',
} as const;

export type ScreenNames = (typeof SCREEN_NAMES)[keyof typeof SCREEN_NAMES];

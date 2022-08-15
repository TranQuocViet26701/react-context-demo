export interface ThemeInterface {
  syntax: string;
  ui: string;
  bg: string;
}

export interface ThemeContextInterface {
  isLightTheme: boolean;
  dark: ThemeInterface;
  light: ThemeInterface;
  onToggleTheme?: () => void;
}

import { ThemeActionKind } from './../reducers/themeReducer';
export interface ThemeInterface {
  syntax: string;
  ui: string;
  bg: string;
}

export interface ThemeAction {
  type: ThemeActionKind;
  payload: null;
}

export interface ThemeContextType {
  isLightTheme: boolean;
  dark: ThemeInterface;
  light: ThemeInterface;
  dispatch?: React.Dispatch<ThemeAction>;
}

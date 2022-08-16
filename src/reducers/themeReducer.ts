import { ThemeAction, ThemeContextType } from './../@types/theme.d';
export enum ThemeActionKind {
  TOGGLE_THEME = 'TOGGLE_THEME',
}

const themeReducer = (state: ThemeContextType, action: ThemeAction) => {
  switch (action.type) {
    case ThemeActionKind.TOGGLE_THEME:
      return {
        ...state,
        isLightTheme: !state.isLightTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;

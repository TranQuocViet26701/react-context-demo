import { createContext, useReducer } from 'react';
import { ThemeContextType } from '../@types/theme';
import themeReducer from '../reducers/themeReducer';

const initialThemeContext: ThemeContextType = {
  isLightTheme: true,
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  dark: { syntax: '#F5F5F5', ui: 'rgba(0, 0, 0, 0.85)', bg: '#555' },
};

export const ThemeContext =
  createContext<ThemeContextType>(initialThemeContext);

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [state, dispatch] = useReducer(themeReducer, initialThemeContext);

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

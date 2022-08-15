import { createContext, useState } from 'react';
import { ThemeContextInterface } from '../@types/theme';

const defaultThemeContext: ThemeContextInterface = {
  isLightTheme: true,
  light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
  dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
};

export const ThemeContext =
  createContext<ThemeContextInterface>(defaultThemeContext);

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] =
    useState<ThemeContextInterface>(defaultThemeContext);

  const onToggleTheme = () => {
    setTheme((prev) => ({
      ...prev,
      isLightTheme: !prev.isLightTheme,
    }));
  };
  return (
    <ThemeContext.Provider value={{ ...theme, onToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

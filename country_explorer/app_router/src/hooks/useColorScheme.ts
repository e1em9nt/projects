import { useState, useEffect } from 'react';

/**
 * Available color scheme modes
 *
 * @typedef ColorScheme
 */
type ColorScheme = 'light' | 'dark';

/**
 * Custom hook for managing a light/dark color scheme
 *
 * @returns current color scheme mode and toggle between 'light' and 'dark' modes
 */
export function useColorScheme(): {
  colorScheme: ColorScheme;
  handleToggleScheme: () => void;
} {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  // load saved preference or use system preference
  useEffect(() => {
    const savedColorScheme = localStorage.getItem('theme');

    const systemColorScheme: ColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    // only accept 'light' or 'dark' from storage, else from system
    const initialColorScheme: ColorScheme =
      savedColorScheme === 'light' || savedColorScheme === 'dark'
        ? (savedColorScheme as ColorScheme)
        : systemColorScheme;

    setColorScheme(initialColorScheme);
    document.documentElement.dataset.theme = initialColorScheme;
  }, []);

  /**
   * Toggle the color scheme between 'light' and 'dark'
   */
  const handleToggleScheme = () => {
    setColorScheme((prev) => {
      const nextScheme: ColorScheme = prev === 'light' ? 'dark' : 'light';
      setColorScheme(nextScheme);
      document.documentElement.dataset.theme = nextScheme;
      localStorage.setItem('theme', nextScheme);
      return nextScheme;
    });
  };

  return { colorScheme, handleToggleScheme };
}

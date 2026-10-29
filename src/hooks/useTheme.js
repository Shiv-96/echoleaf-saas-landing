/**
 * useTheme
 * Reads the theme already applied by the inline script in index.html,
 * lets the user toggle it and remembers the choice in localStorage.
 * Until the user makes a choice, the theme keeps following the system preference.
 */
import { useCallback, useEffect, useState } from 'react';

/* Must match the key used by the inline script in index.html and 404.html. */
const STORAGE_KEY = 'echoleaf-theme';

/* Storage can throw (private mode, blocked cookies), so every access is guarded. */
function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function storeTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* Ignore: the theme still applies for this visit. */
  }
}

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light',
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /* Follow live system changes only while the user has not picked a theme. */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      if (!readStoredTheme()) setTheme(event.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    storeTheme(nextTheme);
    setTheme(nextTheme);
  }, [theme]);

  return { theme, toggleTheme };
}

/**
 * ThemeToggle
 * Icon button that switches between light and dark themes.
 * The label describes the action, so screen reader users know what will happen.
 */
import { useTheme } from '../../hooks/useTheme.js';
import Icon from './Icon.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className="inline-flex size-10 items-center justify-center rounded-control text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
    >
      <Icon name={isDark ? 'sun' : 'moon'} className="size-5" />
    </button>
  );
}

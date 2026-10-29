/**
 * Header
 * Sticky site header with navigation, theme toggle and the primary call to action.
 * Becomes blurred and solid after the page scrolls. On small screens the links
 * move into a disclosure menu that closes with Escape or after picking a link.
 */
import { useEffect, useRef, useState } from 'react';
import { NAV_LINKS } from '../../data/content.js';
import Icon from '../ui/Icon.jsx';
import Logo from '../ui/Logo.jsx';
import ThemeToggle from '../ui/ThemeToggle.jsx';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Escape closes the mobile menu and returns focus to the toggle button. */
  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        isSolid ? 'border-line bg-canvas/80 backdrop-blur-lg' : 'border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="/login"
              className="rounded-lg px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              Log in
            </a>
            <a href="#signup" className="btn btn-primary">
              Start free trial
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex size-10 items-center justify-center rounded-control text-ink transition-colors hover:bg-surface-muted md:hidden"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} className="size-6" />
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!isMenuOpen} className="border-t border-line md:hidden">
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 font-medium text-ink transition-colors hover:bg-surface-muted"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
            <a href="/login" className="btn btn-secondary">
              Log in
            </a>
            <a href="#signup" onClick={closeMenu} className="btn btn-primary">
              Start free trial
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

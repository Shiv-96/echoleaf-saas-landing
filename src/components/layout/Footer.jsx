/**
 * Footer
 * Brand summary, social links, link columns and the demo disclaimer.
 */
import { FOOTER_COLUMNS, SOCIAL_LINKS } from '../../data/content.js';
import Logo from '../ui/Logo.jsx';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-3 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="sm:col-span-3 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            Echoleaf helps product teams turn customer feedback into clear, confident decisions.
          </p>
          <ul aria-label="Social media" className="mt-6 flex flex-wrap gap-2">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-line px-3 py-1.5 text-sm text-ink-muted transition-colors hover:border-control-off hover:text-ink"
                >
                  {social.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {FOOTER_COLUMNS.map((column) => {
          const headingId = `footer-${column.title.toLowerCase()}`;
          return (
            <nav key={column.title} aria-labelledby={headingId}>
              <h2 id={headingId} className="text-sm font-semibold">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-ink-muted transition-colors hover:text-ink">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          );
        })}
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {CURRENT_YEAR} Echoleaf. All rights reserved.</p>
          <p>Sample website for demonstration purposes. Echoleaf is a fictional product.</p>
        </div>
      </div>
    </footer>
  );
}

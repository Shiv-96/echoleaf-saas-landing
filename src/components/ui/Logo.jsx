/**
 * Logo
 * Original Echoleaf mark (gradient tile with a leaf) plus the wordmark.
 * LogoMark can be used on its own; Logo wraps both in a link.
 */
import { useId } from 'react';

export function LogoMark({ className = 'size-8' }) {
  /* Unique gradient id so several logos on one page never clash. */
  const gradientId = `logo-gradient-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#5B5BF6" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="9" fill={`url(#${gradientId})`} />
      <path d="M9 23c0-8 5.5-13 14-13 0 8.5-5.5 13.5-14 13z" fill="#ffffff" />
      <path d="M9 23l7-7" stroke="#5B5BF6" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function Logo({ href = '#top' }) {
  return (
    <a href={href} className="inline-flex items-center gap-2.5 rounded-lg" aria-label="Echoleaf home">
      <LogoMark />
      <span className="font-display text-lg font-bold tracking-tight text-ink">Echoleaf</span>
    </a>
  );
}

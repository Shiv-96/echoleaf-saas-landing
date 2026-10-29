/**
 * LogoStrip
 * "Trusted by" row with fictional company wordmarks, followed by animated stats.
 */
import { COMPANIES, STATS } from '../../data/content.js';
import Counter from '../ui/Counter.jsx';
import Reveal from '../ui/Reveal.jsx';

/* Simple original glyphs that give each fictional wordmark a bit of character. */
const SHAPES = {
  circle: <circle cx="10" cy="10" r="8" />,
  square: <rect x="3" y="3" width="14" height="14" rx="3" />,
  ring: <circle cx="10" cy="10" r="6.5" fill="none" stroke="currentColor" strokeWidth="3" />,
  triangle: <path d="M10 2.5l8 14.5H2z" />,
  leaf: <path d="M3 17c0-8 5-13 14-14 0 9-5 14-14 14z" />,
  diamond: <path d="M10 1.5l8.5 8.5-8.5 8.5L1.5 10z" />,
};

export default function LogoStrip() {
  return (
    <section aria-labelledby="trusted-title" className="border-y border-line bg-surface/50 py-14">
      <div className="container-page">
        <h2
          id="trusted-title"
          className="text-center font-sans text-sm font-semibold tracking-widest text-ink-muted uppercase"
        >
          Trusted by product teams at
        </h2>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {COMPANIES.map((company) => (
            <li key={company.name} className="flex items-center gap-2 text-ink-muted">
              <svg viewBox="0 0 20 20" className="size-5" fill="currentColor" aria-hidden="true" focusable="false">
                {SHAPES[company.shape]}
              </svg>
              <span className="font-display text-lg font-bold tracking-tight">{company.name}</span>
            </li>
          ))}
        </ul>

        <Reveal>
          <dl className="mt-14 grid gap-10 text-center sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse gap-1">
                <dt className="text-sm text-ink-muted">{stat.label}</dt>
                <dd className="font-display text-4xl font-extrabold tracking-tight tabular-nums">
                  <Counter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

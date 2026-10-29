/**
 * DashboardMockup
 * Product preview for the hero, built entirely with HTML and CSS (no screenshots).
 * Exposed to assistive tech as one image with a text description.
 */
import Icon from '../ui/Icon.jsx';

const SIDEBAR_ITEMS = ['Inbox', 'Themes', 'Roadmap', 'Insights'];

const KPIS = [
  { label: 'New feedback', value: '248', change: '+12%' },
  { label: 'Open themes', value: '12', change: '+3' },
  { label: 'Sentiment', value: '74', change: '+6 pts' },
];

/* `share` sets the bar width as a percentage. */
const TOP_THEMES = [
  { name: 'Bulk export to CSV', votes: 186, share: 92 },
  { name: 'Dark mode for reports', votes: 141, share: 70 },
  { name: 'Faster global search', votes: 97, share: 48 },
  { name: 'Mobile app', votes: 64, share: 32 },
];

export default function DashboardMockup() {
  return (
    <div
      role="img"
      aria-label="Preview of the Echoleaf dashboard showing feedback stats, top themes ranked by votes and an AI grouping notification."
      className="relative isolate"
    >
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-tr from-primary/30 via-primary/10 to-accent/25 blur-2xl" />

      <div className="card overflow-hidden">
        {/* Window bar */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="size-2.5 rounded-full bg-[#ffc24b]" />
          <span className="size-2.5 rounded-full bg-[#3ddc97]" />
          <span className="ml-3 truncate rounded-md bg-surface-muted px-2.5 py-1 text-xs text-ink-muted">
            app.echoleaf.example/themes
          </span>
        </div>

        <div className="grid sm:grid-cols-[8.5rem_1fr]">
          <div className="hidden flex-col gap-1 border-r border-line p-3 sm:flex">
            {SIDEBAR_ITEMS.map((item, index) => (
              <span
                key={item}
                className={`rounded-lg px-2.5 py-2 text-xs font-medium ${
                  index === 1 ? 'bg-primary-soft text-primary-ink' : 'text-ink-muted'
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="space-y-4 p-4 sm:p-5">
            <div className="grid grid-cols-3 gap-3">
              {KPIS.map((kpi) => (
                <div key={kpi.label} className="rounded-xl border border-line bg-canvas p-3">
                  <p className="text-[0.6875rem] text-ink-muted">{kpi.label}</p>
                  <p className="mt-1 font-display text-lg font-bold sm:text-xl">{kpi.value}</p>
                  <p className="text-[0.6875rem] font-medium text-success">{kpi.change}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-line bg-canvas p-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Top themes this week</p>
                <p className="text-xs text-ink-muted">Votes</p>
              </div>
              <ul className="mt-3 space-y-3">
                {TOP_THEMES.map((theme) => (
                  <li key={theme.name}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium">{theme.name}</span>
                      <span className="tabular-nums text-ink-muted">{theme.votes}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 rounded-full bg-surface-muted">
                      <div
                        className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                        style={{ width: `${theme.share}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification card */}
      <div className="absolute -bottom-6 -left-3 hidden max-w-64 items-start gap-3 rounded-xl border border-line bg-surface p-3 shadow-lg sm:flex lg:-left-8">
        <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary-ink">
          <Icon name="sparkles" className="size-4" />
        </span>
        <p className="text-xs leading-relaxed text-ink-muted">
          <span className="font-semibold text-ink">AI grouped 34 requests</span> into “Bulk export to CSV”.
        </p>
      </div>
    </div>
  );
}

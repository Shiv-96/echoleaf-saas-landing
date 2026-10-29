/**
 * FeatureVisuals
 * Small HTML/CSS illustrations shown next to the feature detail blocks.
 * Each one is exposed to assistive tech as a single image with a text description.
 */
import Icon from '../ui/Icon.jsx';

function VisualFrame({ label, children }) {
  return (
    <div role="img" aria-label={label} className="relative isolate">
      <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-linear-to-br from-primary/20 to-accent/15 blur-2xl" />
      <div className="card p-5 sm:p-6">{children}</div>
    </div>
  );
}

const CHANNEL_ITEMS = [
  { source: 'Widget', dot: 'bg-primary', text: 'Can we export reports to CSV?' },
  { source: 'Email', dot: 'bg-accent', text: 'Dark mode for the dashboard, please!' },
  { source: 'Survey', dot: 'bg-success', text: 'Love the new roadmap page.' },
  { source: 'Support', dot: 'bg-[#f59e0b]', text: 'Search feels slow on big projects.' },
];

export function ChannelsVisual({ label }) {
  return (
    <VisualFrame label={label}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Inbox</p>
        <span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-medium text-primary-ink">4 new</span>
      </div>
      <ul className="mt-4 space-y-3">
        {CHANNEL_ITEMS.map((item) => (
          <li key={item.text} className="flex items-start gap-3 rounded-xl border border-line bg-canvas p-3">
            <span className={`mt-1.5 size-2 shrink-0 rounded-full ${item.dot}`} />
            <div className="min-w-0">
              <p className="text-xs font-medium text-ink-muted">{item.source}</p>
              <p className="truncate text-sm">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </VisualFrame>
  );
}

const THEME_GROUPS = [
  { name: 'Bulk export', requests: 86, share: 100 },
  { name: 'Dark mode', requests: 64, share: 74 },
  { name: 'Faster search', requests: 51, share: 59 },
  { name: 'Mobile app', requests: 33, share: 38 },
];

export function ThemesVisual({ label }) {
  return (
    <VisualFrame label={label}>
      <div className="flex items-center gap-2">
        <Icon name="sparkles" className="size-4 text-primary-ink" />
        <p className="text-sm font-semibold">Themes detected</p>
      </div>
      <ul className="mt-5 space-y-4">
        {THEME_GROUPS.map((group) => (
          <li key={group.name}>
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium">{group.name}</span>
              <span className="tabular-nums text-ink-muted">{group.requests} requests</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-surface-muted">
              <div
                className="h-full rounded-full bg-linear-to-r from-primary to-accent"
                style={{ width: `${group.share}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-5 inline-flex rounded-full bg-surface-muted px-3 py-1 text-xs text-ink-muted">
        212 duplicates merged automatically
      </p>
    </VisualFrame>
  );
}

const NOTIFIED_AVATARS = ['AK', 'JS', 'RM'];

export function LoopVisual({ label }) {
  return (
    <VisualFrame label={label}>
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-success/15 px-2.5 py-1 text-xs font-semibold text-success">Shipped</span>
        <p className="text-sm font-semibold">Bulk export to CSV</p>
      </div>
      <p className="mt-3 text-sm text-ink-muted">Export any report or filtered view as a CSV file in one click.</p>

      <div className="mt-5 rounded-xl border border-line bg-canvas p-4">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary-ink">
            <Icon name="bell" className="size-5" />
          </span>
          <div>
            <p className="text-sm font-semibold">Release update sent</p>
            <p className="mt-0.5 text-sm text-ink-muted">142 customers who asked for this were notified.</p>
          </div>
        </div>
        <div className="mt-4 flex -space-x-2">
          {NOTIFIED_AVATARS.map((initials) => (
            <span
              key={initials}
              className="inline-flex size-8 items-center justify-center rounded-full bg-primary-soft text-[0.6875rem] font-semibold text-primary-ink ring-2 ring-canvas"
            >
              {initials}
            </span>
          ))}
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-surface-muted text-[0.6875rem] font-semibold text-ink-muted ring-2 ring-canvas">
            +139
          </span>
        </div>
      </div>
    </VisualFrame>
  );
}

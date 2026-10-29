/**
 * Hero
 * Benefit-led headline, primary and secondary actions, social proof and the product mockup.
 * No reveal animation here, so the largest content paints immediately (good for LCP).
 */
import DashboardMockup from '../mockups/DashboardMockup.jsx';
import Icon from '../ui/Icon.jsx';

const PROOF_AVATARS = ['PR', 'DO', 'ML', 'AK'];

export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-0 -z-10" />

      <div className="container-page grid items-center gap-16 pt-14 pb-20 md:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1 text-sm text-ink-muted">
            <Icon name="sparkles" className="size-4 text-primary-ink" />
            New: AI theme detection is live
          </p>

          <h1 id="hero-title" className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Turn scattered feedback into <span className="text-gradient">product decisions</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-ink-muted">
            Echoleaf gathers feedback from every channel, groups it into clear themes and shows your team what to
            build next. No spreadsheets, no guesswork.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#signup" className="btn btn-primary px-6 py-3.5">
              Start free trial
              <Icon name="arrowRight" className="size-4" />
            </a>
            <a href="#how-it-works" className="btn btn-secondary px-6 py-3.5">
              See how it works
            </a>
          </div>
          <p className="mt-3 text-sm text-ink-muted">No credit card required · 14-day free trial</p>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2" aria-hidden="true">
              {PROOF_AVATARS.map((initials) => (
                <span
                  key={initials}
                  className="inline-flex size-9 items-center justify-center rounded-full bg-primary-soft text-xs font-semibold text-primary-ink ring-2 ring-canvas"
                >
                  {initials}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-[#f5b301]" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Icon key={star} name="star" className="size-4" />
                ))}
              </div>
              <p className="mt-1 text-sm text-ink-muted">
                Rated <span className="font-semibold text-ink">4.9 out of 5</span> by 2,000+ product teams
              </p>
            </div>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}

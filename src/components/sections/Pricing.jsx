/**
 * Pricing
 * Three plans rendered from src/data/pricing.js with a monthly/yearly switch.
 * The switch is a native button with role="switch", so Space and Enter toggle it,
 * and a polite live region announces the change to screen reader users.
 */
import { useState } from 'react';
import { PRICING } from '../../data/pricing.js';
import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: PRICING.currency,
  maximumFractionDigits: 0,
});

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" aria-labelledby="pricing-title" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="pricing-title"
            eyebrow="Pricing"
            title="Simple plans that grow with you"
            description="Start free for 14 days. Upgrade, downgrade or cancel anytime."
          />
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <span aria-hidden="true" className={`text-sm font-medium ${isYearly ? 'text-ink-muted' : 'text-ink'}`}>
            Monthly
          </span>

          <button
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-labelledby="billing-switch-label"
            onClick={() => setIsYearly((value) => !value)}
            className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors motion-reduce:transition-none ${
              isYearly ? 'bg-primary' : 'bg-control-off'
            }`}
          >
            <span
              aria-hidden="true"
              className={`inline-block size-5 rounded-full bg-white shadow transition-transform motion-reduce:transition-none ${
                isYearly ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>

          <span id="billing-switch-label" className={`text-sm font-medium ${isYearly ? 'text-ink' : 'text-ink-muted'}`}>
            Yearly billing
          </span>
          <span className="rounded-full bg-primary-soft px-2.5 py-1 text-xs font-semibold text-primary-ink">
            {PRICING.yearlyDiscountLabel}
          </span>
        </div>

        <p className="sr-only" aria-live="polite">
          {isYearly ? 'Showing yearly prices, billed once a year.' : 'Showing monthly prices.'}
        </p>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {PRICING.plans.map((plan, index) => {
            const price = isYearly ? plan.price.yearly : plan.price.monthly;

            return (
              <Reveal
                as="li"
                key={plan.id}
                delay={index * 80}
                className={`relative flex flex-col rounded-card border bg-surface p-7 ${
                  plan.highlighted ? 'shadow-glow border-primary ring-1 ring-primary' : 'border-line'
                }`}
              >
                {plan.badge && (
                  <p className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-on-primary">
                    {plan.badge}
                  </p>
                )}

                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-ink-muted">{plan.description}</p>

                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold tracking-tight tabular-nums">
                    {currencyFormatter.format(price)}
                  </span>
                  <span className="text-sm text-ink-muted">/ month</span>
                </p>
                <p className="mt-1 text-sm text-ink-muted">
                  {isYearly ? `Billed ${currencyFormatter.format(price * 12)} per year` : 'Billed monthly'}
                </p>

                <a href="#signup" className={`btn mt-6 ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.cta}
                  <span className="sr-only"> with the {plan.name} plan</span>
                </a>

                <ul className="mt-8 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Icon name="check" className="mt-0.5 size-4 shrink-0 text-primary-ink" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </ul>

        <p className="mt-8 text-center text-sm text-ink-muted">
          All plans include a 14-day free trial. Prices in {PRICING.currency}, taxes may apply.
        </p>
      </div>
    </section>
  );
}

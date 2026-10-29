/**
 * HowItWorks
 * Three numbered steps. An ordered list keeps the sequence meaningful for screen readers.
 */
import { STEPS } from '../../data/content.js';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="section-pad border-y border-line bg-surface-muted/50"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="how-title"
            eyebrow="How it works"
            title="From noise to roadmap in three steps"
            description="No long onboarding. Connect your sources today and see your first themes before lunch."
          />
        </Reveal>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 100} className="card p-7">
              <span aria-hidden="true" className="text-gradient font-display text-5xl font-extrabold">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-ink-muted">{step.description}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/**
 * Features
 * A grid of six feature cards, then alternating detail blocks (text + visual).
 */
import { FEATURE_DETAILS, FEATURES } from '../../data/content.js';
import { ChannelsVisual, LoopVisual, ThemesVisual } from '../mockups/FeatureVisuals.jsx';
import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

/* Maps the `visual` key in content.js to its illustration. */
const VISUALS = {
  channels: ChannelsVisual,
  themes: ThemesVisual,
  loop: LoopVisual,
};

export default function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="section-pad">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="features-title"
            eyebrow="Features"
            title="Everything you need to listen at scale"
            description="From the first message to the release note, Echoleaf keeps customer feedback organized, measurable and actionable."
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => (
            <Reveal as="li" key={feature.title} delay={(index % 3) * 80} className="card p-6">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary-soft text-primary-ink">
                <Icon name={feature.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-ink-muted">{feature.description}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-24 space-y-24">
          {FEATURE_DETAILS.map((detail, index) => {
            const Visual = VISUALS[detail.visual];
            const isReversed = index % 2 === 1;

            return (
              <div key={detail.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <Reveal className={isReversed ? 'lg:order-last' : ''}>
                  <p className="eyebrow">{detail.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{detail.title}</h3>
                  <p className="mt-4 text-lg text-ink-muted">{detail.description}</p>
                  <ul className="mt-6 space-y-3">
                    {detail.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary-ink">
                          <Icon name="check" className="size-3.5" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={120}>
                  <Visual label={detail.visualLabel} />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

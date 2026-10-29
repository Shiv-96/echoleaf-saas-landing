/**
 * Testimonials
 * Three quotes from fictional customers, marked up as figure + blockquote + figcaption.
 */
import { TESTIMONIALS } from '../../data/content.js';
import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

/* "Mei Lin Torres" -> "ML" */
function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');
}

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="section-pad pt-0">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="testimonials-title"
            eyebrow="Customer stories"
            title="Teams ship what matters, faster"
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.name} delay={index * 100} className="card p-7">
              <figure className="flex h-full flex-col">
                <Icon name="quote" className="size-8 text-primary-ink opacity-40" />
                <blockquote className="mt-4 flex-1 text-ink">
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary to-accent text-sm font-semibold text-white"
                  >
                    {getInitials(testimonial.name)}
                  </span>
                  <span>
                    <span className="block font-semibold">{testimonial.name}</span>
                    <span className="block text-sm text-ink-muted">
                      {testimonial.role}, {testimonial.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

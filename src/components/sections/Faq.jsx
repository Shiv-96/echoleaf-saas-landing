/**
 * Faq
 * Accessible accordion: each question is a button inside a heading, with
 * aria-expanded and aria-controls pointing to its answer panel. One panel is open at a time.
 */
import { useState } from 'react';
import { FAQS } from '../../data/content.js';
import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="section-pad border-t border-line">
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <SectionHeading
            id="faq-title"
            eyebrow="FAQ"
            title="Questions, answered"
            description="Can't find what you're looking for?"
            align="left"
          />
          <a
            href="mailto:hello@echoleaf.example"
            className="mt-4 inline-flex font-semibold text-primary-ink underline-offset-4 hover:underline"
          >
            Email our team
          </a>
        </Reveal>

        <Reveal className="border-t border-line">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={item.question} className="border-b border-line">
                <h3 className="font-sans">
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-semibold"
                  >
                    {item.question}
                    <Icon
                      name="chevronDown"
                      className={`size-5 shrink-0 text-ink-muted transition-transform motion-reduce:transition-none ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  hidden={!isOpen}
                  className="faq-panel pr-10 pb-5 text-ink-muted"
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

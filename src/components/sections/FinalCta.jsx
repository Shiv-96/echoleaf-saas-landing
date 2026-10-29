/**
 * FinalCta
 * Closing call-to-action band. One action only: start the free trial.
 */
import Icon from '../ui/Icon.jsx';
import Reveal from '../ui/Reveal.jsx';

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="section-pad pt-0">
      <div className="container-page">
        <Reveal className="cta-band relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-20">
          <h2 id="cta-title" className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your customers are already telling you what to build
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Start a 14-day free trial and turn this week's feedback into next month's roadmap.
          </p>
          <a href="#signup" className="btn mt-8 bg-white px-6 py-3.5 text-[#1e1b6b] hover:bg-white/90">
            Start free trial
            <Icon name="arrowRight" className="size-4" />
          </a>
          <p className="mt-4 text-sm text-white/90">No credit card required</p>
        </Reveal>
      </div>
    </section>
  );
}

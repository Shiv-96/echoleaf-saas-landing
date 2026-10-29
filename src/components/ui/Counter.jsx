/**
 * Counter
 * Animated statistic. The animated digits are hidden from screen readers,
 * which read the final value once instead of every intermediate number.
 */
import { useInView } from '../../hooks/useInView.js';
import { useCountUp } from '../../hooks/useCountUp.js';

export default function Counter({ value, decimals = 0, prefix = '', suffix = '' }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const current = useCountUp(value, { start: inView });

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {prefix}
        {formatter.format(current)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {formatter.format(value)}
        {suffix}
      </span>
    </span>
  );
}

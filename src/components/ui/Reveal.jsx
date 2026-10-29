/**
 * Reveal
 * Wraps content that fades and slides in once it scrolls into view.
 * Reduced-motion users see the content instantly (handled in index.css).
 */
import { useInView } from '../../hooks/useInView.js';

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

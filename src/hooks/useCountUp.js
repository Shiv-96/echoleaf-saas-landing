/**
 * useCountUp
 * Animates a number from 0 to `target` once `start` becomes true.
 * Users who prefer reduced motion see the final value immediately.
 */
import { useEffect, useState } from 'react';

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useCountUp(target, { start, duration = 1600 }) {
  const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0));

  useEffect(() => {
    if (!start) return undefined;

    if (prefersReducedMotion()) {
      setValue(target);
      return undefined;
    }

    let frameId;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3; // ease-out cubic: fast start, gentle finish
      setValue(target * eased);
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [start, target, duration]);

  return value;
}

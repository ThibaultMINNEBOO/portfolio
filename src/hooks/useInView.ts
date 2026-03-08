import { useEffect, useRef, useState } from "react";

/**
 * Observe an element and return `visible = true` once it enters the viewport.
 * Uses IntersectionObserver — disconnects after first trigger.
 */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    // If user prefers reduced motion, everything is already shown via CSS
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.rv').forEach((el) => el.classList.add('in'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll<HTMLElement>('.rv');
    elements.forEach((el, i) => {
      if (el.classList.contains('sc')) {
        el.style.transitionDelay = `${(i % 4) * 70}ms`;
      }
      io.observe(el);
    });

    return () => {
      io.disconnect();
    };
  }, []);
}

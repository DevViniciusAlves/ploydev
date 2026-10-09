import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function observeRevealElements(root = document) {
  const elements = root.querySelectorAll('[data-reveal], .word-reveal, .blur-reveal');

  if (!('IntersectionObserver' in window)) {
    elements.forEach((element) => {
      element.classList.add('is-visible');
    });

    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px',
    }
  );

  elements.forEach((element) => observer.observe(element));

  return () => observer.disconnect();
}

export function initParallax() {
  let rafId = 0;

  const update = () => {
    const elements = document.querySelectorAll('[data-parallax]');

    elements.forEach((element) => {
      const speed = Number(element.dataset.parallax || 0.06);
      const rect = element.getBoundingClientRect();

      const offset = rect.top + rect.height / 2 - window.innerHeight / 2;

      element.style.setProperty('--parallax-y', `${offset * speed * -1}px`);
    });
  };

  const onScroll = () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(update);
  };

  update();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

export function initScrollProgress() {
  let rafId = 0;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;
    document.documentElement.style.setProperty('--page-progress', String(progress));
  };

  const onScroll = () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(update);
  };

  update();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);

  return () => {
    cancelAnimationFrame(rafId);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  };
}

export function initHeaderScrolled() {
  const onScroll = () => {
    const header = document.querySelector('.site-header');
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 60);
  };

  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  return () => window.removeEventListener('scroll', onScroll);
}

export default function useScrollEffects() {
  const location = useLocation();

  useEffect(() => {
    const cleanupReveal = observeRevealElements();
    const cleanupParallax = initParallax();
    const cleanupProgress = initScrollProgress();
    const cleanupHeader = initHeaderScrolled();

    return () => {
      cleanupReveal();
      cleanupParallax();
      cleanupProgress();
      cleanupHeader();
    };
  }, [location.pathname]);
}

import { useNavigate } from 'react-router-dom';

let isTransitioning = false;

export default function useTransitionNavigate() {
  const navigate = useNavigate();

  return (to) => {
    if (typeof window === 'undefined') {
      navigate(to);
      return;
    }

    if (isTransitioning) return;

    // Clicking the current route: no overlay, no timers.
    if (window.location.pathname === to) return;

    isTransitioning = true;

    const release = () => {
      document.body.classList.remove('route-leaving');
      document.body.classList.remove('route-entering');
      isTransitioning = false;
    };

    document.body.classList.add('route-leaving');

    window.setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);

      document.body.classList.remove('route-leaving');
      document.body.classList.add('route-entering');

      window.setTimeout(() => {
        release();
      }, 700);
    }, 620);
  };
}

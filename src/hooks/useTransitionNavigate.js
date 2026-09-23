import { useNavigate } from 'react-router-dom';

export default function useTransitionNavigate() {
  const navigate = useNavigate();

  return (to) => {
    if (typeof window === 'undefined') {
      navigate(to);
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      navigate(to);
      window.scrollTo(0, 0);
      return;
    }

    document.body.classList.add('route-leaving');

    window.setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);

      document.body.classList.remove('route-leaving');
      document.body.classList.add('route-entering');

      window.setTimeout(() => {
        document.body.classList.remove('route-entering');
      }, 700);
    }, 620);
  };
}

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

    isTransitioning = true;

    document.body.classList.add('route-leaving');

    window.setTimeout(() => {
      navigate(to);
      window.scrollTo(0, 0);

      document.body.classList.remove('route-leaving');
      document.body.classList.add('route-entering');

      window.setTimeout(() => {
        document.body.classList.remove('route-entering');
        isTransitioning = false;
      }, 700);
    }, 620);
  };
}

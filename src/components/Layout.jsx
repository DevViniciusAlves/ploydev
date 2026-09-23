import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import useScrollEffects from '../hooks/useScrollEffects.js';

export default function Layout() {
  useScrollEffects();

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="route-transition" aria-hidden="true" />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

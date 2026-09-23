import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import ServiceSites from './pages/ServiceSites.jsx';
import ServiceLandingPages from './pages/ServiceLandingPages.jsx';
import Projects from './pages/Projects.jsx';
import CaseGendaz from './pages/CaseGendaz.jsx';
import CaseBakuri from './pages/CaseBakuri.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/criacao-de-sites" element={<ServiceSites />} />
        <Route path="/landing-pages" element={<ServiceLandingPages />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/projetos/gendaz" element={<CaseGendaz />} />
        <Route path="/projetos/bakuri" element={<CaseBakuri />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

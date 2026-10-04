import PortalCntxt from '../../../../MyContexts/PortalContext';
import Footer from '../../../../Shared/Footer';
import Nav from '../../../../Shared/Nav';
import Hero from './Hero';
import Main from './Main';
import './StudyDir.css';

export default function StudyDir() {
  return (
    <PortalCntxt>
      <Nav />
      <Hero />
      <Main />
      <Footer />
    </PortalCntxt>
  );
};
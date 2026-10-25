import PortalCntxt from '../../../../MyContexts/PortalContext';
import Redirect from '../../../../Redirect';
import Footer from '../../../../Shared/Footer';
import Nav from '../../../../Shared/Nav';
import Hero from './Hero';
import Main from './Main';
import './StudyDir.css';

export default function StudyDir() {
  return (
    <Redirect pathName={'study-directory'}>
      <PortalCntxt>
        <Nav currentPage={'db'}/>
        <Hero />
        <Main />
        <Footer />
      </PortalCntxt>
    </Redirect>
  );
};
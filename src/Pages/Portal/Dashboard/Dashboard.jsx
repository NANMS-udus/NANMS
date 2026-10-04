import PortalCntxt from '../../../MyContexts/PortalContext';
import Redirect from '../../../Redirect';
import Footer from '../../../Shared/Footer';
import Nav from '../../../Shared/Nav';
import './Dashboard.css';
import DbMain from './DbMain';

export default function Dashboard() {
  return (
    <Redirect>
      <PortalCntxt>
        <Nav currentPage={'db'} />
        <DbMain />
        <Footer />
      </PortalCntxt>
    </Redirect>
  );
};
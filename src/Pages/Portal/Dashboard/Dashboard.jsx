import Redirect from '../../../Redirect';
import Footer from '../../../Shared/Footer';
import Nav from '../../../Shared/Nav';
import './Dashboard.css';
import DbMain from './DbMain';

export default function Dashboard() {
  return (
    <Redirect>
      <Nav currentPage={'db'} />
      <DbMain />
      <Footer />
    </Redirect>
  );
};
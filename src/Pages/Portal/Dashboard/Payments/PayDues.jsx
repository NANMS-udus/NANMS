import Redirect from '../../../../Redirect';
import Footer from '../../../../Shared/Footer';
import Nav from '../../../../Shared/Nav';
import Main from './Main';
import './PayDues.css';

export default function Payments() {
  return (
    <Redirect>
      <Nav />
      <Main />
      <Footer />
    </Redirect>
  );
};
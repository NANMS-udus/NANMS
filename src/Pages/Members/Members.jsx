import Footer from '../../Shared/Footer';
import Nav from '../../Shared/Nav';
import Main from './Main';
import './Members.css';

export default function Members() {
  return (
   <>
   <Nav currentPage={'members'} />
   <Main />
   <Footer />
   </>
  );
};
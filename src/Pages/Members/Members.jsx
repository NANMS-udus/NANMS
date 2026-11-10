import AiDirect from '../../AiDirect';
import Footer from '../../Shared/Footer';
import Nav from '../../Shared/Nav';
import Main from './Main';
import './Members.css';

export default function Members() {
  return (
    <AiDirect>
      <Nav currentPage={'members'} />
      <Main />
      <Footer />
    </AiDirect>
  );
};
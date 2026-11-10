import AiDirect from '../../AiDirect';
import Footer from '../../Shared/Footer';
import Nav from '../../Shared/Nav';
import './Executives.css';
import Main from './Main';

export default function Executives() {
  return (
    <AiDirect>
      <Nav currentPage={'exec'} />
      <Main />
      <Footer />
    </AiDirect>
  );
};
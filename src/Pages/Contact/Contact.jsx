import AiDirect from '../../AiDirect';
import Footer from '../../Shared/Footer';
import Nav from '../../Shared/Nav';
import './Contact.css';
import Main from './Main';

export default function Contact() {
  return (
    <AiDirect>
      <Nav currentPage={'contact'} />
      <Main />
      <Footer />
    </AiDirect>
  );
};
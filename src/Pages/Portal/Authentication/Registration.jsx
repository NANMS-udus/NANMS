import Footer from '../../../Shared/Footer';
import Nav from '../../../Shared/Nav';
import './Registration.css';
import RegMain from './RegMain';

export default function Registration() {
  return (
   <>
   <Nav currentPage={'reg'}/>
   <RegMain />
   <Footer />
   </>
  );
};
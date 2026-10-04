import AnounceGrid from './AnounceGrid';
import Header from './Header';
import './Main.css';

export default function Main({setShowAnnDet}) {
 return (
  <main class="ann-main-content container">
   <Header />
   <AnounceGrid />
  </main>
 );
};
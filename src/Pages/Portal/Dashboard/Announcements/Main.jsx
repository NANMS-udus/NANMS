import { useContext } from 'react';
import AnounceGrid from './AnounceGrid';
import Header from './Header';
import './Main.css';
import { PortalContext } from '../../../../MyContexts/PortalContext';

export default function Main({setShowAnnDet}) {
 const {intNews} = useContext(PortalContext)
 return (
  <main class="ann-main-content container">
   <Header intNews={intNews}/>
   <AnounceGrid />
  </main>
 );
};
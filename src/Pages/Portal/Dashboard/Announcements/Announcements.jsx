import { useState } from 'react';
import Footer from '../../../../Shared/Footer';
import Nav from '../../../../Shared/Nav';
import './Announcements.css';
import Main from './Main';
import DetMain from './DetMain';
import PortalCntxt from '../../../../MyContexts/PortalContext';

export default function Announcements() {
  const [showAnndet, setShowAnnDet] = useState({show: false, details: {}})
  return (
    <PortalCntxt>
      <Nav />
      {
        !showAnndet.show
        ? <Main setShowAnnDet={setShowAnnDet} />
        : <DetMain details={showAnndet.details} setShowAnnDet={setShowAnnDet} />
      }
      <Footer />
    </PortalCntxt>
  );
};
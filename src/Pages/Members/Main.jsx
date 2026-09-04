import { useState } from 'react';
import './Main.css';
import MembersPrev from './MembersPrev';
import MemberDetails from './MemberDetails';

export default function Main() {

 const [showDetails, setShowDetails] = useState({ show: false, details: {} })

 return (
  <main
   className={`container ${!showDetails.show ? 'members-main-content' : ''}`}
  >
   {
    showDetails.show ?
     <MemberDetails
      details={showDetails.details}
      setShowDetails={setShowDetails}
     />
     : <MembersPrev
      setShowDetails={setShowDetails}
     />
   }

  </main>
 );
};
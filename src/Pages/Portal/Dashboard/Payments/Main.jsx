import { useContext } from 'react';
import './Main.css';
import PymntCard from './PymntCard';
import PymntHistTable from './PymntHistTable';
import { Link } from 'react-router';
import arrowBack from '../../../../assets/icons/left-arrow.svg'
import { PortalContext } from '../../../../MyContexts/PortalContext';

export default function Main() {

 const { pymntDet, verifyPymnt } = useContext(PortalContext)

 console.log(pymntDet);


 const { paid, notPaid, payment_history: pymntHist } = pymntDet || {}

 return (
  <main class="pymnt-main-content">
   <Link to={'/members/dashboard'}>
    <img
     style={{
      width: '34px',
      border: '2px solid var(--primary)',
      padding: '6px',
      borderRadius: '50%'
     }}
     src={arrowBack}
     alt=""
    />
   </Link>
   <header class="pymnt-page-header">
    <h1 class="font-headline text-headline-lg">Financial Dues</h1>
    <p class="text-body-md">Manage your association due payments and view history.</p>
   </header>
   <div class="grid-layout">
    <PymntCard notPaid={notPaid} type={'bal-cont'} />
    <PymntCard notPaid={notPaid} type={'pymnt-brkdwn'} />
    <PymntCard notPaid={notPaid} type={'acc-det'} />
    <PymntCard verifyPymnt={verifyPymnt} notPaid={notPaid} type={'pymnt-vrfctn'} />
   </div>
   <PymntHistTable paid={paid} pymntHist={pymntHist} />
  </main>
 );
};
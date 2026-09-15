import { useContext } from 'react';
import './Main.css';
import PymntCard from './PymntCard';
import PymntHistTable from './PymntHistTable';
import { GenContext } from '../../../../MyContexts/GenContexts';

export default function Main() {

 const {pymntDet, verifyPymnt} = useContext(GenContext)

 console.log(pymntDet);
 

const { paid, notPaid, payment_history: pymntHist} = pymntDet || {}

 return (
  <main class="pymnt-main-content">
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
   <PymntHistTable paid={paid} pymntHist={pymntHist}/>
  </main>
 );
};
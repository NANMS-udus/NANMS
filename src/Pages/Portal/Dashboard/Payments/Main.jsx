import './Main.css';
import PymntCard from './PymntCard';
import PymntHistTable from './PymntHistTable';

export default function Main() {
 return (
  <main class="pymnt-main-content">
   <header class="pymnt-page-header">
    <h1 class="font-headline text-headline-lg">Financial Dues</h1>
    <p class="text-body-md">Manage your association payments and view history.</p>
   </header>
   <div class="grid-layout">
    <PymntCard type={'bal-cont'} />
    <PymntCard type={'pymnt-brkdwn'} />
    <PymntCard type={'acc-det'} />
    <PymntCard type={'pymnt-vrfctn'} />
   </div>
   <PymntHistTable />
  </main>
 );
};
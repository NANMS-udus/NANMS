import AlumniGrid from './AlumniGrid';
import './Main.css';
import PatronsGrid from './PatronsGrid';
import PresidentsGrid from './PresidentsGrid';

export default function Main() {
 
 return (
  <main class="main-wrapper">
   <PatronsGrid />
   <PresidentsGrid />
   <AlumniGrid />
   <div class="connect-banner">
    <h2>Are You a NANMS Graduate?</h2>
    <p>Stay connected with your alma mater, mentor aspiring medical practitioners, and contribute to our annual
     scholarship and medical outreach funds.</p>
    <div class="connect-actions">
     <a class="btn-cta-white" href="#">Join Alumni Directory</a>
     <a class="btn-cta-outline" href="#">Sponsor a Medical Student</a>
    </div>
   </div>
  </main>
 );
};
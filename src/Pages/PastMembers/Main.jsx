import AlumniGrid from './AlumniGrid';
import './Main.css';
import PatronsGrid from './PatronsGrid';
import PresidentsGrid from './PresidentsGrid';

export default function Main() {

 function arrayByPage(target, pageLength) {
  const result = target.reduce((acc, itm) => {
   if (!acc.length || acc[acc.length - 1].length >= pageLength) {
    acc.push([])
   }

   acc[acc.length - 1].push(itm)

   return acc
  }, [])

  return result
 }

 return (
  <main class="main-wrapper">
   <PatronsGrid arrayByPage={arrayByPage} />
   <PresidentsGrid arrayByPage={arrayByPage} />
   <AlumniGrid arrayByPage={arrayByPage} />
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
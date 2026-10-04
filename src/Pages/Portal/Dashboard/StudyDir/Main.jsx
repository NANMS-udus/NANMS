import Pagination from '../../../../Shared/Pagination';
import './Main.css';
import StudyGrid from './StudyGrid';
import StudyGroups from './StudyGroups';
import UtilsSection from './UtilsSection';

export default function Main() {
 return (
  <main class="hub-content">
   <div class="container">
    <UtilsSection />
    <div class="section-header-block">
     <div>
      <h2 class="section-header-title">
       <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path
         d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
       </svg>
       Academic Materials & Clinical Repertoire
      </h2>
      <p class="section-subtitle">Showing verified student handouts, departmental lecture summaries, and board
       review slides.</p>
     </div>
     <div class="section-actions">
      <button class="btn-outline-sm"
       onclick="alert('Submitting a resource requires executive verification.')">Upload Contribution</button>
     </div>
    </div>
    <StudyGrid />
    <div class="pagination-container">
        <div class="pagination-info">
          Showing <strong>1–6</strong> of <strong>36</strong> curated medical materials
        </div>
        <Pagination />
        {/* <StudyGroups /> */}
      </div>
   </div>
  </main>
 );
};
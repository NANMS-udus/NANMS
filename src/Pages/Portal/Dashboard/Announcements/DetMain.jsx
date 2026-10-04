import DetArticle from './DetArticle';
import DetSidebar from './DetSidebar';
import './DetMain.css';

export default function DetMain({setShowAnnDet, details}) {
  return (
    <main class="ann-container ann-grid-layout">
      <div class="back-link-container">
        <a class="back-link font-label-md" href="#">
          <span class="material-symbols-outlined">arrow_back</span>
          Back to All Announcements
        </a>
      </div>
      <DetArticle />
      <DetSidebar />
    </main>
  );
};
import './DetSidebar.css';

export default function DetSidebar() {
 return (
  <aside class="sidebar">
   <div class="sidebar-widget sticky">
    <h3 class="widget-title font-headline-md">Recent Updates</h3>
    <div class="update-list">
     <a class="update-item" href="#">
      <div class="update-date font-label-md">October 18, 2024</div>
      <h4 class="update-title font-body-md">Annual Medical Symposium Registration Opens</h4>
     </a>
     <div class="divider"></div>
     <a class="update-item" href="#">
      <div class="update-date font-label-md">October 12, 2024</div>
      <h4 class="update-title font-body-md">Scholarship Opportunities for Final Year Students</h4>
     </a>
     <div class="divider"></div>
     <a class="update-item" href="#">
      <div class="update-date font-label-md">October 05, 2024</div>
      <h4 class="update-title font-body-md">Campus Clinic Operating Hours Extended</h4>
     </a>
    </div>
    <a class="view-all-link font-label-md" href="#">View All Announcements →</a>
   </div>
   <div class="contact-widget">
    <h3 class="contact-title font-headline-md">Need Help?</h3>
    <p class="contact-text font-body-md">For urgent inquiries regarding the new rotation schedule, contact
     the academic office.</p>
    <button class="btn-secondary font-label-md">
     <span class="material-symbols-outlined">mail</span> Contact Office
    </button>
   </div>
  </aside>
 );
};
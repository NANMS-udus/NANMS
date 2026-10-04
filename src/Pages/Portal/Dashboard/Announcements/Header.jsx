import './Header.css';

export default function Header() {
 return (
  <header class="ann-page-header">
   <h1 class="ann-page-title">Announcements &amp; Notices</h1>
   <p class="ann-page-description">Stay updated with the latest academic schedules, welfare initiatives, and
    official communications from the National Association of Niger State Medical Students.</p>
   <div class="filter-bar">
    <div class="search-container">
     <span class="material-symbols-outlined search-icon">search</span>
     <input class="ann-search-input" placeholder="Search announcements..." type="text" />
    </div>
    <div class="category-filters">
     <select name="" id=""></select>
    </div>
   </div>
  </header>
 );
};
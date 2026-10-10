import dayjs from 'dayjs';
import './StudyCard.css';

export default function StudyCard({details}) {
 return (
  <article class="resource-card">
   <div>
    <div class="card-top">
     <span class="category-tag tag-clinical">Clinical Medicine</span>
     <span class="format-badge">
      <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
       <path
        d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
      </svg>
      {details.file_type} ({details.file_size})
     </span>
    </div>
    <h3 class="card-title">{details.title}</h3>
    <p class="card-desc">{details.desc}</p>

    <div class="card-meta-list">
     <div class="meta-row">
      <span class="meta-key">Department:</span>
      <span class="meta-val">{details.course}</span>
     </div>
     <div class="meta-row">
      <span class="meta-key">Target Year:</span>
      <span class="meta-val">{details.level}</span>
     </div>
     <div class="meta-row">
      <span class="meta-key">Updated:</span>
      <span class="meta-val">{dayjs(details.created_at).format('MMMM YYYY')}</span>
     </div>
    </div>
   </div>

   <div class="card-footer">
    <div class="contributor-box">
     <div class="contributor-avatar">{details.author_initials}</div>
     <span class="contributor-name">{details.author}</span>
    </div>
    <button class="btn-download-trigger">
     View Details →
    </button>
   </div>
  </article>
 );
};
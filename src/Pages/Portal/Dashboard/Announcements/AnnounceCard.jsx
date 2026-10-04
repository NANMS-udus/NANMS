import dayjs from 'dayjs';
import './AnnounceCard.css';
import forward from '../../../../assets/icons/arrow-forward.svg'

export default function AnnounceCard({details}) {

 return (
  <article class="ann-card">
   <div class="ann-card-header">
    <span class="ann-tag tag-academic">
     <span class="material-symbols-outlined">menu_book</span> Academic
    </span>
    <time class="card-date">{dayjs(details.created_at).format('MMM D, YYYY')}</time>
   </div>
   <h2 class="ann-card-title">{details.title}</h2>
   <p class="ann-card-excerpt">{details.body}</p>
   <div class="ann-card-footer">
    Read Full Notice <img style={{width: '20px'}} src={forward} alt="" />
   </div>
  </article>
 );
};
import dayjs from 'dayjs';
import './NewsCard.css';

export default function NewsCard({details}) {

 const {
  category,
  created_at,
  cover_pic_url,
  headline,
  body
 } = details

 return (
  <article class="news-card">
   <img alt="Renovation"
    src={cover_pic_url} />
   <div class="news-card-content">
    <div class="news-card-meta">
     <span class={`news-badge badge-${category[0].toLowerCase()}`}>{category[0]}</span>
     <span class="date">{dayjs(created_at).format('MMM D YYYY')}</span>
    </div>
    <h2>{headline}</h2>
    <p>{body}</p>
    <a class="read-more" href="#">Read More →</a>
   </div>
  </article>
 );
};
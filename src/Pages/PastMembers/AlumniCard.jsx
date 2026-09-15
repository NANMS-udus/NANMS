import './AlumniCard.css';

export default function AlumniCard({details}) {
 return (
  <article class="alumnus-card">
   <div class="alumnus-top">
    <img alt={details.name} class="alumnus-thumb"
     src={details.cover_pic_url} />
    <div class="alumnus-meta">
     <h4>{details.title} {details.name}</h4>
     <div class="alumnus-year">Class of {details.class}</div>
    </div>
   </div>
   <div class="alumnus-specialty">{details.current_title} | {details.current_practice_location}</div>
   <p class="alumnus-desc">{details.desc}</p>
  </article>
 );
};
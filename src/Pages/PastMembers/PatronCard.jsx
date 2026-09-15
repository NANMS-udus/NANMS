import './PatronCard.css';

export default function PatronCard({details}) {
 return (
  <article class="patron-card">
   <div class="patron-badge">{details.badge}</div>
   <div class="patron-header">
    <img alt="Prof. Mohammed K. Bello" class="patron-avatar"
     src={details.cover_pic_url} />
    <div class="patron-info">
     <h3>{details.title} {details.name}</h3>
     <div class="patron-role">{details.current_designation}</div>
     <div class="patron-institution">{details.brief_description}</div>
    </div>
   </div>
   <p class="patron-bio">{details.bio}</p>
   <div class="patron-quote">
    {details.quote}
   </div>
  </article>
 );
};
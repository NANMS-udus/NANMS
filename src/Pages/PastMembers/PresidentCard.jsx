import './PresidentCard.css';

export default function PresidentCard({details}) {
 return (
  <article class="president-card"
   data-keywords="dr. umar farooq sani resident physician internal medicine ahmadu bello university teaching hospital abuth zaria nigeria cardiology critical care cardiovascular"
   data-tenure={details.tenure}>
   <span class="tenure-pill">{details.tenure} Administration</span>
   <img alt={details.name} class="president-photo"
    src={details.cover_pic_url} />
   <h3 class="president-name">{details.current_title} {details.name}</h3>
   <div class="current-status">Now {details.current_practice_level}</div>
   <div class="key-legacy"><span class="legacy-label" style={{color: '#006837', letterSpacing: '0.05em'}}>Current
    Practice Status</span>
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.35rem', marginTop: '0.4rem', fontSize: '0.815rem'}}>
     <div><strong style={{color: '#191c1e'}}>Hospital / Location:</strong> {details.current_practice_location}</div>
     <div><strong style={{color: '#191c1e'}}>Specialty:</strong> {details.current_specilty}</div>
     <div><strong style={{color: '#191c1e'}}>Focus:</strong> {details.focus}</div>
    </div>
   </div>
  </article>
 );
};
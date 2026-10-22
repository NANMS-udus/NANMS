import './MainDetails.css';
import checkCircle from '../../assets/icons/check-circle.svg';
import checked from '../../assets/icons/check-circle.svg';
import clock from '../../assets/icons/clock.svg';
import threeDots from '../../assets/icons/three-dots.svg';

export default function MainDetails({ details }) {

 const {
  bio,
  research_interests,
  recent_postings
 } = details || {}

 console.log(details);


 return (
  <section className="content-area">
   <div className="members-card bio-section">
    <h2 className="headline-lg bio-title">Professional Biography</h2>
    <p className="body-lg bio-text">
     {bio}
    </p>
   </div>
   <div className="rotations-grid">
    <div className="members-card">
     <h3 className="headline-md card-header">
      <span className="material-symbols-outlined">local_hospital</span>
      Recent Rotations
     </h3>
     <ul className="rotation-list">
      {
       recent_postings.map((p) => {
        return (
         <li key={crypto.randomUUID()} className="rotation-item">
          <img
           src={
            p.postingStatus === 'Completed'
             ? checked
             : p.postingStatus === 'Ongoing'
              ? threeDots
              : clock
           }
           style={{ width: '24px' }}
          />
          <div style={{width: '40%'}}>
           <span className="rotation-title">{p.postingName}</span>
           <span className="rotation-subtitle">{p.postingDepartments} {`(${p.postingDuration})`}</span>
          </div>
         </li>
        )
       })
      }
     </ul>
    </div>
    <div className="details-card">
     <h3 className="headline-md card-header">
      <span className="material-symbols-outlined">science</span>
      Research Interests
     </h3>
     <div className="tag-list">
      {
       research_interests.length
        ? research_interests.map((res) => {
         return <span key={crypto.randomUUID()} className="tag label-md">{res}</span>
        })
        : ''
      }
     </div>
    </div>
   </div>
  </section>
 );
};
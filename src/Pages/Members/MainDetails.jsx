import './MainDetails.css';
import checkCircle from '../../assets/icons/check-circle.svg';

export default function MainDetails({details}) {

 const {
  bio,
  research_interests
 } = details || {}

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
      <li className="rotation-item">
      <img src={checkCircle} style={{width: '24px'}}/>
       <div>
        <span className="rotation-title">Internal Medicine</span>
        <span className="rotation-subtitle">ABU Teaching Hospital (12 Weeks)</span>
       </div>
      </li>
      <li className="rotation-item">
      <img src={checkCircle} style={{width: '24px'}}/>
       <div>
        <span className="rotation-title">Surgery</span>
        <span className="rotation-subtitle">ABU Teaching Hospital (12 Weeks)</span>
       </div>
      </li>
      <li className="rotation-item">
       <span className="material-symbols-outlined rotation-icon-pending">pending</span>
       <div>
        <span className="rotation-title">Pediatrics (Current)</span>
        <span className="rotation-subtitle">ABU Teaching Hospital (8 Weeks)</span>
       </div>
      </li>
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
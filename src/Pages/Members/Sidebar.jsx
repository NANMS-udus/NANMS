import dayjs from 'dayjs';
import './Sidebar.css';
import mail from '../../assets/icons/email-white.svg';
import forum from '../../assets/icons/forum.svg';
import link from '../../assets/icons/link.svg';
import school from '../../assets/icons/graduate-cap.svg';


export default function Sidebar({details}) {

 const {fullname, LGA, level, avatar_url, date_admitted} = details

 return (
  <aside className="details-sidebar">
   <div className="details-card card-profile">
    <div className="profile-img-wrapper">
     <img alt="Profile Photo"
      src={avatar_url} />
    </div>
    <h1 className="headline-lg profile-name">{fullname}</h1>
    <p className="profile-desc">{level} level Medical Student<br />Usmanu dan-fodiyo University</p>
    <div className="profile-actions">
     <button className="btn-primary btn-primary-large label-md">
      <img src={mail} style={{width: '24px'}}/>
      Send Message
     </button>
    </div>
    <div className="social-links">
     <a className="social-link" href="#">
      <img src={link} style={{width: '24px'}}/>
     </a>
     <a className="social-link" href="#">
     <img src={forum} style={{width: '24px'}}/>
     </a>
    </div>
   </div>
   <div className="details-card">
    <h3 className="headline-md card-header card-header-border">
    <img src={school} style={{width: '24px'}}/>
     Academic Profile
    </h3>
    <ul className="info-list">
     <li>
      <div className="label-md info-label">LGA</div>
      <div className="info-value">{LGA}</div>
     </li>
     <li>
      <div className="label-md info-label">Level</div>
      <div className="info-value">{level}</div>
     </li>
     <li>
      <div className="label-md info-label">Admission Year</div>
      <div className="info-value">{dayjs(date_admitted).format('YYYY')}</div>
     </li>
    </ul>
   </div>
  </aside>
 );
};
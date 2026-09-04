import './MemberCard.css';
import firstAid from '../../assets/icons/first-aid.svg';
import lga from '../../assets/icons/local-government.svg';

export default function MemberCard({ details, setShowDetails }) {

  const {
    LGA,
    fullname,
    avatar_url,
    level,
  } = details || {}

  return (
    <div className="member-card" onClick={() => {
      setShowDetails({ show: true, details })
    }}>
      <div className="card-image-wrapper">
        <div className="card-image-container">
          <img className="card-image"
            data-alt={fullname}
            src={avatar_url} />
        </div>
      </div>
      <div className="card-content">
        <h3 className="card-title headline-md">{fullname}</h3>
        <p className="card-detail text-secondary label-md">
          <img src={lga} style={{ width: '20px', marginRight: '12px' }} alt="" />
          {LGA}
        </p>
        <p className="card-detail label-md">
          <img src={firstAid} style={{ width: '20px', marginRight: '12px' }} alt="" />
          {level}
        </p>
        <button className="card-btn label-md">View Profile</button>
      </div>
    </div>
  );
};
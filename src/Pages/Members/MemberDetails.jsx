import MainDetails from './MainDetails';
import './MemberDetails.css';
import Sidebar from './Sidebar';
import back from '../../assets/icons/left-arrow.svg';

export default function MemberDetails({ details, setShowDetails }) {
 return (
  <>
   <img
    src={back}
    style={{ 
     position: 'fixed', 
     left: '8px', 
     top: '70px', 
     width: '24px', 
     outline: '2px solid var(--primary)',
     padding: '4px',
     borderRadius: 'var(--stack-sm)'
    }}
    onClick={() => {
     setShowDetails({show: false, details: {}})
    }}
   />
   <div className="details-main-grid">
    <Sidebar details={details} />
    <MainDetails details={details}/>
   </div>
  </>
 );
};
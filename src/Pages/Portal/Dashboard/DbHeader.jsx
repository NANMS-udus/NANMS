import dayjs from 'dayjs';
import './DbHeader.css';
import badge from '../../../assets/icons/badge.svg'


export default function DbHeader({myDetails}) {

  const {
    NANMS_uid,
    avatar_url,
    fullname,
   } = myDetails || {}
  
 return (
  <section class="dashboard-header">
   <div class="profile-info">
    <div class="profile-img-container">
     <img alt="Profile Picture"
      src={avatar_url} />
    </div>
    <div>
     <h1 class="font-headline-lg text-primary">Welcome back, {fullname?.split(' ')[0]}</h1>
     <p /* style={{fontSize: '14px'}} */ class="font-body-md text-on-surface-variant badge-text">
      <img style={{width: '20px'}} src={badge} alt="" />
      NANMS ID: {NANMS_uid}
     </p>
    </div>
   </div>
   <div class="term-info">
    <span class="font-label-md text-on-surface-variant uppercase tracking-wider text-xs">Current Session</span>
    <span class="font-headline-md text-primary">{dayjs().format('YYYY')}/{dayjs().add(1, 'year').format('YYYY')}</span>
   </div>
  </section>
 );
};
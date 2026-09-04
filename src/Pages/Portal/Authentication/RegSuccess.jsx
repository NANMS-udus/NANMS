import Footer from '../../../Shared/Footer';
import './RegSuccess.css';
import check from '../../../assets/icons/check-circle.svg'
import { Link } from 'react-router';

export default function RegSuccess() {
 return (
  <>
   <header class="site-header">
    <div class="header-container">
     <div class="header-logo">
      NANSM
     </div>
    </div>
   </header>
   <main class="reg-main-content">
    <div class="success-container">
     <div class="icon-circle">
       <img style={{width: '60%', aspectRatio: '1/1'}} src={check} alt="" />
     </div>
     <h1>Registration Successful!</h1>
     <p class="subtitle">Welcome to the association, <strong>Dr. Jane Doe</strong>. Your application has been
      received and is currently being processed by our administrative team.</p>
     <div class="next-steps">
      <h2>Next Steps</h2>
      <ul class="step-list">
       <li class="step-item">
        <div class="step-number">1</div>
        <div class="step-text">Check your email for a confirmation link to verify your contact address.
        </div>
       </li>
       <li class="step-item">
        <div class="step-number">2</div>
        <div class="step-text">Complete your profile details, including your current clinical rotation,
         in the member portal.</div>
       </li>
       <li class="step-item">
        <div class="step-number">3</div>
        <div class="step-text">Join our official community forum to connect with fellow Niger State
         medical students.</div>
       </li>
      </ul>
     </div>
     <div class="action-buttons">
      <Link to={'/members/login'} class="btn btn-primary" href="#">Go to Login page</Link>
      <Link to={'/'} class="btn btn-secondary" href="#">Return to Home</Link>
     </div>
    </div>
   </main>
   <Footer />
  </>
 );
};
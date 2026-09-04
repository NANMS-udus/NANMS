import './ForgotPassword.css';
import leftArrow from '../../../assets/icons/left-arrow.svg'

export default function Forgotpassword({setShowFrgtnPswd}) {
 return (
  <main class="flex-grow">
   <div class="custom-auth-wrapper">
    <div class="custom-auth-card">
     <span class="material-symbols-outlined custom-auth-icon" data-icon="lock_reset" data-weight="fill"
      style={{fontVariationSettings: "'FILL' 1"}}>
      lock_reset
     </span>
     <h1 class="custom-auth-title">Forgot Password</h1>
     <p class="custom-auth-desc">
      Enter the email address associated with your NANMS account. We will send you a secure link to reset
      your password.
     </p>
     <form action="#">
      <div class="custom-form-group">
       <label class="custom-form-label" for="email">Email Address</label>
       <input class="custom-form-input" id="email" name="email" placeholder="e.g., student@nansm.org"
        required type="email" />
      </div>
      <button class="custom-btn-primary" type="submit">
       Send Reset Link
      </button>
     </form>
     <div class="custom-auth-footer">
      <button
       class="custom-link" 
       onClick={() => {
        setShowFrgtnPswd(false)
       }}
      >
       <img style={{width: '20px'}} src={leftArrow} alt="" />
       Back to Login
      </button>
     </div>
    </div>
   </div>
  </main>
 );
};
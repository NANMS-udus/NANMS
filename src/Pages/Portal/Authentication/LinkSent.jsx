import './LinkSent.css';

export default function LinkSent() {
 return (
  <main class="main-content">
   <div class="confirmation-card">
    <div class="icon-container">
     <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">check_circle</span>
    </div>
    <h1 class="confirmation-title">Reset Link Sent</h1>
    <p class="confirmation-text">
     We've sent a password reset link to your registered email address. Please check your inbox and follow
     the instructions to create a new password.
    </p>
    <a class="btn-primary" href="#">Back to Login</a>
   </div>
  </main>
 );
};
import './ContactDetails.css';
import loc from '../../assets/icons/location.svg'
import mail from '../../assets/icons/email.svg'
import phone from '../../assets/icons/phone.svg'
//import  from '../../assets/icons/location.svg'

export default function ContactDetails() {
 return (
  <div class="contact-card">
   <h2 class="contact-card-title">Association Details</h2>
   <div class="info-list">
    <div class="info-item">
     <img style={{width: '20px'}} src={loc} alt="" />
     <div>
      <h3 class="info-label">Office Address</h3>
      <p class="info-text">Usmanu dan fodiyo university teaching hospital,<br />Sokoto, Sokoto State,<br />Nigeria.</p>
     </div>
    </div>
    <div class="info-item">
    <img style={{width: '20px'}} src={mail} alt="" />
     <div>
      <h3 class="info-label">Email Address</h3>
      <p class="info-text">info@nanms.org.ng</p>
     </div>
    </div>
    <div class="info-item">
    <img style={{width: '20px'}} src={phone} alt="" />
     <div>
      <h3 class="info-label">Phone Number</h3>
      <p class="info-text">+234 800 000 0000</p>
     </div>
    </div>
   </div>
   <div class="map-container">
    <div class="map-wrapper">
     <div class="map-image"
      data-alt="A clean, minimalist digital map interface showing Minna, Niger State, Nigeria. The map uses a light mode aesthetic with subtle clinical gray tones and a stark, highly visible dark green marker pinpointing the central hospital location. The cartography is simplified, professional, and easily scannable, conveying a sense of academic precision."
      style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAx65fwzqnFwH2hUFHWfJ1lLd0S1SeRm86Ve-7jEJ6D4xk13Xfv-2DlOLQF0oYfg8JdBJO3LVZpDTYLQoOomZb8RQkH1x-RrHoioKXAWzM3mTE2r1MGhDFCMq_MRAvZjLLx2aNQ3EsiATCTzbFDUhdmC5ib8M1lP0OylaxxoIk3yCLXdoOvNfWSX0gqfA0NwrycOsJQus1WJFMFO7Y_dup_9bYDVcHbXyQgNkI6nF0JUQqSW3BUwxK8')"}}>
     </div>
    </div>
   </div>
  </div>
 );
};
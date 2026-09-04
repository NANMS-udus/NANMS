import './Footer.css';
import location from '../assets/icons/location-white.svg'
import phone from '../assets/icons/phone-white.svg'
import mail from '../assets/icons/email-white.svg'
import forum from '../assets/icons/forum-white.svg'
import share from '../assets/icons/share-white.svg'
import globe from '../assets/icons/globe.svg'


export default function Footer() {
 return (
  <footer>
   <div class="footer-grid">
    <div class="footer-section">
     <h4 class="font-headline-md">Association Links</h4>
     <ul class="footer-links">
      <li><a class="font-body-md footer-link" href="#">About Us</a></li>
      <li><a class="font-body-md footer-link" href="#">Constitutions</a></li>
      <li><a class="font-body-md footer-link" href="#">Executive Council</a></li>
     </ul>
    </div>
    <div class="footer-section">
     <h4 class="font-headline-md">Contact Details</h4>
     <ul class="footer-contact">
      <li class="font-body-md footer-contact-item"><img style={{width: '24px'}} src={location} alt="" /> Uduth, Sokoto State</li>
      <li class="font-body-md footer-contact-item"><img style={{width: '24px'}} src={mail} alt="" /> contact@nansm.org</li>
      <li class="font-body-md footer-contact-item"><img style={{width: '24px'}} src={phone} alt="" /> +234 800 000 0000</li>
     </ul>
    </div>
    <div class="footer-section">
     <h4 class="font-headline-md">Social Media</h4>
     <div class="footer-social-links">
      <a class="footer-link" href="#"><img style={{width: '20px'}} src={globe} alt="" /></a>
      <a class="footer-link" href="#"><img style={{width: '20px'}} src={forum} alt="" /></a>
      <a class="footer-link" href="#"><img style={{width: '20px'}} src={share} alt="" /></a>
     </div>
    </div>
   </div>
   <div class="footer-bottom">
    <p class="font-body-md text-sm">© 2026 National Association of Niger State Medical Students. All rights
     reserved.</p>
   </div>
  </footer>
 );
};
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import './Main.css';

export default function Main() {
 return (
  <main class="main-content">
   <section class="page-header">
    <h1 class="page-title">Contact Us</h1>
    <p class="page-description">We are here to assist you. Reach out for any inquiries, partnerships, or support
     regarding the National Association of Niger State Medical Students.</p>
   </section>
   <div class="contact-grid">
    <ContactDetails />
    <ContactForm />
   </div>
  </main>
 );
};
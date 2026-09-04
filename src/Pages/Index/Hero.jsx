import './Hero.css';
import logo from '../../assets/Logos/logo.jpg'
import { Link } from 'react-router';

export default function Hero() {
 return (
  <section class="index-hero" id="home">
   <div class="index-hero-content">
    <span class="index-badge">Official Association Page</span>
    <h1 class="hero-title text-display-lg">Excellence in Medical Education &amp; Community Service</h1>
    <p class="hero-desc text-body-lg text-secondary">The unified voice of Niger State medical students,
     dedicated to fostering academic excellence, ethical practice, and impactful community health
     initiatives.</p>
    <div class="hero-actions">
     <a class="btn btn-primary btn-large" href="#about">Learn More</a>
     <Link class="btn btn-outline btn-large" to={'/contact'}>Contact Us</Link>
    </div>
   </div>
   <div class="hero-image">
    <img alt="NANMS Logo"
     src={logo} />
   </div>
  </section>
 );
};
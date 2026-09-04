import './About.css';
import check from '../../assets/icons/check-circle.svg'

export default function About() {
 return (
  <section id="about">
   <div className="home-section-header">
    <h2 className="text-headline-lg">Our Legacy &amp; Vision</h2>
    <p className="text-secondary text-body-md">Founded in the heart of Niger State, built on a foundation of
     rigorous academic pursuit and unwavering commitment to public health.</p>
   </div>
   <div className="about-grid">
    <div className="about-image">
     <div className="about-image-bg"
      style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCfkByLrPVZwkqw9uxdJFOL8TDf2pRrqqNRMFu6ASBG18X1CD4j1JNXpB5p-wtj2AnzYwgxo6eqeI2k-rS9k6nld77u9L5tXRXgiE4U6DsFoIC5I52jo_msylVQJQYeRch8l3EVQHbNFs3hWkm-NQ1MGSy9zelqUC32z_vCfXIzKi1DrPMfhpdulz7-crhY7ZKXTb8OuYycX_BT8tCO4WcMuAlQ8tksF01Fyd4c_c4Y2wt_8rZnC8CD')"}}>
     </div>
    </div>
    <div className="about-content">
     <h3 className="text-headline-md">Fostering Academic Excellence</h3>
     <p className="text-body-md text-secondary">NANMS was established to provide a supportive network for
      medical students originating from Niger State and studying in UDUS. We bridge the gap between rigorous
      medical training and professional development.</p>
     <p className="text-body-md text-secondary">Our mission extends beyond the classroom. We envision a
      healthier future driven by competent, compassionate scholar-physicians who are deeply connected
      to their communities.</p>
     <ul className="feature-list">
      <li className="feature-item">
       <img style={{width: '20px'}} src={check} alt="check" />
       <span className="text-label-sm">Academic Mentorship</span>
      </li>
      <li className="feature-item">
      <img style={{width: '20px'}} src={check} alt="check" />
       <span className="text-label-sm">Clinical Skills Workshops</span>
      </li>
      <li className="feature-item">
      <img style={{width: '20px'}} src={check} alt="check" />
       <span className="text-label-sm">Professional Networking</span>
      </li>
     </ul>
    </div>
   </div>
  </section>
 );
};
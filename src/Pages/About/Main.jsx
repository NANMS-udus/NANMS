import './Main.css';
import history from '../../assets/icons/history-1.svg'
import vision from '../../assets/icons/vision.svg'
import mission from '../../assets/icons/mission.svg'
import values from '../../assets/icons/values.svg'
import track from '../../assets/icons/history.svg'

export default function Main() {
 return (
  <main>
   <section className="hero-section">
    <h1 className="hero-title">The Power Association</h1>
    <p className="hero-subtitle">Dedicated to fostering academic excellence, professional development, and community
     welfare among medical students from Niger State studying in UDUS.</p>
   </section>
   <section className="bento-grid">
    <div className="abt-card history-card">
     <div className="history-content">
      <img style={{width: '30px'}} src={history} alt="" />
      <h2 className="abt-card-title">Our History</h2>
      <p className="abt-card-text">Founded on the principles of academic rigor and professional solidarity, NANMS has been the unifying body for Niger State medical students for over two decades. We bridge the gap between classroom learning and clinical excellence.</p>
     </div>
     <div className="history-img-container"
      data-alt="A historic medical university library with tall wooden bookshelves, warm low-key lighting, and vintage medical textbooks lying open on a mahogany desk. The aesthetic is academic, prestigious, and slightly classical, utilizing deep browns and warm golds against the stark white of the pages."
      style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJgr5mxN3-aepWSz2BtCz_b0mnJgMqgz0-AqSGOahKYPOu5dhpfv_oVqpn2n79XFA9061qZ8iK9Kq9jkpz0AfbSIDeXtHD7Y-N63uWPuWR_h9ijLZmXXkytFDNNF0ny1ACl0SppiegI8uv-4XDKJWEyp2LR0EGZY1ZR0rhnNk7trQ5-IL1EsCj-EURdPyUt8N5NSJYFVdkShkil88Xyor2_rLJtgN8VxszZzmGJre6JenBxqGQONxx")'}}>
     </div>
    </div>
    <div className="abt-card">
    <img style={{width: '30px'}} src={mission} alt="" />
     <h2 className="abt-card-title">Mission</h2>
     <p className="abt-card-text">To empower medical students through comprehensive academic support, professional
      networking, and advocacy, ensuring the development of competent and compassionate healthcare
      leaders.</p>
    </div>
    <div className="abt-card">
    <img style={{width: '30px'}} src={vision} alt="" />
     <h2 className="abt-card-title">Vision</h2>
     <p className="abt-card-text">To be the premier medical student association in UDUS, recognized for producing
      innovative students and doctors dedicated to improving health care and medical practice in Nigeria.</p>
    </div>
    <div className="abt-card">
    <img style={{width: '30px'}} src={values} alt="" />
     <h2 className="abt-card-title">Core Values</h2>
     <ul className="card-text" style={{listStyleType: 'disc', paddingLeft: '20px', marginTop: '12px',}}>
      <li>Academic Excellence</li>
      <li>Professional Integrity</li>
      <li>Compassionate Care</li>
      <li>Innovative Research</li>
     </ul>
    </div>
   </section>
  </main>
 );
};
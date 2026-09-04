import Footer from '../../Shared/Footer';
import Nav from '../../Shared/Nav';
import Main from './Main';
import './News.css';

export default function News() {
  return (
   <>
   <Nav currentPage={'news'} />
   <section class="hero">
    <div class="container hero-content">
      <h1>News &amp; Updates</h1>
      <p>Stay informed on the latest developments in medical education, community health initiatives, and academic
        achievements from the National Association of Niger State Medical Students.</p>
    </div>
  </section>
   <Main />
   <Footer />
   </>
  );
};
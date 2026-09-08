import Footer from '../../Shared/Footer';
import Nav from '../../Shared/Nav';
import Main from './Main';
import './PastMembers.css';

export default function PastMembers() {
  return (
    <>
      <Nav currentPage={'p&a'}/>
      <section class="page-hero">
        <div class="hero-badge">Guardians of Our Legacy</div>
        <h1 class="page-title">Patrons &amp; Alumni Network</h1>
        <p class="page-subtitle">Honoring the eminent healthcare leaders who guide our mission, the visionary past
          presidents who built our foundation, and our distinguished alumni practicing worldwide.</p>
      </section>
      <Main />
      <Footer />
    </>
  );
};
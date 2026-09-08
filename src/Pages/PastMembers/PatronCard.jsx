import './PatronCard.css';

export default function PatronCard({details}) {
 return (
  <article class="patron-card">
   <div class="patron-badge">★ Grand Patron</div>
   <div class="patron-header">
    <img alt="Prof. Mohammed K. Bello" class="patron-avatar"
     src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTF-AK43L9-6og8BO7_dh9BYEch4tkXxaOfvsMffbC45HFvsWedZN4SxQkyN7TJt9y76AGJ11RBnHeLxrYtAmZQK4UVk_ILpWwgsmCEMvirx5Ksqfr3YUHLKLoBCCWMXFWNoAnSwRgfF7TWxClib-YarzYKwJLUcQD9lrFpPFW67XI98XJGpkwB6CEwltj3LBDWY4crflZMvwHz5ez5C4ABL0mPL4ggL_xoioFalMj5Tp_6DJXnjMP" />
    <div class="patron-info">
     <h3>Prof. Mohammed K. Bello</h3>
     <div class="patron-role">FWACS, Consultant Neurosurgeon</div>
     <div class="patron-institution">Former Provost, College of Health Sciences</div>
    </div>
   </div>
   <p class="patron-bio">An icon in surgical neurology and pioneering medical education administrator of Usmanu Dan fodiyo university Sokoto. Prof. Bello has consistently contributed to the growth and development of the association.</p>
   <div class="patron-quote">
    "The measure of our medical legacy is found in the integrity, empathy, and scientific competence of the
    younger generation we nurture."
   </div>
  </article>
 );
};
import './PresidentCard.css';

export default function PresidentCard({details}) {
 return (
  <article class="president-card"
   data-keywords="dr. umar farooq sani resident physician internal medicine ahmadu bello university teaching hospital abuth zaria nigeria cardiology critical care cardiovascular"
   data-tenure="2022–2023">
   <span class="tenure-pill">2022 – 2023 Administration</span>
   <img alt="Dr. Umar Farooq Sani" class="president-photo"
    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxrWXkchyu8KFqTBuQGENKRJeluh2vU78V4dB24WKBrR2lx-AuUazsOpxJNvjcl3U-LuKaZ8zUzd1gR6EJZFTuam4HrcMzue8DAc3D5plxqEmEt1YUhNV_hNpCLIVccvYbKILqEKtW4T1QQMG-nMANNyqiENdCZvOGfGoqktWCMpGuOTEFL19rue57mZHUKYEsToqItgKSMwSnLL2e6aysQVYUIaw4uzKlrEUoKflt32OCwNyi5lzc" />
   <h3 class="president-name">Dr. Umar Farooq Sani</h3>
   <div class="current-status">Now Resident Physician, Internal Medicine</div>
   <div class="key-legacy"><span class="legacy-label" style="color: #006837; letter-spacing: 0.05em;">Current
    Practice Status</span>
    <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.4rem; font-size: 0.815rem;">
     <div><strong style="color: #191c1e;">Level:</strong> Resident Doctor (Internal Medicine)</div>
     <div><strong style="color: #191c1e;">Hospital / Location:</strong> Ahmadu Bello University Teaching
      Hospital (ABUTH), Zaria, Nigeria</div>
     <div><strong style="color: #191c1e;">Specialty:</strong> Cardiology &amp; Critical Care Medicine</div>
     <div><strong style="color: #191c1e;">Focus:</strong> Cardiovascular clinical care and resident academic
      training</div>
    </div>
   </div>
  </article>
 );
};
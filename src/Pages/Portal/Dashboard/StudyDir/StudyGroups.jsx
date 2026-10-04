import './StudyGroups.css';

export default function StudyGroups() {
 return (
  <section class="groups-section">
   <div class="section-header-block" style="border-bottom:none; margin-bottom: 0;">
    <div>
     <h2 class="section-header-title">
      <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
       <path
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Active NANMS Clinical Study Circles
     </h2>
     <p class="section-subtitle">Join peer-led tutorial cohorts moderated by resident doctors and senior clinical
      colleagues.</p>
    </div>
    <button class="btn-outline-sm" onclick="alert('Applications to launch a new study circle are open!')">Form a
     Study Circle</button>
   </div>

   <div class="groups-grid">
    <div class="group-item">
     <div>
      <div class="group-badge-active">
       <span class="group-pulse-dot"></span>
       Active Cohort • Bi-Weekly
      </div>
      <h4 class="group-name">Final MBBS High-Yield OSCE Mock Circle</h4>
      <p style="font-size:0.88rem; color:#475569; margin-bottom:0.75rem;">
       Intensive clinical stations, real-time patient presentation critiques, and diagnostic imaging drills led
       by resident registrars.
      </p>
      <div class="group-schedule">
       <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
       </svg>
       Every Saturday & Tuesday • 7:30 PM (Google Meet & Ward Rounds)
      </div>
     </div>
     <div class="group-members-row">
      <span style="font-size:0.82rem; color:var(--color-text-muted); font-weight:600;">42 Active Members • Minna
       Hub</span>
      <button class="btn-join-group"
       onclick="alert('You have registered interest for the Final MBBS OSCE Mock Circle.')">Join
       Circle</button>
     </div>
    </div>
    <div class="group-item">
     <div>
      <div class="group-badge-active">
       <span class="group-pulse-dot"></span>
       Active Cohort • Weekly
      </div>
      <h4 class="group-name">Pre-Clinical Anatomy & Physiology Mastery</h4>
      <p style="font-size:0.88rem; color:#475569; margin-bottom:0.75rem;">
       Peer tutoring focused on cadaveric dissection terminology, neuroanatomy pathways, and cardiovascular
       physiology for 200L & 300L students.
      </p>
      <div class="group-schedule">
       <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
       </svg>
       Every Thursday • 6:00 PM (College of Health Sciences Library)
      </div>
     </div>
     <div class="group-members-row">
      <span style="font-size:0.82rem; color:var(--color-text-muted); font-weight:600;">68 Active Members • Bida
       / Zaria</span>
      <button class="btn-join-group"
       onclick="alert('You have registered interest for Pre-Clinical Anatomy Mastery.')">Join Circle</button>
     </div>
    </div>
   </div>
  </section>
 );
};
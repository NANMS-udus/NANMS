import { useState } from 'react';
import './DetModal.css';

export default function DetModal(detModal) {
  
 return (
  <div class="modal-overlay" id="resourceModal">
   <div class="modal-card">
    <div class="modal-header">
     <div>
      <span id="modalCategoryTag" class="category-tag tag-clinical">Clinical Resource</span>
      <h3 id="modalResourceTitle" class="modal-title">Resource Title</h3>
     </div>
     <button class="modal-close-btn" onclick="closeResourceModal()">&times;</button>
    </div>

    <div class="modal-body">
     <div class="modal-meta-bar">
      <span class="format-badge" id="modalFormat">PDF File</span>
      <span style={{fontSize: '0.82rem', color: 'var(--color-text-muted)'}} id="modalFileSize">• 8.4 MB</span>
      <span style={{fontSize: '0.82rem', color: 'var(--color-text-muted)'}} id="modalYear">• Academic Session
       2023/2024</span>
     </div>

     <h4 class="modal-section-title">Overview & Curriculum Coverage</h4>
     <p class="modal-desc" id="modalDescription">
      Detailed overview text describing what topics are covered, key learning outcomes, and practical exam tips.
     </p>

     <h4 class="modal-section-title">Table of Contents & Core Modules</h4>
     <div class="modal-syllabus-box">
      <ul class="modal-syllabus-list" id="modalSyllabus">
       <li>✓ Module 1: Patient History and Symptom Triage</li>
       <li>✓ Module 2: Systemic Clinical Examination Protocol</li>
       <li>✓ Module 8: Differential Diagnosis Matrix & Scoring Criteria</li>
      </ul>
     </div>

     <h4 class="modal-section-title">Contributed & Peer Reviewed By</h4>
     <div
      style={{display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px', border: '1px solid var(--color-border-light)'}}>
      <div class="contributor-avatar" id="modalAuthorInitials">US</div>
      <div>
       <div style={{fontWeight: '700', fontSize: '0.9rem'}} id="modalAuthorName">Dr. Umar Farooq Sani</div>
       <div style={{fontSize: '0.8rem', color: 'var(--color-text-muted)'}} id="modalAuthorRole">Resident Doctor • ABUTH
        Zaria • Former NANMS President</div>
      </div>
     </div>
    </div>

    <div class="modal-footer">
     <button class="btn-outline-sm" onclick="closeResourceModal()">Close</button>
     <button class="btn-register" onclick="simulateDownload()">
      <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
       <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      Download Verified Resource
     </button>
    </div>
   </div>
  </div>
 );
};
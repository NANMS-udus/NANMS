import './Hero.css';
import arrowBack from '../../../../assets/icons/left-arrow.svg'
import { Link } from 'react-router';

export default function Hero() {
  return (
    <section class="stu-hero-section">
      <Link
        style={{ position: 'fixed', top: '80px', left: '10px', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}
        to={'/members/dashboard'}
      >
        <img
          style={{
            width: '34px',
            border: '2px solid var(--primary)',
            padding: '6px',
            borderRadius: '50%',
          }}
          src={arrowBack}
          alt=""
        />
        Go back
      </Link>
      <div class="container">
        <div class="badge-pill">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          ACADEMIC REPOSITORY & PEER LEARNING
        </div>
        <h1 class="hero-title">Medical Study Directory & Archive</h1>
        <p class="hero-subtitle">
          Curated high-yield study materials, past exam questions, and active peer
          study groups for Niger State medical students across pre-clinical and clinical disciplines.
        </p>

        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">450+</span>
            <span class="stat-label">Verified Handouts</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">12 Yrs</span>
            <span class="stat-label">Past MBBS Papers</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">28</span>
            <span class="stat-label">Active Peer Circles</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">100%</span>
            <span class="stat-label">Free Member Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};
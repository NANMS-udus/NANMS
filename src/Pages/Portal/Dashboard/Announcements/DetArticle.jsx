import './DetArticle.css';

export default function DetArticle() {
  return (
    <article class="article-content">
      <header class="article-header">
        <div class="meta-info font-label-md">
          <span class="ann-tag">Academic Update</span>
          <span class="meta-item"><span class="material-symbols-outlined">calendar_today</span> October 24,
            2024</span>
          <span class="meta-item"><span class="material-symbols-outlined">person</span> Dr. Aminu Bello</span>
        </div>
        <h1 class="article-title font-display-lg">New Clinical Rotations Schedule Announced for 2025 Academic
          Year</h1>
      </header>
      <div class="featured-image-container">
        <img alt="A professional medical student studying in a bright, modern library with high-key lighting, soft white aesthetic, deep blacks and vibrant forest green accents. A serene, academically rigorous atmosphere."
          class="featured-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHHyZZI2mnszFFVzoX15EkOCEelT8mmyErU84MYulwCtPInCLbBkQVLvJbQ1kaKH8aGen_aWW3Mumowk8jxUShyDx5JVkKOFBoOGPbgGnZbtiCvCkFkS1e5GDciqH-wDraCOk1EWHwIkZwQ6Iq2aWUD4_UJ2bHf8uWkTMYm0ulykBi4PA9HFcl_3niN5rmrFx1Na9LGJa31XycFhKp3WwWrhDd667tm6yJHI1shq0VFjfVxR22iQc9" />
        <div class="image-caption font-label-md">
          <p>Image: Medical students reviewing the new scheduling framework in the primary campus library.</p>
        </div>
      </div>
      <div class="body-text font-body-lg">
        <p class="lead">The National Association of Niger State Medical Students, in collaboration with the
          university administration, is pleased to announce the finalized clinical rotation schedule for the
          upcoming 2025 academic year.</p>
        <h2 class="font-headline-md">Key Changes to the Framework</h2>
        <p>This comprehensive update aims to optimize student exposure across critical specialties while
          ensuring compliance with national accreditation standards. The new schedule reflects extensive
          feedback from both faculty and the student body.</p>
        <ul>
          <li>Extended primary care modules in rural districts to enhance community medicine competence.</li>
          <li>Restructured surgical rotations allowing for focused, continuous block scheduling.</li>
          <li>Introduction of simulated emergency response drills within the core curriculum.</li>
        </ul>
        <h2 class="font-headline-md">Implementation Timeline</h2>
        <p>The transition to the new schedule will commence immediately following the conclusion of the current
          semester. Students currently enrolled in 4th-year programs will receive their individualized
          placement details via the university portal by November 15th.</p>
        <div class="callout-box">
          <p class="callout-title font-label-md">Action Required</p>
          <p class="callout-text font-body-md">All clinical students must verify their current registration
            status in the portal before the scheduling algorithm finalizes placements on November 1st.</p>
        </div>
      </div>
    </article>
  );
};
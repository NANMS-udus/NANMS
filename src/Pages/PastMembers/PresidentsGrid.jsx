import { useContext, useEffect, useState } from 'react';
import PaginationSection from './PaginationSection';
import './PresidentsGrid.css';
import { GenContext } from '../../MyContexts/GenContexts';
import PresidentCard from './PresidentCard';
import UtilsSection from './UtilsSection';

export default function PresidentsGrid({ arrayByPage }) {

  const { presidents } = useContext(GenContext)

  const [pageNo, setPageNo] = useState(1)

  const [displayed, setDisplayed] = useState(presidents)

  useEffect(() => {
    function updateDisplayed() {
      setDisplayed(presidents)
    }

    updateDisplayed()
  }, [presidents])

  const presByPage = arrayByPage(displayed, 6)

  return (
    <section class="section-block">
      <div class="section-header">
        <h2 class="section-title">Past Presidents &amp; Administrations</h2>
        <p class="section-desc">Honoring the visionary leadership of past student executives who shaped NANMS across
          successive academic sessions.</p>
      </div>
      <UtilsSection
        def={presidents}
        setterFun={setDisplayed}
        filterParams={['tenure']}
        target={displayed}
      />
      {
        presidents.length
          ? <div class="presidents-grid">
            {
              presByPage[pageNo - 1]?.map((p) => {
                return <PresidentCard details={p} />
              })
            }
            {/* <article class="president-card">
              <span class="tenure-pill">2022 – 2023 Administration</span>
              <img alt="Dr. Umar Farooq Sani" class="president-photo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxrWXkchyu8KFqTBuQGENKRJeluh2vU78V4dB24WKBrR2lx-AuUazsOpxJNvjcl3U-LuKaZ8zUzd1gR6EJZFTuam4HrcMzue8DAc3D5plxqEmEt1YUhNV_hNpCLIVccvYbKILqEKtW4T1QQMG-nMANNyqiENdCZvOGfGoqktWCMpGuOTEFL19rue57mZHUKYEsToqItgKSMwSnLL2e6aysQVYUIaw4uzKlrEUoKflt32OCwNyi5lzc" />
              <h3 class="president-name">Dr. Umar Farooq Sani</h3>
              <div class="current-status">Now Resident Physician, Internal Medicine</div>
              <div class="key-legacy">
                <span class="legacy-label">Key Achievement</span>
                Instituted the Annual Rural Health Outreach grant and inaugurated the Central Medical Research Directorate.
              </div>
            </article>
            <article class="president-card">
              <span class="tenure-pill">2021 – 2022 Administration</span>
              <img alt="Dr. Maryam K. Mustapha" class="president-photo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP8oAgNIsgavaKe8EU6DR_na6zJ-3ofZd8qkseGCkhTQ4ovw6Hy4dWiFUDFrVEI_T3XpDGWH7_4QzOaCFRRVYL_XZ-LOC2XaKLLvbhWgGAXFCihIbtW_kg6wzLVYk-xHeBtCdISW0Hjfn-i8Mtp3MsZBQRe4gyhfea7YdaLhvMovcdjYrPir_SIc3vJDarXHhOK-HdCq5400NP40iDDzu5tRG47PFxUrUXQf5GW1v8xREaMOOceQpc" />
              <h3 class="president-name">Dr. Maryam K. Mustapha</h3>
              <div class="current-status">Now Senior Medical Officer, Pediatrics</div>
              <div class="key-legacy">
                <span class="legacy-label">Key Achievement</span>
                Secured state-wide university accreditation advocacy and launched the peer-to-peer clinical mentorship
                series.
              </div>
            </article>
            <article class="president-card">
              <span class="tenure-pill">2020 – 2021 Administration</span>
              <img alt="Dr. Ahmad Abubakar Bida" class="president-photo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1uK27dVjUKT3oPu6nsPL6sZOYYRVPZQn5JNL3Ait17bLSUlvzrzxr57dnhrqDlycE4C6_BzxDjmx9Mda_deYSzeATmAJQr0Fr9rlauhfas-Jlw_HjAgruT-Ctt8fR1HFcTPJM8OqfeEEN3DOHC_yKRlqr-VB6NSTytXpFmuj7YQaIkpXRcMohU7keh0ByrL3aGWPGt1MGLnZJAX06TO3fLykAZau3C5lUglw5_RVLG3chNgPG_mIa" />
              <h3 class="president-name">Dr. Ahmad Abubakar Bida</h3>
              <div class="current-status">Now Registrar in General Surgery</div>
              <div class="key-legacy">
                <span class="legacy-label">Key Achievement</span>
                Spearheaded digital emergency learning during academic disruptions and established the first online NANMS
                library portal.
              </div>
            </article>
            <article class="president-card">
              <span class="tenure-pill">2019 – 2020 Administration</span>
              <img alt="Dr. Salihu Danladi" class="president-photo"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq9joiSuyMpN5_WGY5WrH89RV8HteFAKZ8o-BR60AKFDlx4jjOWk-77i1pE6SPUJdbPcIzKrzI0qgWYbQWFFxwZhYORjQmMwUAo6vRrZAMYGwA4Zf9bu95t1VY7HMkhlrFvPiitKJ7dIlTYjYKNmvPD4B8CTQzDdIFSFX_ztkPAGitzDwsb6jxDTIGu1SLFu8oq1VM2r1xJ2v4A1Frqgs8GBe6ACj_EOPl1kwxDJtuTqQShhBR7wQn" />
              <h3 class="president-name">Dr. Salihu Danladi</h3>
              <div class="current-status">Now Clinical Epidemiologist &amp; Researcher</div>
              <div class="key-legacy">
                <span class="legacy-label">Key Achievement</span>
                Formulated the modern NANMS Constitution and led the historic Niger State Primary Healthcare immunization
                tour.
              </div>
            </article> */}
          </div>
          : <h2 style={{ textAlign: 'center', color: 'grey' }}>
            No President found.
          </h2>
      }
      <PaginationSection
        target={presByPage}
        pageNo={pageNo}
        setPageNo={setPageNo}
        displayTitle={'past administrations'}
      />
    </section>
  );
};
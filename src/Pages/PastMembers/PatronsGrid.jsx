import { useContext, useEffect, useState } from 'react';
import { GenContext } from '../../MyContexts/GenContexts';
import PaginationSection from './PaginationSection';
import './PatronsGrid.css';
import PatronCard from './PatronCard';
import UtilsSection from './UtilsSection';
import useArrayByPage from '../../Utils/useArrayByPage';

export default function PatronsGrid() {

  const { ptrns } = useContext(GenContext)

  const [pageNo, setPageNo] = useState(1)

  const [displayed, setDisplayed] = useState(ptrns)

  useEffect(() => {
    function updateDisplayed() {
      setDisplayed(ptrns)
    }

    updateDisplayed()
  }, [ptrns])

  const [ptrnsByPage] = useArrayByPage(displayed, 6, [])


  return (
    <section class="section-block">
      <div class="section-header">
        <h2 class="section-title">Eminent Patrons &amp; Mentors</h2>
        <p class="section-desc">Distinguished leaders providing institutional guidance, advocacy, and philanthropic
          support to Niger State medical scholars.</p>
      </div>
      <UtilsSection 
        def={ptrns}
        setterFun={setDisplayed}
        filterParams={['badge']}
        target={displayed}
      />
      {
        ptrns.length
          ? <div class="patrons-grid">
            {
              ptrnsByPage[pageNo - 1]?.map((p) => {
                return <PatronCard details={p} />
              })
            }
            {/* <article class="patron-card">
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
              <p class="patron-bio">An icon in surgical neurology and pioneering medical education administrator in Niger
                State. Prof. Bello has consistently championed scholarship endowments and clinical laboratory modernization
                for medical trainees.</p>
              <div class="patron-quote">
                "The measure of our medical legacy is found in the integrity, empathy, and scientific competence of the
                younger generation we nurture."
              </div>
            </article>
            <article class="patron-card">
              <div class="patron-badge">★ Patron &amp; Health Advisor</div>
              <div class="patron-header">
                <img alt="Dr. Zainab Aliyu Tanko" class="patron-avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOfzJ4zE6E9m9PFI2nfLdQXH6dRijopNGPma_fjXB8-z3HMHjwqcH-fr37r-7zxUM0wHGqDXaF-huBv6M-AF00MTdcaibs0tc_m-xjN73zQzKI1wHnnGKO9PdL1cRcOgRXVUqlks985w2KXgFfiXlNrljbLodEG8HGyLJeyYgrcvaPJ7YcVsFZemIEU74io4OazrS4GOc1NBkzSgaukQUwGDACK2gRBoUJEgx-mzj0TUCErAESUZg9" />
                <div class="patron-info">
                  <h3>Dr. Zainab Aliyu Tanko</h3>
                  <div class="patron-role">FMCOG, Maternal Health Specialist</div>
                  <div class="patron-institution">Senior Healthcare Policy Consultant</div>
                </div>
              </div>
              <p class="patron-bio">A dedicated advocate for rural healthcare reforms and maternal wellness across Northern
                Nigeria. Dr. Tanko sponsors our annual rural clinical outreach programs and mentors aspiring female
                surgeons.</p>
              <div class="patron-quote">
                "Every underserved village reached by our students is a testament to the transformative power of
                compassionate clinical practice."
              </div>
            </article>
            <article class="patron-card">
              <div class="patron-badge">★ Patron &amp; Clinical Benefactor</div>
              <div class="patron-header">
                <img alt="Dr. Ibrahim Ndagi" class="patron-avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsMwnhSWGUF-sPx0SrpoqEhm2hRGEBsUT_HqIE0viXnK3c2WQ1DGIt1krXnf4Eupm5vj8xE2WOnBVB1tVOzLT2xqwuxSOU_6loA9WKI9Gwr9cniKoazeP4MTctiosmvnWTOwzOidEwlZRNwiST9YyukwnfIEOqke0dLQ1fbhrb_hODiuBh4HUGYCXFcPQm-43Wy0NNGBFj-jPiO3h29nIL8pfqazOdWmKjVH0Ck29l8ARsbTcSd_BS" />
                <div class="patron-info">
                  <h3>Dr. Ibrahim Ndagi</h3>
                  <div class="patron-role">FACP, Chief Medical Consultant</div>
                  <div class="patron-institution">Minna Specialist Medical Services</div>
                </div>
              </div>
              <p class="patron-bio">Over 25 years of diagnostic excellence and clinical mentorship. Dr. Ndagi provides
                continuous residency guidance and subsidizes diagnostic equipment used during NANMS community health camps.
              </p>
              <div class="patron-quote">
                "Academic excellence without moral courage is incomplete. We instill in our students the unyielding pledge
                of service above self."
              </div>
            </article> */}
          </div>
          : <h2 style={{ textAlign: 'center', color: 'grey' }}>
            No Patron found.
          </h2>
      }
      <PaginationSection
        target={ptrnsByPage}
        pageNo={pageNo}
        setPageNo={setPageNo}
        displayTitle={'patrons'}
      />
    </section>
  );
};
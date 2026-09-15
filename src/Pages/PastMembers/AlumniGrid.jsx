import { useContext, useEffect, useState } from 'react';
import './AlumniGrid.css';
import PaginationSection from './PaginationSection';
import { GenContext } from '../../MyContexts/GenContexts';
import AlumniCard from './AlumniCard';
import UtilsSection from './UtilsSection';

export default function AlumniGrid({ arrayByPage }) {

  const { alumni } = useContext(GenContext)

  const [pageNo, setPageNo] = useState(1)

  const [displayed, setDisplayed] = useState(alumni)

  useEffect(() => {
    function updateDisplayed() {
      setDisplayed(alumni)
    }

    updateDisplayed()
  }, [alumni])

  const alumniByPage = arrayByPage(displayed, 6)

  return (
    <section class="section-block">
      <div class="section-header">
        <h2 class="section-title">Notable Alumni Network</h2>
        <p class="section-desc">Our graduates making ground-breaking contributions in clinical medicine, surgical
          specialties, and public health worldwide.</p>
      </div>
      <div class="alumni-intro">
        <div class="alumni-intro-text">
          <h3>A Far Reaching Network of Doctors &amp; Physicians Across the country</h3>
          <p>From university teaching hospitals in Nigeria to world-renowned research institutes across the UK, North
            America, and beyond, NANMS alumni remain steadfast in advancing healthcare standards and supporting current
            student cohorts.</p>
        </div>
        <div class="alumni-stats">
          <div class="stat-item">
            <span class="stat-num">850+</span>
            <span class="stat-label">Doctors Graduated</span>
          </div>
        </div>
      </div>
      <UtilsSection target={[
        {
          name: 'name 5',
          class: '2026',
          specialty: 'Physiology'
        },
        {
          name: 'name 4',
          class: '2021',
          specialty: 'Endocrinology'
        },
        {
          name: 'name 3',
          class: '2020',
          specialty: 'Cardiology'
        },
        {
          name: 'name 2',
          class: '2023',
          specialty: 'Microbiology'
        },
        {
          name: 'name 1',
          class: '2026',
          specialty: 'Pathology'
        },
        {
          name: 'name 6',
          class: '2026',
          specialty: 'Gastroenterology'
        },
        {
          name: 'name 7',
          class: '2026',
          specialty: 'Opthalmology'
        }
      ]} 
      setterFun={setDisplayed} 
      filterParams={['class', 'specialty']}
      def={alumni}
      />
      {
        alumni.length
          ? <div class="alumni-grid">
            {
              alumniByPage[pageNo - 1]?.map((a) => {

                return <AlumniCard details={a} />
              })

            }
            {/* <article class="alumnus-card">
              <div class="alumnus-top">
                <img alt="Dr. Hadiza Suleiman" class="alumnus-thumb"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP1HuKhgAWRbWw8zo_q6XW5FnZrq-WvaBIOWmoHdjffYm3j-N_bhPl_R9nKG1elYb2bl7FUzSv3mGWlMygaKU39xx4_92yOsqgl7_2V9sYws1hVayNWwxJz03LXcLYzqxrIo-QZIaueS3DaAhahHbKL3moe0Fz2vk_6Fwnf9G8_NKafw517VOv45aai9YWoYclv78mft_4lzQmHYB4jfXhXl0-Vm5yjTKFaXWW8SYI4bvpUoZ2Cl29" />
                <div class="alumnus-meta">
                  <h4>Dr. Hadiza Suleiman</h4>
                  <div class="alumnus-year">Class of 2015</div>
                </div>
              </div>
              <div class="alumnus-specialty">Consultant Cardiologist | Imperial College Trust, UK</div>
              <p class="alumnus-desc">Leading cardiovascular interventionist and clinical researcher with over 18
                peer-reviewed publications. Founded the Diaspora Clinical Webinar Series for NANMS members.</p>
            </article>
            <article class="alumnus-card">
              <div class="alumnus-top">
                <img alt="Dr. Usman Shehu Garba" class="alumnus-thumb"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNfKG3f7-RS41AP53SU1a1h7moFABM4OB6iEMMuyQJI5zq2WIxn4t81MLGdhQZjCctWSydmX4p7IOiYJntSG6_NGrCVx7swwez1xWVAMFxzXhPwgReG2rW_3k1AkhpQaM7_3SXZKpEA0l3Uo8Gwwp_vGEu0T4_P9rNPWIHzH5Jn3fpf775RMtT3LRJoWLnbc8UTu2Fakhc9d51kHNra-8xxi6Um531ppxiwoyfLDE1hqA3gFu7VQ28" />
                <div class="alumnus-meta">
                  <h4>Dr. Usman Shehu Garba</h4>
                  <div class="alumnus-year">Class of 2017</div>
                </div>
              </div>
              <div class="alumnus-specialty">Senior Registrar, Orthopaedic &amp; Trauma Surgery</div>
              <p class="alumnus-desc">Specializing in reconstructive bone surgery at National Hospital Abuja. Frequent lead
                surgeon on voluntary surgical camps in underserved Niger State districts.</p>
            </article>
            <article class="alumnus-card">
              <div class="alumnus-top">
                <img alt="Dr. Aisha Kontagora" class="alumnus-thumb"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8IxSmkjpy9w8E0PoVH89MYQgBh4UlKa16t_FC17drpffVv339thimClBw9ONqASRhNkuUKYQcmM2BvOCNLczwzOgYzITQNbG_KLmnk0AG2o6l_g89wzxyQkYVy9i2CVfLSWtGhFSRk2JiAwjMRzaMkOogubMiLWzt7ZLxKL3lvfNR5ltiyO-6VHEBIoe5kjiHoJi5tvRWwp353Hi8sZCAnaTy4_C7unm9r-JYz3Kc0gNLSDKtszlg" />
                <div class="alumnus-meta">
                  <h4>Dr. Aisha Kontagora</h4>
                  <div class="alumnus-year">Class of 2018</div>
                </div>
              </div>
              <div class="alumnus-specialty">Global Health Scientist | WHO Country Office</div>
              <p class="alumnus-desc">Expert in infectious disease surveillance and outbreak response policy. Coordinates
                national epidemic preparedness frameworks across sub-Saharan Africa.</p>
            </article>
            <article class="alumnus-card">
              <div class="alumnus-top">
                <img alt="Dr. David K. Tsado" class="alumnus-thumb"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKYbmJz4beN5C0YxzJN6-T3vg_dE09qY2uqhQ_vf7vTsddUHkstYwPY8ePP4WIkjN0mOsY486ZqdKYDmkbvdzJhIccUwojS4eMBsA7TCtMcoH_UK6HzC_CvFvKnMq8AgycB8qDOE_dtTriLAmXAVUBlDvLJtj1mSJWvE0p3q_GWyp2BqwZPr65CqaxTyhTIcBxaoposN2GYv-C0kjmX49pcrozXIOtNoh_SFlxj97CMhhOfGN_slHn" />
                <div class="alumnus-meta">
                  <h4>Dr. David K. Tsado</h4>
                  <div class="alumnus-year">Class of 2016</div>
                </div>
              </div>
              <div class="alumnus-specialty">Emergency &amp; Critical Care Physician | Lagos State EMS</div>
              <p class="alumnus-desc">Pioneered pre-hospital trauma response protocols in metropolitan emergency systems.
                Facilitates advanced BLS/ACLS life-support simulations for clinical students.</p>
            </article> */}
          </div>
          : <h2 style={{ textAlign: 'center', color: 'grey' }}>
            No Alumnus found.
          </h2>
      }
      <PaginationSection
        target={alumniByPage}
        pageNo={pageNo}
        setPageNo={setPageNo}
        displayTitle={'alumni'}
      />
    </section>
  );
};
import { useContext, useState } from 'react';
import { PortalContext } from '../../../../MyContexts/PortalContext';
import Pagination from '../../../../Shared/Pagination';
import './Main.css';
import StudyGrid from './StudyGrid';
//import StudyGroups from './StudyGroups';
import UtilsSection from './UtilsSection';
import useArrayByPage from '../../../../Utils/useArrayByPage';

export default function Main() {

  const { studyMats } = useContext(PortalContext)

  console.log(studyMats);
  

  const [pageNo, setPageNo] = useState(1)

  const [displayed, setDisplayed] = useState(studyMats)

  /* const test = [
    {
      name: 'test1',
      type: 'type1',
      use: 'use1'
    },
    {
      name: 'test3',
      type: 'type1',
      use: 'use1'
    },
    {
      name: 'test3',
      type: 'type1',
      use: 'use1'
    },
    {
      name: 'test2',
      type: 'type3',
      use: 'use2'
    },
    {
      name: 'test1',
      type: 'type2',
      use: 'use2'
    },
    {
      name: 'test1',
      type: 'type3',
      use: 'use5'
    },
  ] */

  const [matsByPage] = useArrayByPage(displayed, 6, [])

  return (
    <main class="hub-content">
      <div class="container">
        <UtilsSection studyMats={studyMats} setDisplayed={setDisplayed} displayed={displayed} />
        <div class="section-header-block">
          <div>
            <h2 class="section-header-title">
              <svg width="30" height="30" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Academic Materials
            </h2>
            <p class="section-subtitle">Showing verified student handouts, departmental lecture summaries, and board
              review slides.</p>
          </div>
          <div class="section-actions">
            <button class="btn-outline-sm"
              onclick="alert('Submitting a resource requires executive verification.')">Upload New Material</button>
          </div>
        </div>
        <StudyGrid studyMats={displayed} />
        <div class="pagination-container">
          <div class="pagination-info">
            Showing <strong>
              {
                ((pageNo - 1) * 6) + 1
              }–{
                matsByPage[pageNo - 1]?.length < 6 ? ((matsByPage?.length - 1) * 6) + matsByPage[matsByPage?.length - 1]?.length : pageNo * 6
              }
              </strong> of <strong>{studyMats.length}</strong> curated medical materials
          </div>
          <Pagination target={matsByPage} pageNo={pageNo} setPageNo={setPageNo} />
          {/* <StudyGroups /> */}
        </div>
      </div>
    </main>
  );
};
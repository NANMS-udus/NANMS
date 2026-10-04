import { useContext } from 'react';
import StudyCard from './StudyCard';
import './StudyGrid.css';
import { PortalContext } from '../../../../MyContexts/PortalContext';

export default function StudyGrid() {
  const {studyMats} = useContext(PortalContext)
  return (
   <div class="resource-grid" id="resourceCardsGrid">
    {
      studyMats.length
      ? studyMats.map((sm) => {
        return <StudyCard details={sm}/>
      })
      : <h2 style={{color: 'grey', textAlign: 'center', gridColumn: 'span 2', padding: '28px'}}>
        No Study Materials Yet
      </h2>
    }
   </div>
  );
};
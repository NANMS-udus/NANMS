import StudyCard from './StudyCard';
import './StudyGrid.css';

export default function StudyGrid({studyMats}) {
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
import { useContext } from 'react';
import { PortalContext } from '../../../../MyContexts/PortalContext';
import AnnounceCard from './AnnounceCard';
import './AnounceGrid.css';

export default function AnounceGrid() {
  const { intNews } = useContext(PortalContext)
  return (
    <div class="announcements-grid">
      {
        intNews.length
          ? intNews.map((int) => {
            return <AnnounceCard details={int} />
          })
          : <h2 style={{ color: 'grey', textAlign: 'center', gridColumn: 'span 2', padding: '28px' }}>
            No Announcements Yet
          </h2>
      }
    </div>
  );
};
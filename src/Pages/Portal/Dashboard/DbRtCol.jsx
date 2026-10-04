import './DbRtCol.css';
import megaphone from '../../../assets/icons/megaphone.svg'
import { Link } from 'react-router';
import { useContext } from 'react';
import { PortalContext } from '../../../MyContexts/PortalContext';

export default function DbRtCol() {

  const { intNews } = useContext(PortalContext)

  return (
    <div>
      <div class="section-card h-full">
        <div class="section-header">
          <img style={{ width: '20px' }} src={megaphone} alt="" />
          <h2 class="font-headline-md text-on-surface">Announcements</h2>
        </div>
        <div class="announcements-list">
          {
            intNews.length
              ? intNews.map((n) => {
                return (
                  <a class="news-item" href="#">
                    {
                      n.cover_pic_url
                        ? <div class="news-item-img-container">
                          <img alt="Seminar Image" class="news-item-img"
                            src={n.cover_pic_url} />
                        </div>
                        : ''
                    }
                    <span class="font-label-md text-primary text-xs uppercase tracking-wide block mb-1">Upcoming
                      Event</span>
                    <h3 class="font-label-md text-on-surface text-base line-clamp-2">Annual General Meeting
                      &amp; Elections 2024</h3>
                    <p class="font-body-md text-on-surface-variant text-sm mt-1">Join us next week for the
                      crucial AGM where new executives will be elected...</p>
                  </a>
                )
              })
              : <h3 style={{color: 'gray', textAlign: 'center'}}>
                No Recent Announcements
              </h3>
          }
          {/* <a class="news-item" href="#">
            <div class="news-item-img-container">
              <img alt="Seminar Image" class="news-item-img"
                data-alt="A well-lit, modern auditorium filled with medical students attending a seminar. The focus is on a speaker at the podium presenting a medical chart on a large screen. The color palette features clean whites, soft greys, and subtle medical greens, conveying an academic and professional environment."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl2p-vCHxspLuaYnxKWf2GmxVLpG49a_y_OjABv7DlO_94bRCOtmfZ80-tHwB7rMiWd8FOxw6cYo8xuai76otadnmm6v34V7f6fRqmo6vw9gMGGAk__ghDdgzXumImOJHBic44HX1vEs7-Lsqu2VdbC3_xwabMc-tBRJrZTvjyoMNMstIdvoE7PDTR4Lc7mQMboAfPF4oggbw1Uh1oIV-JnHldU_cPnxXqsHrwyQzN7eNFcGLSALPu" />
            </div>
            <span class="font-label-md text-primary text-xs uppercase tracking-wide block mb-1">Upcoming
              Event</span>
            <h3 class="font-label-md text-on-surface text-base line-clamp-2">Annual General Meeting
              &amp; Elections 2024</h3>
            <p class="font-body-md text-on-surface-variant text-sm mt-1">Join us next week for the
              crucial AGM where new executives will be elected...</p>
          </a>
          <a class="news-item" href="#">
            <span
              class="font-label-md text-tertiary-container text-xs uppercase tracking-wide block mb-1">Important
              Notice</span>
            <h3 class="font-label-md text-on-surface text-base line-clamp-2">Deadline for Annual Dues
              Payment</h3>
            <p class="font-body-md text-on-surface-variant text-sm mt-1">Please ensure all association
              dues are cleared before the upcoming clearance period.</p>
          </a> */}
        </div>
        <Link to={'announcements'}><button class="font-label-md db-btn-outline">View All</button></Link>
      </div>
    </div>
  );
};
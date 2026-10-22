import './DbLftCol.css';
import threeDots from '../../../assets/icons/three-dots.svg'
import checked from '../../../assets/icons/check-circle.svg'
import clock from '../../../assets/icons/clock.svg'
import schoolCap from '../../../assets/icons/graduate-cap.svg'
import plusFrame from '../../../assets/icons/plus-frame.svg'
import dayjs from 'dayjs';



export default function DbLftCol({ myDetails }) {

  const {
    date_admitted,
    level,
    recent_postings
  } = myDetails || {}

  console.log(date_admitted);


  return (
    <div class="left-column">
      <div class="section-card">
        <div class="section-header">
          <img style={{ width: '20px' }} src={schoolCap} alt="" />
          <h2 class="font-headline-md text-on-surface">Academic Progress</h2>
        </div>
        <div class="progress-content">
          <div class="progress-details">
            <div class="mb-sm">
              <span class="font-label-md text-on-surface-variant block mb-1">Current Level</span>
              <span class="font-display-lg text-primary block">{level}</span>
              <span class="font-body-lg text-on-surface">
                {
                  parseInt(level) < 400
                    ? 'Pre Clinical Sciences'
                    : parseInt(level) === 400
                      ? 'Basic Clinical Sciences'
                      : parseInt(level) === 500
                        ? 'Clinical Sciences'
                        : 'Final Year'
                }
              </span>
            </div>
            <div class="progress-stats">
              <div>
                <span
                  class="font-label-md text-on-surface-variant block text-xs uppercase">Admission
                  Year</span>
                <span class="font-body-md text-on-surface font-semibold">{dayjs(date_admitted).format('YYYY')}</span>
              </div>
              <div>
                <span class="font-label-md text-on-surface-variant block text-xs uppercase">Expected
                  Graduation</span>
                <span class="font-body-md text-on-surface font-semibold">{dayjs(date_admitted).add(6, 'years').format('YYYY')}</span>
              </div>
            </div>
          </div>
          <div class="progress-visual-container">
            <div class="progress-circle">
              <div class="progress-circle-fill"></div>
              <span class="font-headline-md text-primary font-bold">
                {/* {
                  Math.round(((dayjs().valueOf() - dayjs(date_admitted).valueOf()) / (dayjs(date_admitted).add(6, 'years').valueOf() - dayjs(date_admitted).valueOf())) * 100)
                }% */}

                {
                  Math.round((parseInt(level) / 600) * 100)
                }%
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="section-card">
        <div class="section-header section-header-between">
          <div class="section-header" style={{ border: 'none', margin: '0', padding: '0' }}>
            <img style={{ width: '20px' }} src={plusFrame} alt="" />
            <h2 class="font-headline-md text-on-surface">Postings</h2>
          </div>
        </div>
        <div class="rotations-list">
          {
            recent_postings?.map((p) => {
              console.log(p);


              return (
                <div key={crypto.randomUUID()} class={`rotation-item ${
                  p.postingStatus === 'Completed'
                    ? ''
                    : p.postingStatus === 'Ongoing'
                      ? 'in-progress'
                      : 'upcoming'
                  }`}>
                  <div class="rotation-info">
                    <div class={`rotation-icon icon-${p.postingStatus?.toLowerCase() || ''}`}>
                      <img
                        className="" src={
                          p.postingStatus === 'Completed'
                            ? checked
                            : p.postingStatus === 'Ongoing'
                              ? threeDots
                              : clock
                        }
                        alt=""
                        style={
                          p.postingStatus === 'Ongoing'
                            ? {
                              border: '3px solid var(--primary)',
                              width: '22px',
                              borderRadius: '50%'
                            }
                            : {}
                        }
                      />
                    </div>
                    <div>
                      <h3 class="font-label-md text-on-surface text-base">{p.postingName}</h3>
                      <p class="font-body-md text-on-surface-variant text-sm">
                        {
                          p.postingDepartments
                        }
                      </p>
                    </div>
                  </div>
                  <span class="font-label-md status-badge badge-completed">{p.postingStatus || ''}</span>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
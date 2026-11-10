import { useContext } from 'react';
import './Card.css';
import { GenContext } from '../../MyContexts/GenContexts';


export default function Card({ details }) {

  const {members} = useContext(GenContext)

  const {
    id,
    position,
    holder_name,
    custom_caption,
    default_caption
  } = details || {}

  console.log(members);
  

  return (
    <div className={`exec-card card-${position === 'President' ? 'president' : position === 'Vice-President 1' || position === 'Vice-President 2' ? 'medium' : 'small'}`}
    >
      <div className="exec-card-img-container">
        <img className="exec-card-img" alt='' src={members.all.find((m) => { return m.id === id })?.avatar_url} />
      </div>
      {
        position === 'President'
          ? <>
            <div className="card-content">
              <span className="exec-card-label">{position}</span>
              <h2 className="exec-card-title">{holder_name}</h2>
              <p className="exec-card-desc">
                {custom_caption || default_caption}
              </p>
              <div class="card-actions">
                <button className="card-action-btn"><span className="material-symbols-outlined">mail</span></button>
                <button className="card-action-btn"><span className="material-symbols-outlined">link</span></button>
              </div>
            </div>
            {/* <span class="material-symbols-outlined bg-icon">local_hospital</span> */}
          </>
          : <>
            <span className={`exec-card-label label-${
              position === 'President' 
              ? 'president' 
              : position?.split(' ').includes('Vice-President')  
              ? 'vp'
              : 'others'
              }`}>{position}</span>
            <h3 className="exec-card-title">{holder_name}</h3>
            <p className="card-desc">
              {default_caption}
            </p>
          </>}
    </div>
  );
};

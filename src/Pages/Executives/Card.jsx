import { useContext } from 'react';
import './Card.css';
import { GenContext } from '../../MyContexts/GenContexts';


export default function Card({ details, pos }) {

  const {members} = useContext(GenContext)

  const {
    position,
    holder_name,
    custom_caption,
    default_caption
  } = details || {}

  return (
    <div class={`exec-card card-${position === 'President' ? 'president' : position === 'Vice-President 1' || position === 'Vice-President 2' ? 'medium' : 'small'}`}
    >
      <div class="exec-card-img-container">
        <img class="exec-card-img"
          data-alt=''
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgxtjHJro4ZGgnSVeOpMRGIA9ZjNmYZ-axTJBq8_m8ZYVSrkHzmIMY9oVwouSlDkXkcvmiOL6eK7UfxoDpKLYrsKP93rWwzlQNUQmNDzAIR77oWI_xllKBC1yYpzrK4xID2Kby9u-2dDaf3oBkizyiJnMEXn_o6pwTTSuE-WJ8F6w47Lo1oScQeIAaK-NvN5t2eWCBYzdveG3TNGtMK0NuTYAQT_S2AJGDlZxG36JHt2ifkNqvKzM6" />
      </div>
      {
        position === 'President'
          ? <>
            <div class="card-content">
              <span class="exec-card-label">{position}</span>
              <h2 class="exec-card-title">{holder_name}</h2>
              <p class="exec-card-desc">
                {custom_caption || default_caption}
              </p>
              <div class="card-actions">
                <button class="card-action-btn"><span class="material-symbols-outlined">mail</span></button>
                <button class="card-action-btn"><span class="material-symbols-outlined">link</span></button>
              </div>
            </div>
            {/* <span class="material-symbols-outlined bg-icon">local_hospital</span> */}
          </>
          : <>
            <span class={`exec-card-label label-${
              position === 'President' 
              ? 'president' 
              : position.split(' ').includes('Vice-President')  
              ? 'vp'
              : 'others'
              }`}>{position}</span>
            <h3 class="exec-card-title">Dr. {holder_name}</h3>
            <p class="card-desc">
              {default_caption}
            </p>
          </>}
    </div>
  );
};
import { useContext, useRef } from 'react';
//import close from '../assets/icons/close-2.svg';
import './Modal.css';
import { UiContext } from '../MyContexts/UiContext';

export default function Modal() {

 const { modal, hideModal } = useContext(UiContext)

 const modalMainElem = useRef(null)

 function fallback() {
  return 
 }

 return (
  <div
   className='modal-underlay'
   onClick={(e) => {
    if (!modalMainElem.current.contains(e.target)) {
     hideModal()
    }
   }}
  >
   <div ref={modalMainElem} class="custom-modal">
    <div class="custom-modal-header">
     {modal.header}
    </div>
    <div class="custom-modal-body">
     {modal.body}
    </div>
    <div class="custom-modal-footer">
     <button
      class="btn-outline"
      onClick={() => {
       hideModal()
      }}
     >
      {modal.closeBtnText || 'Cancel'}
     </button>
     <button type='submit' style={{ backgroundColor: 'var(--primary)', color: 'white' }} class="btn"
      onClick={modal.action || fallback}
      form={modal.id || ''}
     >{modal.actionBtnText}</button>
    </div>
   </div>
  </div>
 );
};
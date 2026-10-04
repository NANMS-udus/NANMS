import { useContext } from 'react';
import { UiContext } from '../MyContexts/UiContext';
import './Portal.css';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import Popup from './Popup';
import DetModal from '../Pages/Portal/Dashboard/StudyDir/DetModal';

export default function Portal() {
 const { 
  popup, 
  modal,
  detModal,
 } = useContext(UiContext)

 return createPortal(
  <>
   { modal.show && <Modal /> }
   { popup.show && <Popup /> }
   { detModal.show && <DetModal />}
  </>, document.getElementById('portal')
 )
};
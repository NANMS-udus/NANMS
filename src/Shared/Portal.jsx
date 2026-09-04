import { useContext } from 'react';
import { UiContext } from '../MyContexts/UiContext';
import './Portal.css';
import { createPortal } from 'react-dom';
import Modal from './Modal';
import Popup from './Popup';

export default function Portal() {
 const { 
  popup, 
  modal,
 } = useContext(UiContext)

 return createPortal(
  <>
   { modal.show && <Modal /> }
   { popup.show && <Popup /> }
  </>, document.getElementById('portal')
 )
};
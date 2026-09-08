import { createContext, useState } from "react";


export const UiContext = createContext(null)

export function UiCntxt({ children }) {

  const [popup, setPopup] = useState({ show: false, hide: true, autoHide: true, msg: '', msgType: '' })

  const [modal, setModal] = useState({
    show: false,
    header: '',
    body: null,
    action: null,
    actionBtnText: '',
    closeBtnText: ''
  })

  function showPopup(msgType, msg, autoHide = true) {
    setPopup({
      show: true,
      hide: false,
      autoHide,
      msg,
      msgType
    })
  }

  function hidePopup() {
    setPopup({
      show: true,
      hide: true,
      autoHide: true,
      msg: '',
      msgType: ''
    })
  }

  function removePopup() {
    setPopup({
      show: false,
      hide: true,
      autoHide: true,
      msg: '',
      msgType: ''
    })
  }

  function hideModal() {
    setModal({ show: false, header: '', body: null, action: null })
  }

  return (
    <UiContext.Provider value={{
      popup,
      showPopup,
      hidePopup,
      removePopup,
      modal,
      setModal,
      hideModal
    }}>
      {children}
    </UiContext.Provider>
  )
}
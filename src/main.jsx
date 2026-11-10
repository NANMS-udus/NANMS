
if (typeof window !== 'undefined' && !window.crypto.randomUUID) {
  window.crypto.randomUUID = function () {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16)
    );
  };
}

import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { myRouter } from './Router.jsx'
import Auth from './MyContexts/AuthContext.jsx'
import GenCntxt from './MyContexts/GenContexts.jsx'
import Portal from './Shared/Portal.jsx'
import { UiCntxt } from './MyContexts/UiContext.jsx'
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js'

dayjs.extend(duration)

createRoot(document.getElementById('root')).render(
  <UiCntxt>
    <Auth>
      <GenCntxt>
        <RouterProvider router={myRouter} />
        <Portal />
      </GenCntxt>
    </Auth>
  </UiCntxt>
)

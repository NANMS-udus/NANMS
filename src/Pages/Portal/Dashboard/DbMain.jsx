import { useContext } from 'react';
import DbHeader from './DbHeader';
import DbLftCol from './DbLftCol';
import './DbMain.css';
import DbQuickActions from './DbQuickActions';
import DbRtCol from './DbRtCol';
import { AuthContext } from '../../../MyContexts/AuthContext';

export default function DbMain() {

 const {myDetails} = useContext(AuthContext)

return (
 <main class="container db-main">
     <DbHeader myDetails={myDetails}/>
     <DbQuickActions />
     <section class="db-main-grid">
      <DbLftCol myDetails={myDetails} />
      <DbRtCol />
     </section>
 </main>
);
};
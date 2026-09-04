import Card from './Card';
import './Main.css';
import { excoPositions } from '../../Utils/data';
import { Fragment, useContext, useEffect } from 'react';
import { GenContext } from '../../MyContexts/GenContexts'

export default function Main() {

  const {excos} = useContext(GenContext)

  useEffect(() => {
    console.log(excos);
    
  }, [excos])
  
 return (
  <main className='main-exec'>
   <header>
    <h1>Central Executive Council</h1>
    <p class="header-desc">Meet the dedicated scholar-physicians leading the National Association of Niger State
     Medical Students through academic excellence and professional development.</p>
   </header>
   <div class="exec-grid">
    {
      excoPositions.map((pos) => {

        const details = excos?.find((exco) => exco.position === pos.name)

        console.log(details);

        return (
          <Fragment key={crypto.randomUUID()}>
            {
              details?.id
              ? <Card details={details}/>
              : <Card details={pos.defaultDet} />
            }
          </Fragment>
        )
        
      })
    }
   </div>
  </main>
 );
};
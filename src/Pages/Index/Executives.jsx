import { Fragment, useContext } from 'react';
import './Executives.css';
import { GenContext } from '../../MyContexts/GenContexts'
import { Link } from 'react-router';
import { excoPositions } from '../../Utils/data';

export default function Executives() {

  const { excos, members } = useContext(GenContext)

  console.log(excos, members);
  


  return (
    <section id="executives">
      <div className="home-section-header">
        <h2 className="text-headline-lg">Central Executive Council</h2>
        <p className="text-secondary text-body-md">The dedicated team leading the association towards greater
          heights in academic and administrative excellence.</p>
      </div>
      <div className="home-bento-grid">
        {
          excos.length
            ? excos?.map((exco) => {

              const { position } = exco

              const excoIsImprt = position === 'President' || position.split(' ').includes('Vice-President') || position === 'SCOMEH-D'

              const otherDet = members.all.find((mem) => mem.id === exco.id)

              console.log(otherDet);
              

              return (
                <Fragment key={crypto.randomUUID()}>

                  {
                    excoIsImprt
                      ? <div className={`bento-card bento-item-${position === 'President'
                          ? 'large'
                          : 'standard'
                        }`}
                      >
                        <div className={`avatar avatar-${
                          position === 'President'
                          ? 'lg'
                          : 'md'
                          }`}>
                          <img data-alt={exco.holder_name}
                            src={otherDet?.avatar_url} />
                        </div>
                        <div className="exec-info">
                          <span className={`role-badge role-badge-${
                          position === 'President'
                          ? 'prinary'
                          : 'secondary'
                          }`}>{position}</span>
                          {
                            position === 'President'
                            ? <h3 className="exec-name text-headline-md">Dr. (In-View) {exco.holder_name}</h3>
                            : <h4 className="exec-name-std font-semibold">Dr {exco.holder_name}</h4>
                          }
                          <p className="text-body-md text-secondary"></p>
                        </div>
                      </div>
                      : ''
                  }
                </Fragment>
              )
            })
            : <h2 style={{textAlign: 'center', color: 'gray'}}>No Executives found</h2>
        }
      </div>
      <div 
      style={{
        display: 'flex',
        justifyContent: 'center'
      }}
      >
      <Link 
      to={'/executives'}
      style={{
        textAlign: 'center',
        color: 'var(--primary)',
        textDecoration: 'underline',
        marginTop: '26px'
      }}
      >
        See all EXCOs
      </Link>
      </div>
    </section>
  );
};
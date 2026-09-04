import { Fragment, useContext, useEffect, useState } from 'react';
import MemberCard from './MemberCard';
//import './MembersPrev.css';
import UtilityBar from './UtilityBar';
import { GenContext } from '../../MyContexts/GenContexts';
import right from '../../assets/icons/chevron-right.svg'
import left from '../../assets/icons/chevron-left.svg'

export default function MembersPrev({ setShowDetails }) {

  const { members } = useContext(GenContext)

  const [membersByPage, setMembersByPage] = useState([])

  const [pageNo, setPageNo] = useState(1)



  useEffect(() => {


    function groupMembersByPage() {
      console.log(members);


      const membersByPage = members.displayed.reduce((acc, itm) => {

        if (!acc.length || acc[(acc.length - 1)].length >= 4) {
          acc.push([])
        }

        acc[(acc.length - 1)].push(itm)

        return acc
      }, [])

      console.log(membersByPage);

      setMembersByPage(membersByPage)
    }

    groupMembersByPage()
  }, [members])

  return (
    <>
      <div className="page-header">
        <h1 className="text-headline-lg text-primary">Members of the Association</h1>
        <p className="body-lg text-secondary">Connect with medical students across different levels and from different LGAs. Search the directory to find colleagues and build your professional network.</p>
      </div>
      <UtilityBar />
      {

        members.displayed.length
          ? <div className="members-grid">
            {
              membersByPage[pageNo - 1]?.map((m) => {
                return (
                  <MemberCard
                    key={crypto.randomUUID()}
                    details={m}
                    setShowDetails={setShowDetails}
                  />
                )
              })
            }
          </div>
          : <div
            className='text-headline-lg'
            style={{
              textAlign: 'center',
              color: 'var(--on-secondary-container)',
              marginBottom: '30px'
            }}
          >No members found
          </div>
      }
      <div className="pagination">
        <button
          className="page-btn"
          onClick={() => {
            if (pageNo > 1) {
              setPageNo((prev) => prev - 1)
            }
          }}
        >
          <img src={left} alt="" style={{ width: '20px' }} />
        </button>
        {
          membersByPage.map((pg) => {
            const no = membersByPage.indexOf(pg) + 1

            console.log(no);
            
            return (
              <Fragment key={crypto.randomUUID()}>
                {
                  no >= (pageNo - 1) && no <= (pageNo + 1)
                  ? <button
                  key={crypto.randomUUID()}
                  className={`page-btn label-md ${no === pageNo ? 'active' : ''}`}>
                  {no}
                </button>
                : no === (pageNo + 2) || no === (pageNo + 2)
                ? <span key={crypto.randomUUID()} className="page-dots">...</span>
                : ''
                }
              </Fragment>

            )
          })
        }
        <button
          className="page-btn"
          onClick={() => {
            if (pageNo < membersByPage.length) {
              console.log(pageNo);
              
              setPageNo((prev) => prev + 1)
            }
          }}
        >
          <img src={right} alt="" style={{ width: '20px' }} />
        </button>
      </div>
    </>
  );
};
import { Fragment } from 'react';
import './Pagination.css';
import right from '../assets/icons/chevron-right.svg'
import left from '../assets/icons/chevron-left.svg'

export default function Pagination({ target, pageNo, setPageNo }) {
  return (
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
        target?.map((pg) => {
          const no = target.indexOf(pg) + 1

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
          if (pageNo < target.length) {
            console.log(pageNo);

            setPageNo((prev) => prev + 1)
          }
        }}
      >
        <img src={right} alt="" style={{ width: '20px' }} />
      </button>
    </div>
  );
};
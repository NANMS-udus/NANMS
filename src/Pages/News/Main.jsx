import { useContext, useState } from 'react';
import './Main.css';
import NewsCard from './NewsCard';
import RightSidebar from './RightSidebar';
import { GenContext } from '../../MyContexts/GenContexts';
import right from '../../assets/icons/chevron-right.svg'
import left from '../../assets/icons/chevron-left.svg'
import { UiCntxt } from '../../MyContexts/UiContext';

export default function Main() {

  const { news } = useContext(GenContext)

  const [searchResult, setSearchResult] = useState([])

  const [pageNo, setPageNo] = useState(1)

  const displayed = searchResult.length
    ? searchResult
    : news

  const newsByPage = displayed?.reduce((acc, itm) => {
    if (!acc.length || acc[acc.length - 1].length >= 4) {
      acc.push([])
    }

    acc[acc.length - 1].push(itm)
    return acc
  }, [])

  return (
    <main class="container news-main-grid">
      {
        news.length
          ? <div class="news-cards">
            {
              newsByPage[pageNo - 1].map((n) => {
                return <NewsCard key={crypto.randomUUID()} details={n} />
              })
            }
            <div class="pagination">
              <img
                src={left}
                class="page-btn"
                onClick={() => {
                  if (pageNo > 1) {
                    setPageNo((prev) => prev - 1)
                  }
                }}
              />
              {
                newsByPage.map((page) => {
                  const index = newsByPage.indexOf(page) + 1

                  return (
                    index > (pageNo - 2) && index < (pageNo + 2)
                      ? <button key={crypto.randomUUID()} class={`page-btn ${index === pageNo ? 'active' : ''}`}>{index}</button>
                      : index === pageNo + 2 || index === pageNo - 2
                        ? <span
                          style={{
                            border: '1px solid var(--border-color)',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            justifyContent: 'center'
                          }}
                          key={crypto.randomUUID()}
                        >
                          ...
                        </span>
                        : ''
                  )
                })
              }
              <img
                src={right}
                class="page-btn"
                onClick={() => {
                  if (pageNo < newsByPage.length) {
                    setPageNo((prev) => prev + 1)
                  }
                }}
              />
            </div>
          </div>
          : <h2 style={{ textAlign: 'center', color: 'grey', paddingTop: '60px' }}>No news yet</h2>
      }
      <RightSidebar displayed={displayed} setSearchResult={setSearchResult} />

    </main>
  );
};
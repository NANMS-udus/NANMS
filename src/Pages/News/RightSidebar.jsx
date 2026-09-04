import { useContext, useEffect, useState } from 'react';
import './RightSidebar.css';
import { GenContext } from '../../MyContexts/GenContexts';
import dayjs from 'dayjs';
import { UiContext } from '../../MyContexts/UiContext';

export default function RightSidebar({ displayed, setSearchResult }) {

  const { news } = useContext(GenContext)

  const { setPopup } = useContext(UiContext)
  

  const [searchProps, setSearchProps] = useState([])

  useEffect(() => {
    function searchNews() {
      let result = []

      const target = news

      searchProps.forEach(sp => {
        if (sp.prop === 'headline') {
          result = target?.filter((n) => {
            return n.headline.toLowerCase().split(' ').includes(sp.value.toLowerCase())
          })
        }

        if (sp.prop === 'cat') {
          result = target.filter((n) => {
            return n.category.includes(sp.value)
          })
        }

      });

      if (result.length) {
        setSearchResult(result)
      } else {
        setPopup((p) => {
          return {
            ...p,
            show: true,
            hide: false,
            msgType: 'err',
            msg: 'No article with these details was found'
          }
        })
        
      }

    }

    if (searchProps.length) {
      searchNews()
    }
  }, [searchProps])

  let categories = []

  news.forEach(n => {
    n.category.forEach((c) => {
      if (categories.includes(c)) {
        categories = [...categories]
      } else {
        categories = [...categories, c]
      }
    })
  });

  const recntPosts = news.filter((n) => {
    return dayjs(n.created_at).isAfter(dayjs().subtract(3, 'day').startOf('day'))
  })


  return (
    <aside class="sidebar">
      <div class="search-box">
        <h3>Search</h3>
        <input
          placeholder="Search news..."
          type="text"
          onChange={(e) => {

            const prpIsPrsnt = searchProps.find((prp) => prp.prop === 'headline')

            if (prpIsPrsnt) {

              setSearchProps((prev) => {
                const n = prev

                n.splice(prev.indexOf(prpIsPrsnt))

                return n
              })
            }
            setSearchProps((prev) => {
              return [...prev, {
                prop: 'headline',
                value: e.target.value
              }]
            })
          }}
        />
      </div>
      <div>
        <h3>Categories</h3>
        <ul class="categories-list">
          {
            categories.length
              ? categories.map((c) => {
                const isActive = searchProps.find((sp) => sp.value === c)
                return (
                  <li
                    className={isActive ? 'using' : ''}
                    key={crypto.randomUUID()}
                    onClick={() => {

                      const prpIsPrsnt = searchProps.find((prp) => prp.prop === 'cat')

                      if (prpIsPrsnt) {

                        setSearchProps((prev) => {
                          const n = prev

                          n.splice(prev.indexOf(prpIsPrsnt))

                          return n
                        })
                      }
                      setSearchProps((prev) => {
                        return [...prev, {
                          prop: 'cat',
                          value: c
                        }]
                      })
                    }}
                  >
                    <span>{c}</span>
                    <span class="cat-count">
                      {
                        news.filter((n) => {
                          return n.category.includes(c)
                        }).length
                      }
                    </span>
                  </li>)
              })
              : <h4 style={{ color: 'gray', textAlign: 'center' }}>No categories found</h4>
          }
        </ul>
      </div>
      <div>
        <h3>Recent Posts</h3>
        {
          recntPosts.length
            ? recntPosts.map((rp) => {
              return (
                <div class="recent-post">
                  <img alt="Exam Schedules"
                    src={rp.cover_pic_url} />
                  <div>
                    <h4>{rp.headline}</h4>
                    <span>{dayjs(rp.created_at).format('MM D, YYYY')}</span>
                  </div>
                </div>
              )
            })
            : <h4 style={{ color: 'gray', textAlign: 'center' }}>No recent posts</h4>
        }
      </div>
    </aside>
  );
};
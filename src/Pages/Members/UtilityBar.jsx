import { useContext, useRef } from 'react';
import './UtilityBar.css';
import { GenContext } from '../../MyContexts/GenContexts';
import { LGAs } from '../../Utils/data';
import search from '../../assets/icons/search.svg'
import useSearchByParams from '../../Utils/useSearchByParams';

export default function UtilityBar() {

 const { members, setMembers } = useContext(GenContext)

 const lgaFilterElem = useRef(null)

 const nameSearchElem = useRef(null)

 const levelFilterElem = useRef(null)

 function searchByParams(target, params) {

  let finalArray = target

  params.forEach(param => {
   if (param.name === 'name') {
    const strictSearch = finalArray.filter((obj) => {
     return obj.fullname === param.value
    })

    const looseSearch = finalArray.filter((obj) => {
     console.log(obj.fullname.split(' ').includes(param.value))

     return obj.fullname.toLowerCase().split(' ').includes(param.value.toLowerCase())
    })

    console.log(strictSearch, looseSearch);

    finalArray = strictSearch.length ?
     strictSearch
     : looseSearch.length
      ? looseSearch
      : finalArray
   } else if (param.value === 'all' || !param.value) {
    finalArray
   } else {
    finalArray = finalArray.filter((obj) => {
     console.log(obj[param.name]);

     return obj[param.name] === param.value
    })
   }
  });

  console.log(finalArray);

  return finalArray
 }

 return (
  <div className="utility-bar">
   <div className="search-container">
    <img
    className='search-icon'
     style={{ width: '20px' }}
     src={search}
     alt=""
     onClick={() => {
      const searchParams = [
       {
        name: 'name',
        value: nameSearchElem.current.value
       },
       {
        name: 'LGA',
        value: lgaFilterElem.current.value
       },
       {
        name: 'level',
        value: levelFilterElem.current.value
       }
      ]

      const searchResult = searchByParams(members.all, searchParams)

      setMembers((prev) => {
       return { ...prev, displayed: searchResult }
      })
     }}
    />
    <input
     ref={nameSearchElem}
     className="search-input"
     placeholder="Search by name..."
     type="text"
    />
   </div>
   <div className="filters-container">
    <select defaultValue={'all'} ref={lgaFilterElem} className="filter-select">
     <option value="all">All LGAs</option>
     {
      LGAs.map((LGA) => {
       return <option key={crypto.randomUUID()} value={LGA}>{LGA}</option>
      })

     }
    </select>
    <select defaultValue={'all'} ref={levelFilterElem} className="filter-select">
     <option value="all">All Levels</option>
     <option value="100 Level">100 Level</option>
     <option value="200 Level">200 Level</option>
     <option value="300 Level">300 Level (Pre-Clinical)</option>
     <option value="400 Level">400 Level (Clinical)</option>
     <option value="500 Level">500 Level</option>
     <option value="600 Level">600 Level</option>
    </select>
   </div>
  </div>
 );
};
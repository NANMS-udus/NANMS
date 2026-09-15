import './UtilsSection.css';
import search from '../../assets/icons/search.svg'

export default function UtilsSection({ def, target, filterParams, setterFun }) {
 return (
  <div class="filter-panel" id="patrons-filter-panel">
   <div class="filter-search-row">
    <div class="search-input-wrap">
     <img class="search-icon-2" src={search} alt="" />
     <input
      aria-label="Search patrons by name or title"
      class="search-input-2"
      placeholder="Search patrons by name or title..."
      type="text"
      onChange={(e) => {
       const result = target.filter(itm => {
        return itm.name === e.target.value
       })

       if (result.length) {
        setterFun(result)
       }
      }}
     />
    </div>
   </div>
   <div class="filter-wrap">
    {
     filterParams.map(fp => {

      const categories = target.reduce((acc, itm) => {
       if (!acc.includes(itm[fp])) {
        acc.push(itm[fp])
       }

       return acc
      }, [])

      return (

       <select
        class="filter-input"
        id="patrons-pills"
        onChange={(e) => {
         const newVal = e.target.value
         const result = target.filter(itm => {
          return itm[fp] === newVal
         })

         if (newVal === 'all') {
          setterFun(def)
         }

         if (result.length) {
          setterFun(result)
         }
        }}
       >
        <option value="all">All</option>
        {
         categories.map(cat => {
          return (
           <option value={cat}>{cat}</option>
          )
         })
        }
       </select>
      )
     })
    }
   </div>
  </div>
 );
};
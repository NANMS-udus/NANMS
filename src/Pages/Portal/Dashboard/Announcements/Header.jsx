import './Header.css';
import search from '../../../../assets/icons/search.svg'

export default function Header({ intNews, setdisplayed, displayed }) {

 function searchIntNews({ pName, pValue }) {
  let result;

  if (pName === 'text') {
   result = displayed.filter((obj) => {
    return obj.headline.includes(pValue) || obj.body.includes(pValue)
   })
  } else {
   result = displayed.filter((obj) => {
    return obj[pName] === pValue
   })
  }

  if (result) {
   setdisplayed(result)
  }

 }

 return (
  <header class="ann-page-header">
   <h1 class="ann-page-title">Announcements &amp; Notices</h1>
   <p class="ann-page-description">Stay updated with the latest academic schedules, welfare initiatives, and
    official communications from the National Association of Niger State Medical Students.</p>
   <div class="filter-bar">
    <div class="ann-search-container">
     <img className='search-icon' style={{ width: '20px' }} src={search} alt="" />
     <input
      onChange={(e) => {
       searchIntNews({ pName: 'text', pValue: e.target.value })
      }}
      class="ann-search-input"
      placeholder="Search announcements..."
      type="text"
     />
    </div>
    <div class="category-filter-wrapper">
     <select onChange={(e) => {
      searchIntNews({ pName: 'category', pValue: e.target.value })
     }}
      class="category-filter"
      name="" id=""
     >
      <option disabled selected value="">Select Category</option>
      {
       intNews?.map((int) => {
        return <option value={int.category}>{int.category}</option>
       })
      }
     </select>
    </div>
   </div>
  </header>
 );
};
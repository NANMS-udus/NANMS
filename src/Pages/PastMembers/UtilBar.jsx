import './UtilBar.css';
import { pastMembers } from '../../Utils/data';

export default function UtilBar({ sect }) {

 const { searchCats } = pastMembers

 //console.log(patrons, alumni, presidents);


 return (
  <div class="filter-panel" id={`${sect}-filter-panel`}>
   {
    <>
     <div class="filter-search-row">
      <div class="search-input-wrap">
       <svg class="search-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="2" viewbox="0 0 24 24">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
       </svg>
       <input class="search-input" id="patrons-search-input"
        placeholder="Search patrons by name or title..." type="text" />
      </div>
     </div>
     {
      sect !== 'patrons'
       ?
       <select>
        <option value="all">
         All {
          sect === 'presidents'
           ? 'Tenures'
           : sect === 'alumni'
            ? 'Classes'
            : sect
         }
        </option>
        {
         searchCats[sect].map((cat) => {
          return (
           <option value={cat}>
            {cat}
           </option>
          )
         })
        }
       </select>
       : ''
     }
    </>/* sect === 'presidents'
      ?
      <>
       <div class="filter-search-row">
        <div class="search-input-wrap">
         <svg class="search-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
          stroke-width="2" viewbox="0 0 24 24">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
         </svg>
         <input aria-label="Search past presidents by name, hospital, or specialty" class="search-input"
          id="presidents-search-input" placeholder="Search past presidents by name, hospital, or specialty..."
          type="text" />
        </div>
       </div>
       <div class="filter-pill-groups">
        <div class="filter-pills-row" id="presidents-pills">
         <span class="filter-group-label">Tenure:</span>
         <button class="filter-pill active" data-tenure="all" type="button">All Tenures</button>
         <button class="filter-pill" data-tenure="2022–2023" type="button">2022–2023</button>
         <button class="filter-pill" data-tenure="2021–2022" type="button">2021–2022</button>
         <button class="filter-pill" data-tenure="2020–2021" type="button">2020–2021</button>
         <button class="filter-pill" data-tenure="2019–2020" type="button">2019–2020</button>
        </div>
       </div>
      </>
      : sect === 'alumni'
       ?
       <>
        <div class="filter-search-row">
         <div class="search-input-wrap">
          <svg class="search-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
           stroke-width="2" viewbox="0 0 24 24">
           <circle cx="11" cy="11" r="8"></circle>
           <line x1="21" x2="16.65" y1="21" y2="16.65"></line>
          </svg>
          <input aria-label="Search alumni by name, specialty, or hospital" class="search-input"
           id="alumni-search-input" placeholder="Search alumni by name, specialty, or hospital..." type="text" />
         </div>
        </div>
        <div class="filter-pill-groups">
         <div class="filter-pills-row" id="alumni-specialty-pills">
          <span class="filter-group-label">Specialty:</span>
          <button class="filter-pill active" data-specialty="all" type="button">All Specialties</button>
          <button class="filter-pill" data-specialty="cardiology" type="button">Cardiology</button>
          <button class="filter-pill" data-specialty="surgery" type="button">Surgery</button>
          <button class="filter-pill" data-specialty="public-health" type="button">Public Health</button>
          <button class="filter-pill" data-specialty="emergency-medicine" type="button">Emergency Medicine</button>
         </div>
         <div class="filter-pills-row" id="alumni-year-pills">
          <span class="filter-group-label">Class / Year:</span>
          <button class="filter-pill active" data-year="all" type="button">All Classes</button>
          <button class="filter-pill" data-year="2015" type="button">Class of 2015</button>
          <button class="filter-pill" data-year="2016" type="button">Class of 2016</button>
          <button class="filter-pill" data-year="2017" type="button">Class of 2017</button>
          <button class="filter-pill" data-year="2018" type="button">Class of 2018</button>
         </div>
        </div>
       </>
       : '' */
   }
  </div>
 );
};
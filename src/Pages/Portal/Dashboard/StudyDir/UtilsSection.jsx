import './UtilsSection.css';
import search from '../../../../assets/icons/search.svg'

export default function UtilsSection({ studyMats, displayed, setDisplayed }) {

  function searchStudyMats({ pName, pValue }) {
    console.log(displayed);
    
    let result;

    if (pName === 'text') {
      result = displayed.filter((d) => {
        return d.title.includes(pValue) || d.desc.includes(pValue) || d.course.includes(pValue) || d.authur.includes(pValue)
      })
    } else {
      result = displayed.filter((d) => {
        return d[pName] === pValue
      })
    }

    if (result.length) {
      setDisplayed(result)
    }
  }

  return (
    <div class="search-filter-panel">
      <div class="search-input-wrapper">
        <img style={{ width: '20px', position: 'absolute', top: '26%', left: '8px' }} src={search} alt="" />
        <input
          type="text"
          class="stu-search-input"
          placeholder="Search by topic, course title, lecturer, or keyword (e.g., 'Cardiovascular Pathology', 'OSCE', 'Pharmacology')..."
          onChange={(e) => {
            searchStudyMats({
              pName: 'text',
              pValue: e.target.value
            })
          }}
        />
      </div>

      <div class="filter-row">
        <select
          onChange={(e) => {
            searchStudyMats({
              pName: 'course',
              pValue: e.target.value
            })
          }}
          name=""
          id=""
        >
          <option value="">Choose a study course</option>
          {
            studyMats.map((sm) => {
              return <option value={sm.course} >{sm.course}</option>
            })
          }
        </select>
        <select
          onChange={(e) => {
            searchStudyMats({
              pName: 'level',
              pValue: e.target.value
            })
          }}
          name=""
          id=""
        >
          <option value="">Choose a level</option>
          {
            studyMats.map((sm) => {
              return <option value={sm.level} >{sm.level}</option>
            })
          }
        </select>
        <select
          onChange={(e) => {
            searchStudyMats({
              pName: 'material_type',
              pValue: e.target.value
            })
          }}
          name=""
          id=""
        >
          <option value="">Choose study material type</option>
          {
            studyMats.map((sm) => {
              return <option value={sm.material_type} >{sm.material_type}</option>
            })
          }
        </select>
      </div>
    </div>
  );
};
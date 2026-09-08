import Pagination from '../../Shared/Pagination';

export default function PaginationSection({displayTitle, target, pageNo, setPageNo}) {
 return (
  <div
      style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem', padding: '1rem 1.25rem', backgroundColor: '#ffffff',border: '1px solid #e1e8ed', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)',fontSize: '0.875rem'}}>
      <div style={{color: '#536471', fontWeight: '500'}}>
        Showing <span style={{fontWeight: '700', color: '#191c1e'}}>1–4</span> of <span style={{fontWeight: '700', color: '#191c1e'}}>12</span> {displayTitle}
      </div>
      <Pagination target={target} pageNo={pageNo} setPageNo={setPageNo}/>
   
  </div>
 );
};
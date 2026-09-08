import './PymntHistTable.css';

export default function PymntHistTable() {
 return (
  <div class="table-container">
   <div class="table-header">
    <h3 class="font-headline text-headline-md">Payment History</h3>
    <button class="btn-export text-label-md">
     <span class="material-symbols-outlined">download</span> Export
    </button>
   </div>
   <div class="table-scroll">
    <table class="text-body-md">
     <thead>
      <tr class="text-label-md">
       <th>Date</th>
       <th>Description</th>
       <th>Amount</th>
       <th>Status</th>
       <th class="text-right">Action</th>
      </tr>
     </thead>
     <tbody>
      <tr>
       <td>Sep 15, 2022</td>
       <td>2022 Annual Dues</td>
       <td>₦40,000</td>
       <td>
        <span class="status-badge">
         <span class="material-symbols-outlined" style={{fontSize: '14px'}}>check_circle</span>
         Success
        </span>
       </td>
       <td class="text-right">
        <button class="btn-icon" title="Download Receipt">
         <span class="material-symbols-outlined">receipt</span>
        </button>
       </td>
      </tr>
      <tr>
       <td>Sep 10, 2021</td>
       <td>2021 Annual Dues</td>
       <td>₦35,000</td>
       <td>
        <span class="status-badge">
         <span class="material-symbols-outlined" style={{fontSize: '14px'}}>check_circle</span>
         Success
        </span>
       </td>
       <td class="text-right">
        <button class="btn-icon" title="Download Receipt">
         <span class="material-symbols-outlined">receipt</span>
        </button>
       </td>
      </tr>
     </tbody>
    </table>
   </div>
  </div>
 );
};
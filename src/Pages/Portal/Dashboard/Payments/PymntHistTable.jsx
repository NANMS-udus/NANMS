import { useEffect, useState } from 'react';
import './PymntHistTable.css';

export default function PymntHistTable({ paid, pymntHist }) {

  let [completePymntHist, setPymntHist] = useState([])

  useEffect(() => {

    function updateCompPymntHist() {
      setPymntHist([...paid, ...pymntHist])
    }

    updateCompPymntHist()


  }, [paid, pymntHist])

  return (
    <div class="table-container">
      <div class="table-header">
        <h3 class="font-headline text-headline-md">Payment History</h3>
        <button class="btn-export text-label-md" title='Download Payment History'>
          <span class="material-symbols-outlined">download</span> Export
        </button>
      </div>
      <div class="table-scroll">
        {
          completePymntHist.length
            ?
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
                {
                  completePymntHist.map((ph) => {
                    return (
                      <tr>
                        <td>{ph.date}</td>
                        <td>{ph.years.join(', ')} {ph.desc}</td>
                        <td>₦{ph.amount}</td>
                        <td>
                          <span class="status-badge">
                            <span class="material-symbols-outlined" style={{ fontSize: '14px' }}>check_circle</span>
                            {ph.status}
                          </span>
                        </td>
                        <td class="text-right">
                          <button class="btn-icon" title={ph.status === 'Verified' ? "Download Receipt" : 'Check Status'}>
                            <span class="material-symbols-outlined">receipt</span>
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
               {/*  <tr>
                  <td>Sep 15, 2022</td>
                  <td>2022 Annual Dues</td>
                  <td>₦40,000</td>
                  <td>
                    <span class="status-badge">
                      <span class="material-symbols-outlined" style={{ fontSize: '14px' }}>check_circle</span>
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
                      <span class="material-symbols-outlined" style={{ fontSize: '14px' }}>check_circle</span>
                      Success
                    </span>
                  </td>
                  <td class="text-right">
                    <button class="btn-icon" title="Download Receipt">
                      <span class="material-symbols-outlined">receipt</span>
                    </button>
                  </td>
                </tr> */}
              </tbody>
            </table>
            : <h3 style={{ textAlign: 'center', color: 'grey', padding: '20px', }}>
              No details found.
            </h3>
        }
      </div>
    </div>
  );
};
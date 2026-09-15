import { useEffect, useRef, useState } from 'react';
import './PymntCard.css';
import check from '../../../../assets/icons/check-circle.svg'
import dayjs from 'dayjs';

export default function PymntCard({ type, notPaid, verifyPymnt }) {

  console.log(notPaid);

  const uploadElem = useRef(null)

  const namePrevElem = useRef(null)

  const selectYearElem = useRef(null)

  const amtElem = useRef(null)

  const [selectMult, setSelectMult] = useState(false)

  const [years, setYears] = useState([])

  /* const [outstandingBal, setOutstandingBal] = useState(0) */

  const outstandingBal = notPaid.reduce((acc, itm) => {
    console.log(acc + itm.amount);

    return acc + itm.amount
  }, 0)

  useEffect(() => {

  })



  return (
    <div class={`card ${type === 'pymnt-vrfctn' || type === 'bal-cont'
      ? 'col-span-2'
      : ''
      }`}>
      {
        type === 'acc-det'
          ? <>
            <h3 class="font-headline text-headline-md card-header">Account Details</h3>
            <ul class="account-details-list">
              <li class="account-detail-item">
                <span class="account-detail-label">Bank Name</span>
                <span class="account-detail-value">Guaranty Trust Bank (GTB)</span>
              </li>
              <li class="account-detail-item">
                <span class="account-detail-label">Account Number</span>
                <span class="account-detail-value">0123456789</span>
              </li>
              <li class="account-detail-item">
                <span class="account-detail-label">Account Name</span>
                <span class="account-detail-value">NANMS UDUS</span>
              </li>
            </ul>
          </>
          : type === 'pymnt-brkdwn'
            ? <>
              <h3 class="font-headline text-headline-md card-header">Fee Breakdown</h3>
              <ul class="fee-list text-body-md">
                {
                  notPaid.map(np => {
                    return (
                      <li class="fee-item">
                        <span>{np.year} {np.desc}</span>
                        <span>₦{np.amount}</span>
                      </li>
                    )
                  })
                }
                <li class="fee-item total">
                  <span>Total</span>
                  <span>₦{outstandingBal}</span>
                </li>
              </ul>
            </>
            : type === 'bal-cont'
              ? < div class="balance-container">
                <div>
                  <h2 class="font-headline text-headline-md card-header">Outstanding Balance</h2>
                  <div class="balance-info">
                    <div class="balance-amount">
                      <p class="text-label-md">Total Amount Due</p>
                      <p class="font-headline text-display-lg amount">
                        ₦{outstandingBal}
                      </p>
                    </div>
                    <div class="due-date">
                      <p class="text-label-md">Due Date</p>
                      <p class="text-body-md due-date-value">
                        <span class="material-symbols-outlined" style={{ fontSize: '16px' }}>warning</span>
                        {dayjs().endOf('year').format('MMM D, YYYY')}
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div>
         <button class="btn-pay text-label-md">
          <span class="material-symbols-outlined">credit_card</span>
          Pay Now
         </button>
         <p class="secure-note">
          <span class="material-symbols-outlined" style={{ fontSize: '16px' }}>lock</span> Secure payment
          processed via Paystack
         </p>
        </div> */}
              </div>
              : type === 'pymnt-vrfctn'
                ? <>
                  <h3 class="font-headline text-headline-md card-header">Payment Verification</h3>
                  <div class="file-upload-container">
                    <p class="text-body-md" style={{ color: 'var(--color-secondary)', marginBottom: '8px' }}>Upload your
                      payment receipt or transfer evidence for manual verification.</p>
                    <label class="file-input-wrapper">
                      <span class="material-symbols-outlined"
                        style={{ fontSize: '32px', color: 'var(--forest)', marginBottom: '8px', display: 'block' }}>upload_file</span>
                      <span style={{ display: 'block' }} ref={namePrevElem}>

                      </span>
                      <span class="text-body-md">Click to upload or drag and drop</span>
                      <span
                        style={{ display: 'block', fontSize: '12px', color: 'var(--secondary)', marginTop: '4px' }}>PNG,
                        JPG, PDF up to 5MB</span>
                      <input
                        ref={uploadElem}
                        accept=".jpg,.jpeg,.png,.pdf"
                        class="file-input"
                        type="file"
                        onChange={(e) => {
                          e.target.files[0]
                          namePrevElem.current.innerText = e.target.files[0].name
                        }}
                      />
                    </label>
                    <div className='pymnt-info'>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                        <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                          <label className='radio' htmlFor="multiple">
                            <input style={{ position: 'relative', display: 'none' }} type="checkbox" name="multiple" id="multiple" onChange={(e) => {
                              if (!e.target.checked) {
                                setYears([])
                              }
                              setSelectMult(e.target.checked)
                            }} />
                            <img className='check' src={check} alt="" />
                          </label>
                          <label style={{ flex: '1' }} htmlFor="multiple">Select multiple years ?</label>
                        </div>
                        <select
                          ref={selectYearElem}
                          style={{
                            height: '40px',
                            color: 'grey',
                            flex: '1',
                            border: '1px solid #ccbfbf',
                            borderRadius: '8px'
                          }}
                          name="year"
                          id=""
                          onChange={(e) => {
                            if (selectMult && !years.includes(e.target.value)) {
                              setYears((p) => {
                                return [e.target.value, ...p]
                              })
                            } else {
                              setYears([e.target.value])
                            }
                          }}
                        >
                          <option value="" disabled selected>
                            Select the year you are paying for.
                          </option>
                          <option value="2020">2020</option>
                          <option value="2022">2023</option>
                          <option value="2021">2021</option>
                          {
                            notPaid?.map((d) => {
                              return (
                                <option value={d.year}>
                                  {d.year}
                                </option>
                              )
                            })
                          }
                        </select>
                        {
                          selectMult
                            ?
                            <div className='years-disp'>
                              {
                                years?.map((y) => {
                                  return (
                                    <span style={{ backgroundColor: 'gray', padding: '4px 8px', flex: '1', borderRadius: '8px', height: 'max-content' }}>
                                      {y}
                                      <img src="" alt="" />
                                    </span>
                                  )
                                })
                              }
                            </div>
                            : ''
                        }
                      </div>

                      <input ref={amtElem} style={{ padding: '10px', height: '40px', border: '1px solid #ccbfbf', borderRadius: '8px', gridColumn: 'span 2' }} type="number" name="amount" id="amount" min={2000} defaultValue={2000} step={500} />
                    </div>

                    <button
                      onClick={() => {
                        const evidence = uploadElem.current.files[0]

                        const amount = amtElem.current.value

                        const success = verifyPymnt(years, evidence, 'Association Dues', amount)

                        if (success) {
                          amtElem.current.value = 2000

                          uploadElem.current.files = []

                          setYears([])

                          setSelectMult(false)
                        }
                      }}
                      class="btn-submit 
                      text-label-md">
                      Submit Evidence
                    </button>
                  </div>
                </>
                : 'no type chosen'
      }
    </div >
  );
};
import './PymntCard.css';

export default function PymntCard({ type }) {
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
        <span class="account-detail-value">NANSM National Body</span>
       </li>
      </ul>
     </>
     : type === 'pymnt-brkdwn'
      ? <>
       <h3 class="font-headline text-headline-md card-header">Fee Breakdown</h3>
       <ul class="fee-list text-body-md">
        <li class="fee-item">
         <span>Annual Association Fee</span>
         <span>₦20,000</span>
        </li>
        <li class="fee-item">
         <span>Chapter Dues</span>
         <span>₦15,000</span>
        </li>
        <li class="fee-item">
         <span>Welfare Levy</span>
         <span>₦10,000</span>
        </li>
        <li class="fee-item total">
         <span>Total</span>
         <span>₦45,000</span>
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
           <p class="font-headline text-display-lg amount">₦45,000</p>
          </div>
          <div class="due-date">
           <p class="text-label-md">Due Date</p>
           <p class="text-body-md due-date-value">
            <span class="material-symbols-outlined" style={{ fontSize: '16px' }}>warning</span>
            Oct 31, 2023
           </p>
          </div>
         </div>
        </div>
        <div>
         <button class="btn-pay text-label-md">
          <span class="material-symbols-outlined">credit_card</span>
          Pay Now
         </button>
         <p class="secure-note">
          <span class="material-symbols-outlined" style={{ fontSize: '16px' }}>lock</span> Secure payment
          processed via Paystack
         </p>
        </div>
       </div>
       : type === 'pymnt-vrfctn'
        ? <>
         <h3 class="font-headline text-headline-md card-header">Payment Verification</h3>
         <div class="file-upload-container">
          <p class="text-body-md" style={{color: 'var(--color-secondary)', marginBottom: '8px'}}>Upload your
           payment receipt or transfer evidence for manual verification.</p>
          <label class="file-input-wrapper">
           <span class="material-symbols-outlined"
            style={{fontSize: '32px', color: 'var(--forest)', marginBottom: '8px', display: 'block'}}>upload_file</span>
           <span class="text-body-md">Click to upload or drag and drop</span>
           <span
            style={{display: 'block', fontSize: '12px', color: 'var(--secondary)', marginTop: '4px'}}>PNG,
            JPG, PDF up to 5MB</span>
           <input accept=".jpg,.jpeg,.png,.pdf" class="file-input" type="file" />
          </label>
          <button class="btn-submit text-label-md">Submit Evidence</button>
         </div>
        </>
        : 'no type chosen'
   }
  </div >
 );
};
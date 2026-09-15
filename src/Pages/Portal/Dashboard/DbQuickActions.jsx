import './DbQuickActions.css';
import edit from '../../../assets/icons/edit-profile.svg'
import wallet from '../../../assets/icons/wallet.svg'
import idCard from '../../../assets/icons/id-card.svg'
import book from '../../../assets/icons/book.svg'
import { Link } from 'react-router';

export default function DbQuickActions() {
  return (
    <section class="quick-actions">
      <Link
        class="action-card"
        to={'edit-profile'}
      >
        <img style={{width: '28px', marginBottom: '14px'}} src={edit} alt="" />
        <span class="font-label-md text-on-surface">Update Profile</span>
      </Link>
      <Link 
      class="action-card"
      to={'payments'}
      >
      <img style={{width: '28px', marginBottom: '14px'}} src={wallet} alt="" />
        <span class="font-label-md text-on-surface">Pay Dues</span>
      </Link>
      <button class="action-card">
      <img style={{width: '28px', marginBottom: '14px'}} src={idCard} alt="" />
        <span class="font-label-md text-on-surface">Download ID</span>
      </button>
      <button class="action-card">
      <img style={{width: '28px', marginBottom: '14px'}} src={book} alt="" />
        <span class="font-label-md text-on-surface">Study Materials</span>
      </button>
    </section>
  );
};
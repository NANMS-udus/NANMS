import { Link } from 'react-router';
import './SideNav.css';
import { useContext } from 'react';
import { AuthContext } from '../MyContexts/AuthContext';
import close from '../assets/icons/close.svg'
import home from '../assets/icons/home.svg'
import about from '../assets/icons/about.svg'
import exec from '../assets/icons/exec.svg'
import news from '../assets/icons/news.svg'
import members from '../assets/icons/members.svg'
import contact from '../assets/icons/contact.svg'
import start from '../assets/icons/start.svg'
import login from '../assets/icons/login-3.svg'
import help from '../assets/icons/help.svg'
import premium from '../assets/icons/premium-1.svg'


export default function SideNav({ currentPage, showSideNav, setShowSideNav }) {

  const { signOut } = useContext(AuthContext)

  return (
    <nav className={`side-nav ${showSideNav ? 'show' : ''}`} >
      <div className='close-icon-container'>
        <img
          className='close-icon'
          src={close}
          alt=""
          onClick={() => {
            setShowSideNav(false)
          }}
        />
      </div>
      <div className="side-nav-links-container">
        <Link
          to={'/'}
          className={`side-nav-link ${currentPage === 'home' ? 'current' : ''}`}
        >
          <img src={home} alt="" />
          <span>Home</span>
        </Link>
        <Link
          to={'/about'}
          className={`side-nav-link ${currentPage === 'about' ? 'current' : ''}`}
        >
          <img src={about} alt="" />
          <span>About Us</span>
        </Link>
        <Link
          to={'/executives'}
          className={`side-nav-link ${currentPage === 'exec' ? 'current' : ''}`}
        >
          <img src={exec} alt="" />
          <span>Executives</span>
        </Link>
        <Link
          to={'/patrons-alumni'}
          className={`side-nav-link ${currentPage === 'p&a' ? 'current' : ''}`}
        >
          <img src={premium} alt="" />
          <span>Patrons & Alumni</span>
        </Link>
        <Link
          to={'/news'}
          className={`side-nav-link ${currentPage === 'news' ? 'current' : ''}`}
        >
          <img src={news} alt="" />
          <span>News</span>
        </Link>
        <Link
          to={'/members'}
          className={`side-nav-link ${currentPage === 'members' ? 'current' : ''}`}
        >
          <img src={members} alt="" />
          <span>Members</span>
        </Link>
        <Link
          to={'/contact'}
          className={`side-nav-link ${currentPage === 'contact' ? 'current' : ''}`}
        >
          <img src={contact} alt="" />
          <span>Contact</span>
        </Link>
      </div>
      <div className='nav-btn-container'>
        {
          currentPage !== 'db' ?
            <Link
              to={
                currentPage === 'login'
                  ? '/contact'
                  : currentPage === 'reg'
                    ? '/members/login'
                    : '/members/registration'
              }
              className="side-nav-btn"
            >
              <img src={
                currentPage === 'reg'
                  ? login
                  : currentPage === 'login'
                    ? help
                    : start
              }
                alt=""
                style={{ width: '20px' }}
              />
              <span>
                {
                  currentPage === 'reg'
                    ? 'Login'
                    : currentPage === 'login'
                      ? 'Help'
                      : 'Get Started'
                }
              </span>

            </Link>
            : <button
              className="side-nav-btn"
              onClick={signOut}
            >
              Logout
            </button>
        }
      </div>
      <div
        className={showSideNav ? 'sidenav-underlay' : ''}
        onClick={() => {
          setShowSideNav(false)
        }}
      ></div>
    </nav>
  );
};
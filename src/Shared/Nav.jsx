import { Link } from "react-router"
import "./Nav.css"
import { useContext } from "react"
import { AuthContext } from "../MyContexts/AuthContext"
import menu from '../assets/icons/menu-1.svg'
import SideNav from "./SideNav"
import logo from '../assets/Logos/logo.jpg'
import { GenContext } from "../MyContexts/GenContexts"

export default function Nav({ currentPage }) {

  const { signOut } = useContext(AuthContext)

  const { showSideNav, setShowSideNav } = useContext(GenContext)

  return (
    <>
      <nav className="navbar container">
        <Link className="nav-brand" to={'/'}> <img src={logo} style={{ width: '20px' }} alt="" /> <span>NANMS-UDUS </span> </Link>
        <div className="nav-links">
          <Link
            title="Home"
            to={'/'}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            title="About"
            to={'/about'}
            className={currentPage === 'about' ? 'active' : ''}
          >
            About Us
          </Link>
          <Link
            title="EXCO"
            to={'/executives'}
            className={currentPage === 'exec' ? 'active' : ''}
          >
            Executives
          </Link>
          <Link
            title="Patrons & Alumni"
            to={'/patrons-alumni'}
            className={currentPage === 'p&a' ? 'active' : ''}
          >
            Patrons & Alumni
          </Link>
          <Link
            title="News"
            to={'/news'}
            className={currentPage === 'news' ? 'active' : ''}
          >
            News
          </Link>
          <Link
            title="Members"
            to={'/members'}
            className={currentPage === 'members' ? 'active' : ''}
          >
            Members
          </Link>
          <Link
            title="Contact"
            to={'/contact'}
            className={currentPage === 'contact' ? 'active' : ''}
          >
            Contact
          </Link>
        </div>
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
              className="btn-primary nav-btn"
              title={
                currentPage === 'login'
                  ? 'Contact'
                  : currentPage === 'reg'
                    ? 'Login'
                    : 'Registration'
              }
            >
              {
                currentPage === 'reg'
                  ? 'Login'
                  : currentPage === 'login'
                    ? 'Help'
                    : 'Get Started'
              }
            </Link>
            : <button
              className="btn-primary nav-btn"
              onClick={signOut}
              title="Logout"
            >
              Logout
            </button>
        }
        <button className="menu-toggle">
          <img
            style={{ width: '20px' }}
            src={
              !showSideNav
                ? menu
                : null
            }
            alt=""
            onClick={() => {
              setShowSideNav((prev) => !prev)
            }}
            title="Menu"
          />
        </button>
      </nav>
      <SideNav
        currentPage={currentPage}
        showSideNav={showSideNav}
        setShowSideNav={setShowSideNav}
      />
    </>
  )
}
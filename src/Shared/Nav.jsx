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
            to={'/'}
            className={currentPage === 'home' ? 'active' : ''}
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className={currentPage === 'about' ? 'active' : ''}
          >
            About Us
          </Link>
          <Link
            to={'/executives'}
            className={currentPage === 'exec' ? 'active' : ''}
          >
            Executives
          </Link>
          <Link
            to={'/patrons-alumni'}
            className={currentPage === 'p&a' ? 'active' : ''}
          >
            Patrons & Alumni
          </Link>
          <Link
            to={'/news'}
            className={currentPage === 'news' ? 'active' : ''}
          >
            News
          </Link>
          <Link
            to={'/members'}
            className={currentPage === 'members' ? 'active' : ''}
          >
            Members
          </Link>
          <Link
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
              className="btn btn-primary nav-btn"
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
              className="btn btn-primary nav-btn"
              onClick={signOut}
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
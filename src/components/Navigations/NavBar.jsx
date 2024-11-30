import OrbsWayLogoIcon from "@assets/icons/orbswayLogo"
import HamburgerMenu from "@assets/icons/hamburgerMenu"
import { useLocation } from "react-router"
import { useSelector } from "react-redux"
import useProfile from "@hooks/useProfile"
import { useEffect } from "react"
import SignInAndSignOutButton from "@components/Common/SignInAndSignOutButton"
import styles from "./NavBar.module.css"
import { Link } from "react-router-dom"
const NavBar = ({ setShowMobileSideBar }) => {
  const { handleGetOwnDetails } = useProfile()
  const { ownDetails } = useSelector((state) => state.profile)

  const location = useLocation()
  
  const menuOpenIconClickHandler = () => {
    setShowMobileSideBar(true)
  }
  useEffect(() => {
    if (!ownDetails) {
      handleGetOwnDetails()
    }
  }, [handleGetOwnDetails])

  return (
    <div className={styles.navBarSection}>
      <Link to="/dashboard">
        <OrbsWayLogoIcon />
      </Link>
      <div className={styles.navLinks}>
        <Link
          to="/contact"
          className={
            styles.navLink +
            " " +
            (location.pathname === "/contact" ? styles.routeActive : null)
          }
        >
          Contact
        </Link>
        <Link
          to="/report"
          className={
            styles.navLink +
            " " +
            (location.pathname === "/report" ? styles.routeActive : null)
          }
        >
          Report
        </Link>

        <SignInAndSignOutButton
          signOutClassName={styles.signoutButton}
          signInClassName={styles.navLink + " " + styles.signInLink}
        />
      </div>


      <div className="md:hidden" onClick={menuOpenIconClickHandler}>
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default NavBar

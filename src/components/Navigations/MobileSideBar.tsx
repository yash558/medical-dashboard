import HamburgerMenuClose from "@assets/icons/hamburgerMenuClose"

import SideBarItem from "@components/Common/SideBarItem"
import styles from "./MobileSideBar.module.css"
import { useSelector } from "react-redux"
const MobileSideBar: React.FC<{ setShowMobileSideBar: (show: boolean) => void }> = ({ setShowMobileSideBar }) => {
  const menuCloseIconClickHandler = () => {
    setShowMobileSideBar(false)
  }
  const { ownDetails } = useSelector((state: any) => state.profile)
  const { firstName } = ownDetails?.details || {}

  return (
    <div className={styles.mobileSideBarSection}>
      <div className={styles.sideBarItems}>
        <div
          className={styles.menuCloseIcon}
          onClick={menuCloseIconClickHandler}
        >
          <HamburgerMenuClose />
        </div>
        <div className={styles.sideBarItems}>

<SideBarItem
  linkClassName={styles.sideBarItem}
  showText={true}
  route="/dashboard"
  linkActiveClassName={styles.linkActive}
/>


<SideBarItem
  linkClassName={styles.sideBarItem}
  showText={true}
  route="/my-account"
  linkActiveClassName={styles.linkActive}
/>
<div className="border-t border-[#C4E2FF] my-4"></div>

<div className="text-xs font-bold text-[--text-gray] tracking-widest uppercase mb-2">Charts</div>
<SideBarItem
  linkClassName={styles.sideBarItem}
  showText={true}
  route="/vision-therapy"
  linkActiveClassName={styles.linkActive}
/>
<SideBarItem
  linkClassName={styles.sideBarItem}
  showText={true}
  route="/contrast-sensitivity"
  linkActiveClassName={styles.linkActive}
/>



<SideBarItem
  linkClassName={styles.sideBarItem}
  showText={true}
  route="/color-sensitivity"
  linkActiveClassName={styles.linkActive}
/>

<SideBarItem
  linkClassName={styles.sideBarItem}
  showText={true}
  route="/visual-acuity"
  linkActiveClassName={styles.linkActive}
/>
<SideBarItem
  linkClassName={styles.sideBarItem}
  showText={true}
  route="/color-vision"
  linkActiveClassName={styles.linkActive}
/>

<div className="border-t border-[#C4E2FF] my-2"></div>
<SideBarItem
  linkClassName={styles.sideBarItem}
  showText={true}
  route="/tests"
  linkActiveClassName={styles.linkActive}
/>



<div className="border-t border-[#C4E2FF] my-2"></div>

<SideBarItem
  linkClassName={styles.sideBarItem}
  showText={true}
  route="/other-apps"
  linkActiveClassName={styles.linkActive}
/>
</div>
      </div>

  
    </div>
  )
}

export default MobileSideBar

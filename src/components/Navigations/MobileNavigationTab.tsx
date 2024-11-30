import SideBarItem from "@components/Common/SideBarItem"
import styles from "./MobileNavigationTab.module.css"

const MobileNavigationTab: React.FC = () => {
  return (
    <div className={styles.mobileNavigationTabSection}>
      <SideBarItem route="/dashboard" showText={true} />

      <SideBarItem route="/manage-patient-vision" showText={true} />

      <SideBarItem route="/manage-appointment" showText={true} />

      <SideBarItem route="/other-apps" showText={true} />

      <SideBarItem route="/my-account" showText={true} />
    </div>
  )
}

export default MobileNavigationTab

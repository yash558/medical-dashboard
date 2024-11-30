import DefaultLayout from "src/layouts/DefaultLayout"
import NavBar from "@components/Navigations/NavBar"
import { useState } from "react"
import DesktopSideBar from "@components/Navigations/DesktopSideBar"
import MobileSideBar from "@components/Navigations/MobileSideBar"
import MobileNavigationTab from "@components/Navigations/MobileNavigationTab"
import styles from "./NavigationPage.module.css"
import backgroundImage from "@assets/Common/background.svg"
const NavigationsPage: React.FC<{
  defaultBackgroundClassName: string
  children: React.ReactNode
}> = ({ defaultBackgroundClassName, children }) => {
  const [showMobileSideBar, setShowMobileSideBar] = useState(false)

  return (
    <>
      <DefaultLayout>
        <NavBar setShowMobileSideBar={setShowMobileSideBar} />

        <div
          className={styles.mainPageAndSideBar + " " + "p-4"}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
            backgroundSize: "contain",
          }}
        >
          <DesktopSideBar />
          <div className={styles.mainPage}>{children}</div>
        </div>

        {showMobileSideBar ? (
          <MobileSideBar setShowMobileSideBar={setShowMobileSideBar} />
        ) : null}

        <MobileNavigationTab />
        <div
          className={
            styles.pageBackgroundWrapper + " " + defaultBackgroundClassName
          }
        >
          <div className={styles.backgroundPartOne}></div>
          <div className={styles.backgroundPartTwo}></div>
        </div>
      </DefaultLayout>
    </>
  )
}

export default NavigationsPage

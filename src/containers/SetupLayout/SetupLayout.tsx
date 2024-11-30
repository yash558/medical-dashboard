import DefaultLayout from "src/layouts/DefaultLayout"
import styles from "../NavigationsPage/NavigationPage.module.css"
import backgroundImage from "@assets/Common/background.svg"
import NavBar from "@components/Navigations/NavBar"
import { useState } from "react"

const SetupLayout = ({ defaultBackgroundClassName, children , className}: { defaultBackgroundClassName: string, children: React.ReactNode , className: string }) => {
  
const [showMobileSideBar, setShowMobileSideBar] = useState(false)

  return (
    <>
      <DefaultLayout>
      <NavBar setShowMobileSideBar={setShowMobileSideBar} />

        <div
          className={styles.mainPageAndSideBar + " " + className}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right", // Ensures the image is placed at the end
            backgroundSize: "contain", // Ensures the image fits within its container
          }}
        >
         
  
          <div className={styles.mainPage}>{children}</div>
        </div>


      
    
      </DefaultLayout>
    </>
  )
}

export default SetupLayout

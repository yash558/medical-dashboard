import DocumentIcon from "@assets/icons/document"
import styles from "./OtherUsefulApps.module.css"
import OtherUsefulAppCard from "./OtherUsefulApp"
import SunIcon from "@assets/icons/sun"
import ColorSwatchIcon from "@assets/icons/colorSwatch"
import ForMoreAppsCard from "./ForMoreApps"
import PersonSittingIcon from "@assets/icons/personSittingIcon"
import ArrowSquareLeftIcon from "@assets/icons/arrowSquareLeft"
import GoBack from "@components/Common/GoBack"
import EyeIcon from "../../assets/icons/eye 2"
import AssistanceSection from "@components/AssitantSection/AssitantSection"

const OtherUsefulApps: React.FC = () => {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.heading}>Other Useful Apps</h1>
        <p className={styles.description}>
          One Place Solution for all your needs, Try other AI-Powered Diagnostic
          Software.
        </p>
        <GoBack className={styles.mobileBackButton}>
          <ArrowSquareLeftIcon />
        </GoBack>
        <h2 className={styles.resourceLibrary}>Other Useful Apps</h2>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.UsefullAppCardsWrapper}>
          <OtherUsefulAppCard
            name="Optics Chart App"
            description="Eye care practice with online chart app to diagnose and test"
            appLink="/"
          >
            <DocumentIcon />
          </OtherUsefulAppCard>
          <OtherUsefulAppCard
            name="Workflow Manager"
            description="Smart and Interactive patient process management system"
            appLink="/"
          >
            <SunIcon />
          </OtherUsefulAppCard>
          <OtherUsefulAppCard
            name="Smartest EHR"
            description="App for pre-treatment to post-treatment. Smartly handle metrics and image"
            appLink="/"
          >
            <ColorSwatchIcon />
          </OtherUsefulAppCard>
          <OtherUsefulAppCard
            name="Telehealth"
            description=" Engage online eye care consultation integrated to eye care tests"
            appLink="/"
          >
            <EyeIcon />
          </OtherUsefulAppCard>
        </div>
        {/* <div className={styles.rightSection}>
          <PersonSittingIcon style={{ width: "100%", height: "100%" }} />
          <ForMoreAppsCard />
        </div> */}
        <AssistanceSection />
      </div>
    </>
  )
}

export default OtherUsefulApps

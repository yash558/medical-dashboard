import PlusIcon from "@assets/icons/plusIcon"
import styles from "./ForMoreApps.module.css"
import ArrowInsideCircleIcon from "@assets/icons/arrowInsideCircle"

const ForMoreAppsCard = ({ headingText = "For more more apps" }) => {
  return (
    <>
      <div className={styles.moreAppsCardWrapper}>
        <div className={styles.content}>
          <h3 className={styles.heading}>{headingText}</h3>
          <h6 className={styles.description}>
            Contact Orbsway support with your suggestion and requirement of
            charts
          </h6>
          <ArrowInsideCircleIcon />
        </div>

        <div className={styles.plusIconWrapper}>
          <PlusIcon />
        </div>
      </div>
    </>
  )
}

export default ForMoreAppsCard

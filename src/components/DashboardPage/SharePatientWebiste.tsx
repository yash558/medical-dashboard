import styles from "./SharePatientWebsite.module.css"
import CopyText from "@components/Common/CopyText"

const SharePatientWebsite: React.FC = () => {
  return (
    <>
      <div className={styles.moreAppsCardWrapper}>
        <div className={styles.content}>
          <div className={styles.headerWrapper}>
            <h3 className={styles.heading}>COPY AND SHARE WEBSITE</h3>
          </div>
          <div className={styles.description}>
            www.orbswaypaitent.com
            <CopyText
              textToBeCopied="www.orbswaypaitent.com"
              tooltipClassName={styles.tooltipClassName}
              customComponent={styles.customComponent}
              iconClassName={styles.iconClassName}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SharePatientWebsite

import OtherUsefulApps from "@components/OtherAppsPage/OtherUsefulApps.tsx"
import styles from "./OtherAppsPage.module.css"
import NavigationsPage from "@containers/NavigationsPage/NavigationPage"
import PageWrapper from "@components/Common/PageWrapper"

const OtherAppsPage: React.FC = () => {
  return (
    <>
      <NavigationsPage defaultBackgroundClassName={styles.defaultBackgroundClassName}>
        <PageWrapper className={styles.otherAppsPage}>
          <OtherUsefulApps />
        </PageWrapper>
      </NavigationsPage>
    </>
  )
}

export default OtherAppsPage

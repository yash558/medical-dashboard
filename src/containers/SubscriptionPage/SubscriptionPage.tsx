
import PageWrapper from "@components/Common/PageWrapper"
import styles from "./SubscriptionPage.module.css"
import Subscription from "@components/SubscriptionPage/Subscription"
import SetupLayout from "@containers/SetupLayout/SetupLayout"

function SubscriptionPage()  {
  return (
    <SetupLayout defaultBackgroundClassName={styles.defaultBackgroundClassName}>
      <PageWrapper className={styles.manageAppointmentPage}>
        <Subscription />
      </PageWrapper>
    </SetupLayout>
  )
}

export default SubscriptionPage

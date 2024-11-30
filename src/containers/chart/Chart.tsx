import NavigationsPage from "@containers/NavigationsPage/NavigationPage"
import PageWrapper from "@components/Common/PageWrapper"
import styles from "./chart.module.css"
import ChartComponent from "@components/chart/chart"

function Chart() {
  return (
    <NavigationsPage defaultBackgroundClassName="bg-[var(--bg-theme-primary)]">
      <PageWrapper className={styles.manageAppointmentPage}>
        <ChartComponent />
      </PageWrapper>
    </NavigationsPage>
  )
}

export default Chart

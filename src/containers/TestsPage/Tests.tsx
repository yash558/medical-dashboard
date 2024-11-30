
import styles from "./tests.module.css"
import NavigationsPage from "@containers/NavigationsPage/NavigationPage"
import PageWrapper from "@components/Common/PageWrapper"
import TestSection from "@components/TestSection/TestSection"

const TestsPage = () => {
  return (
    <>
      <NavigationsPage defaultBackgroundClassName={styles.defaultBackgroundClassName}>
        <PageWrapper className={styles.testsPage}>
          <TestSection />
        </PageWrapper>
      </NavigationsPage>
    </>
  )
}

export default TestsPage

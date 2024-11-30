import NavigationsPage from "@containers/NavigationsPage/NavigationPage"
import PageWrapper from "@components/Common/PageWrapper"
import styles from "./TestPage.module.css"
import TestSection from "@components/Test/Test"

const TestPage = () => {
  return (
    <NavigationsPage
      defaultBackgroundClassName={styles.defaultBackgroundClassName}
    >
      <PageWrapper className={styles.testPage}>
        <TestSection />
      </PageWrapper>
    </NavigationsPage>
  )
}

export default TestPage

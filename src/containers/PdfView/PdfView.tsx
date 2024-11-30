import NavigationsPage from "@containers/NavigationsPage/NavigationPage"
import PageWrapper from "@components/Common/PageWrapper"
import styles from "./PdfView.module.css"
import PdfViewer from "@components/pdfViewer/pdfViewer"
import pdf from "../../assets/demo.pdf"


const fileUrl = "https://drive.google.com/file/d/1i2wgecFcBhz3VZW1c_OXyhLiVdxqz8FE/view";


const PdfView = () => {
  return (
    <NavigationsPage
      defaultBackgroundClassName={styles.defaultBackgroundClassName}
      
    >
      <PageWrapper className={styles.pdfView}>
         <PdfViewer pdfUrl={pdf} />
      </PageWrapper>
    </NavigationsPage>
  )
}

export default PdfView

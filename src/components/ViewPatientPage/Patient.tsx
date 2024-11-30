import { useSelector } from "react-redux"
import { ProfileDetailsWidget, SubscriptionWidget } from "./index"
import { Button } from "@components/Button"
import html2pdf from "html2pdf.js"
import { useRef, useState } from "react"
import { notify } from "src/utils/notify"
import FullpageLoadingState from "@components/Common/FullpageLoadingState"

const Patient = () => {
  const isMobile = window.innerWidth < 1024
  let { patient } = useSelector((state) => state.patient)
  patient = patient?.data[0]
  const profileAndSubscriptionContainerRef = useRef()
  const [isPdfDownloadLoading, setIsPdfDownloadLoading] = useState(false)
  const downloadPdf = () => {
    setIsPdfDownloadLoading(true)
    const element = profileAndSubscriptionContainerRef.current
    var opt = {
      margin: 0.3,
      filename: "patients-overview.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      pagebreak: { mode: ["avoid-all"] },
      jsPDF: {
        unit: "in",
        format: "a3",
        orientation: "landscape",
      },
    }

    if (element) {
      const contactAdminToEditNode = document.querySelector(
        "#contact-admin-to-edit"
      )
      contactAdminToEditNode.style.display = "none"
      html2pdf()
        .from(element)
        .set(opt)
        .save()
        .catch((error) => {
          notify(error.message, "error")
        })
        .finally(() => {
          setIsPdfDownloadLoading(false)
          contactAdminToEditNode.style.display = "block"
        })
    }
  }

  return (
    <>
      <div className="md:py-8 md:px-10 md:bg-[--pure-white] rounded-2xl flex flex-col gap-4">
        <div
          className="flex flex-col lg:flex-row gap-5 3xl:gap-10  mx-4 md:mx-0"
          ref={profileAndSubscriptionContainerRef}
        >
          <ProfileDetailsWidget isMobile={isMobile} data={patient} />
          <SubscriptionWidget isMobile={isMobile} data={patient} />
        </div>
        <Button
          variant="primary"
          className="!text-xs !tracking-widest !font-bold w-max mx-auto md:mr-0"
          onClick={downloadPdf}
        >
          DOWNLOAD PATIENTS OVERVIEW
        </Button>
      </div>
      {isPdfDownloadLoading ? <FullpageLoadingState /> : null}
    </>
  )
}

export default Patient

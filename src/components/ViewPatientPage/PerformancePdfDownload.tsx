import PatientSidebarStats from "./PatientSidebarStats"
import Graphs from "./GraphComponent"
import { useEffect, useRef } from "react"
import html2pdf from "html2pdf.js"
import { notify } from "src/utils/notify"
import FullpageLoadingState from "@components/Common/FullpageLoadingState"
const PerformancePdfDownload = ({
  game,
  handleSelectedExercise,
  profileDetails,
  CurrentExerciseDetails,
  setShowPerformancePdfDownload,
}) => {
  const performanceRef = useRef()
  const downloadPdf = () => {
    const element = performanceRef.current
    var opt = {
      margin: 0.03,
      filename: "performance-report.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      pagebreak: { mode: ["avoid-all", "legacy"] },
      jsPDF: {
        unit: "in",
        format: "a3",
        orientation: "landscape",
      },
    }
    if (element) {
      html2pdf()
        .from(element)
        .set(opt)
        .save()
        .catch((error) => {
          notify(error.message, "error")
        })
        .finally(() => {
          setShowPerformancePdfDownload(false)
        })
    }
  }

  useEffect(() => {
    setTimeout(() => {
      downloadPdf()
    }, 2000)
  }, [])

  return (
    <>
      <FullpageLoadingState />
      <div className="h-[100vh] w-full"></div>
      <div
        className="py-8 px-10 bg-[--pure-white] rounded-2xl flex flex-col [@media(min-width:1800px)]:flex-col gap-10 w-[1550px]"
        ref={performanceRef}
      >
        <Graphs
          game={game}
          handleSelectedExercise={handleSelectedExercise}
          filterSelected="correctness"
          isPdfDownload={true}
        />

        <Graphs
          game={game}
          handleSelectedExercise={handleSelectedExercise}
          filterSelected="accuracyandprecision"
          isPdfDownload={true}
        />

        <Graphs
          game={game}
          handleSelectedExercise={handleSelectedExercise}
          filterSelected="precision"
          isPdfDownload={true}
        />

        <Graphs
          game={game}
          handleSelectedExercise={handleSelectedExercise}
          filterSelected="level"
          isPdfDownload={true}
        />

        <Graphs
          game={game}
          handleSelectedExercise={handleSelectedExercise}
          filterSelected="activity"
          isPdfDownload={true}
        />
        <div className="html2pdf__page-break"></div>
        <PatientSidebarStats
          game={game}
          profileDetails={profileDetails}
          CurrentExerciseDetails={CurrentExerciseDetails}
          setShowPerformancePdfDownload={setShowPerformancePdfDownload}
          showDownloadReportsButton={false}
          rootClassName="[@media(min-width:1800px)]:max-w-none"
        />
      </div>
    </>
  )
}

export default PerformancePdfDownload

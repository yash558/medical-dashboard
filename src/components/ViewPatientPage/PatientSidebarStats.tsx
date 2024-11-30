import { Button } from "@components/Button"
import { DocumentDownloadIcon } from "@assets/icons"
import PatientSideBarStat from "./PatientSideBarStat"
import { cn } from "src/utils/common.helper"
const PatientSidebarStats = ({
  CurrentExerciseDetails,
  game,
  profileDetails,
  sideBarRef,
  setShowPerformancePdfDownload,
  showDownloadReportsButton = true,
  rootClassName,
}) => {
  const downloadReports = () => {
    setShowPerformancePdfDownload(true)
  }
  const calculateTotalTimeSpent = (exercise) => {
    if (!exercise || exercise.scoreHistory.length === 0) {
      return "-"
    }
    return exercise?.scoreHistory.reduce((accumulator, current) => {
      return current.time + accumulator
    }, 0)
  }
  //
  const calculateAverageAccuracy = (exercise) => {
    if (!exercise || exercise.scoreHistory.length === 0) {
      return "-"
    }
    const sumOfAccuracies = exercise?.scoreHistory.reduce(
      (accumulator, current) => {
        return parseFloat(current.accuracy.$numberDecimal) + accumulator
      },
      0
    )
    const average = sumOfAccuracies / exercise.scoreHistory.length
    if (isNaN(average)) {
      return "-"
    }
    return average.toFixed(2)
  }
  //
  const calculateAveragePrecision = (exercise) => {
    if (!exercise) {
      return 0
    }
    const sumOfAccuracies = exercise?.scoreHistory.reduce(
      (accumulator, current) => {
        return parseFloat(current.precision.$numberDecimal) + accumulator
      },
      0
    )
    const average = sumOfAccuracies / exercise.scoreHistory.length
    if (isNaN(average)) {
      return "-"
    }
    return average.toFixed(2)
  }
  return (
    <div
      className={cn(
        "flex flex-col gap-4 md:w-full [@media(min-width:1800px)]:max-w-[324px] mx-4 md:mx-0",
        rootClassName
      )}
      ref={sideBarRef}
    >
      <div className="gap-4 grid grid-cols-patient-stats">
        <PatientSideBarStat
          title="TOTAL TIME SPENT"
          value={calculateTotalTimeSpent(CurrentExerciseDetails)}
        />
        <PatientSideBarStat
          title="CURRENT LEVEL"
          value={
            game
              ? CurrentExerciseDetails?.level ||
                profileDetails?.exercises?.level
              : "-"
          }
        />
        <PatientSideBarStat
          title="OVERALL ACCURACY"
          value={calculateAverageAccuracy(CurrentExerciseDetails)}
        />
        <PatientSideBarStat
          title="CURRENT PRECISION"
          value={calculateAveragePrecision(CurrentExerciseDetails)}
        />
        <PatientSideBarStat title="STRENGTH OF THE EYE" value="75" />
        <PatientSideBarStat title="STRENGTH OF THE EYE" value="75" />
      </div>
      {showDownloadReportsButton ? (
        <Button
          variant="primary"
          className="!text-xs !font-bold tracking-widest"
          onClick={downloadReports}
        >
          <DocumentDownloadIcon className="text-[--pure-white]" />
          DOWNLOAD REPORTS
        </Button>
      ) : null}
    </div>
  )
}

export default PatientSidebarStats

import React, { useState } from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { useSelector } from "react-redux"
import PatientSidebarStats from "./PatientSidebarStats"
import Graphs from "./GraphComponent"
import PerformancePdfDownload from "./PerformancePdfDownload"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const Performance = () => {
  const { patient } = useSelector((state) => state.patient)
  const [filterSelected, setFilterSelected] = useState("correctness")
  const profileDetails = patient?.data[0]
  const [selectedExercise, setSelectedExercise] = useState(() => {
    if (!profileDetails) return null

    const exerciseNames = Object.keys(profileDetails.exercises)
      .filter(
        (item) => profileDetails.exercises[item]?.scoreHistory?.length > 0
      )
      .map((exerciseName) => {
        return { label: exerciseName, id: exerciseName }
      })

    return exerciseNames[0]
  })
  const game = selectedExercise?.label
  const CurrentExerciseDetails = profileDetails?.exercises[game]
  const [showPerformancePdfDownload, setShowPerformancePdfDownload] =
    useState(false)

  const handleSelectedExercise = (e, newValue) => {
    setSelectedExercise(newValue)
  }

  return (
    <>
      <div className="md:py-8 md:px-10 md:bg-[--pure-white] rounded-2xl flex flex-col [@media(min-width:1800px)]:flex-row gap-10 max-w-full">
        <Graphs
          game={game}
          handleSelectedExercise={handleSelectedExercise}
          filterSelected={filterSelected}
          setFilterSelected={setFilterSelected}
        />
        <PatientSidebarStats
          game={game}
          profileDetails={profileDetails}
          CurrentExerciseDetails={CurrentExerciseDetails}
          setShowPerformancePdfDownload={setShowPerformancePdfDownload}
        />
      </div>
      {showPerformancePdfDownload ? (
        <PerformancePdfDownload
          game={game}
          handleSelectedExercise={handleSelectedExercise}
          profileDetails={profileDetails}
          CurrentExerciseDetails={CurrentExerciseDetails}
          setShowPerformancePdfDownload={setShowPerformancePdfDownload}
        />
      ) : null}
    </>
  )
}

export default Performance

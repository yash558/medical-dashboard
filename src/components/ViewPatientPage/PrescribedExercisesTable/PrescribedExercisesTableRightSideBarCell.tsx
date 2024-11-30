import ThreeDotsIcon from "@assets/icons/threeDots"
import styles from "./PrescribedExercisesTableRightSideBarCell.module.css"
import { useState } from "react"
import CrossIcon from "@assets/icons/cross"
const PrescribedExercisesTableRightSideBarCell = ({
  setEditableRows,
  exercise,
  setSelectedExerciseToDelete,
  setShowDeletePrescribedExercise,
}) => {
  const [showPatientOptions, setShowPatientOptions] = useState(false)
  const rightSideBarCellClickHandler = () => {
    setShowPatientOptions((previous) => {
      return !previous
    })
  }
  return (
    <div
      className={styles.rightSideBarCell}
      onClick={rightSideBarCellClickHandler}
    >
      {showPatientOptions ? <CrossIcon /> : <ThreeDotsIcon />}

      {showPatientOptions ? (
        <div className={styles.patientOptions}>
          <button
            onClick={() => {
              setEditableRows((previous) => {
                return { ...previous, [exercise.exerciseName]: "yes" }
              })
            }}
            className={styles.patientOption + " " + styles.viewPatient}
          >
            Edit
          </button>

          <button
            onClick={() => {
              setShowDeletePrescribedExercise(true)
              setSelectedExerciseToDelete(() => {
                const newSet = new Set()
                newSet.add(exercise.exerciseName)
                return newSet
              })
            }}
            className={styles.patientOption + " " + styles.viewPatient}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default PrescribedExercisesTableRightSideBarCell

import { TableCell } from "@mui/material"
import { CheckBoxCheckedIcon, CheckBoxUncheckedIcon } from "@assets/icons"
import TableRow from "@mui/material/TableRow"
import styles from "./PrescribedExercisesTable.module.css"
import { DeleteIcon, PenIcon } from "@assets/icons"
import { Checkbox } from "@mui/material"
import { MinusCircleIcon } from "@assets/icons"
import { AddCircleIcon } from "@assets/icons/AddCircle"
import ArrowRightInsideCircle from "@assets/icons/arrowRightInsideCircle"
import { Button } from "@components/Button"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { EditOpacity } from "../EditOpacity"
import useExercise from "@hooks/useExercise"
import usePatient from "@hooks/usePatient"
import { useSelector } from "react-redux"

const PrescribedExercisesTableRow = ({
  exercise,
  patientData,
  editableRows,
  setEditableRows,
  setSelectedExercisesToDelete,
  setSelectedExerciseToDelete,
  setShowDeletePrescribedExercise,
}) => {
  const [exerciseDetails, setExerciseDetails] = useState(
    initializeExerciseDetails
  )
  const { isUpdateExerciseOtlLoading } = useSelector((state) => {
    return state.exercise
  })
  const { handleGetSinglePatient } = usePatient()
  const { handleUpdateExerciseOtl } = useExercise()
  const [searchParams] = useSearchParams()
  const patientId = searchParams.get("_id")
  const [showEditOpacity, setShowEditOpacity] = useState(false)
  const isEditable =
    editableRows && editableRows[exercise.exerciseName] === "yes"
  const tableBodyCellStyles = {
    color: "var(--quaternary-black)",
    fontWeight: "400",
    fontSize: "12px",
    lineHeight: "16px",
    padding: "0px",
    height: "42px",
    "@media (max-width:823px)": {
      minWidth: "150px",
    },
    minWidth: "250px",
  }

  function initializeExerciseDetails() {
    if (exercise) {
      if (
        exercise.level &&
        exercise.time &&
        exercise?.opacity1 &&
        exercise.opacity2
      ) {
        return {
          exerciseName: exercise.exerciseName,
          level: exercise.level,
          time: exercise.time,
          opacity1: Math.floor(
            parseFloat(exercise?.opacity1?.$numberDecimal) * 100
          ),
          opacity2: Math.floor(
            parseFloat(exercise.opacity2?.$numberDecimal) * 100
          ),
        }
      } else {
        return {
          exerciseName: exercise.exerciseName,
          level: patientData.exercises.level,
          time: patientData.exercises.time,
          opacity1: Math.floor(
            parseFloat(patientData?.exercises?.opacity1?.$numberDecimal) * 100
          ),
          opacity2: Math.floor(
            parseFloat(patientData?.exercises?.opacity2?.$numberDecimal) * 100
          ),
        }
      }
    }
    return {}
  }

  const timePlusButtonClickHandler = () => {
    if (isEditable) {
      setExerciseDetails((previous) => {
        const time = Math.min(10, previous.time + 1)
        return { ...previous, time }
      })
    }
  }

  const timeMinusButtonClickHandler = () => {
    if (isEditable) {
      setExerciseDetails((previous) => {
        const time = Math.max(1, previous.time - 1)
        return { ...previous, time }
      })
    }
  }

  const levelPlusButtonClickHandler = () => {
    if (isEditable) {
      setExerciseDetails((previous) => {
        const level = Math.min(6, previous.level + 1)
        return { ...previous, level }
      })
    }
  }

  const levelMinusButtonClickHandler = () => {
    if (isEditable) {
      setExerciseDetails((previous) => {
        const level = Math.max(1, previous.level - 1)
        return { ...previous, level }
      })
    }
  }
  const closeEditOpacity = () => {
    setShowEditOpacity(false)
  }

  const updateOpacities = (opacities) => {
    setExerciseDetails((previous) => {
      return { ...previous, ...opacities }
    })
  }

  const UpdateExerciseOtlSuccess = () => {
    handleGetSinglePatient({ _id: patientId })
    setEditableRows((previous) => {
      return { ...previous, [exercise.exerciseName]: "no" }
    })
  }
  return (
    <>
      {showEditOpacity && isEditable ? (
        <EditOpacity
          onClose={closeEditOpacity}
          onApply={updateOpacities}
          initialOpacities={exerciseDetails}
        />
      ) : null}
      <TableRow key={exercise.exerciseName}>
        <TableCell
          align="left"
          sx={{
            ...tableBodyCellStyles,
            width: "72px",
            minWidth: "unset !important",
          }}
        >
          <div className={styles.exerciseCheckBox}>
            <Checkbox
              onChange={(event) => {
                if (event.target.checked) {
                  setSelectedExercisesToDelete((previous) => {
                    const newSet = new Set(previous)
                    newSet.add(event.target.value)
                    return newSet
                  })
                } else {
                  setSelectedExercisesToDelete((previous) => {
                    const newSet = new Set(previous)
                    newSet.delete(event.target.value)
                    return newSet
                  })
                }
              }}
              value={exercise.exerciseName}
              icon={<CheckBoxUncheckedIcon className={"text-[#D0D5DD]"} />}
              checkedIcon={
                <CheckBoxCheckedIcon
                  fill="var(--primary-blue)"
                  stroke="var(--pure-white)"
                />
              }
            />
          </div>
        </TableCell>
        <TableCell component="th" scope="row" sx={tableBodyCellStyles}>
          <div className={styles.tableCellContent}>{exercise.exerciseName}</div>
        </TableCell>
        <TableCell align="left" sx={tableBodyCellStyles}>
          <div className={styles.tableCellContent}>
            {isEditable ? (
              <div className="flex items-center gap-4 justify-between px-2">
                <button onClick={timeMinusButtonClickHandler}>
                  <MinusCircleIcon className="text-[--primary-blue]" />
                </button>
                <div>{exerciseDetails.time} mins</div>
                <button onClick={timePlusButtonClickHandler}>
                  <AddCircleIcon className="text-[--primary-blue]" />
                </button>
              </div>
            ) : (
              <div>{exerciseDetails.time} mins</div>
            )}
          </div>
        </TableCell>
        <TableCell align="left" sx={tableBodyCellStyles}>
          <div className={styles.tableCellContent}>
            {isEditable ? (
              <div className="flex items-center gap-4 justify-between px-2">
                <button onClick={levelMinusButtonClickHandler}>
                  <MinusCircleIcon className="text-[--primary-blue]" />
                </button>
                <div>{exerciseDetails.level}</div>
                <button onClick={levelPlusButtonClickHandler}>
                  <AddCircleIcon className="text-[--primary-blue]" />
                </button>
              </div>
            ) : (
              <div>{exerciseDetails.level}</div>
            )}
          </div>
        </TableCell>
        <TableCell align="left" sx={tableBodyCellStyles}>
          <div className={styles.tableCellContent}>
            <div className="flex gap-5 items-center">
              {exerciseDetails?.opacity1} %
              {isEditable ? (
                <button
                  onClick={() => {
                    if (isEditable) {
                      setShowEditOpacity(true)
                    }
                  }}
                >
                  <ArrowRightInsideCircle
                    className={"h-[1rem] w-[1rem] text-[--primary-blue]"}
                  />
                </button>
              ) : null}
            </div>
          </div>
        </TableCell>
        <TableCell align="left" sx={tableBodyCellStyles}>
          <div className={styles.tableCellContent}>
            <div className="flex gap-5 items-center">
              {exerciseDetails.opacity2} %
              {isEditable ? (
                <button
                  onClick={() => {
                    if (isEditable) {
                      setShowEditOpacity(true)
                    }
                  }}
                >
                  <ArrowRightInsideCircle
                    className={"h-[1rem] w-[1rem] text-[--primary-blue]"}
                  />
                </button>
              ) : null}
            </div>
          </div>
        </TableCell>

        <TableCell
          align="left"
          sx={{
            ...tableBodyCellStyles,
            width: "72px",
            minWidth: "unset !important",
          }}
        >
          {isEditable ? (
            <div className="flex gap-2 justify-center">
              <Button
                loading={isUpdateExerciseOtlLoading}
                onClick={() => {
                  handleUpdateExerciseOtl(
                    {
                      ...exerciseDetails,
                      opacity1: exerciseDetails?.opacity1 / 100,
                      opacity2: exerciseDetails?.opacity2 / 100,
                      patientId,
                    },
                    UpdateExerciseOtlSuccess
                  )
                }}
                variant="primary"
                className="!px-2 !py-1 !h-max !text-xs"
              >
                save
              </Button>
            </div>
          ) : (
            <button
              onClick={() => {
                setEditableRows((previous) => {
                  return { ...previous, [exercise.exerciseName]: "yes" }
                })
              }}
              className={styles.editSideBarCell}
            >
              <PenIcon className="h-[1rem] w-[1rem] text-[--text-black-dark]" />
            </button>
          )}
        </TableCell>
        <TableCell
          align="left"
          sx={{
            ...tableBodyCellStyles,
            width: "72px",
            minWidth: "unset !important",
          }}
        >
          <button
            className={styles.editSideBarCell}
            onClick={() => {
              setShowDeletePrescribedExercise(true)
              setSelectedExerciseToDelete(() => {
                const newSet = new Set()
                newSet.add(exercise.exerciseName)
                return newSet
              })
            }}
          >
            <DeleteIcon className="h-[1rem] w-[1rem] text-[--text-black-dark] stroke-[1.5px]" />
          </button>
        </TableCell>
      </TableRow>
    </>
  )
}

export default PrescribedExercisesTableRow

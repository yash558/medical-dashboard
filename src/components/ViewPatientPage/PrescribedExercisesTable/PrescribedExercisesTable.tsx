import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import PrescribedExercisesTableHeadCellCard from "./PrescribedExercisesTableHeadCellCard"
import PrescribedExercisesTableRightSideBarCell from "./PrescribedExercisesTableRightSideBarCell"
import styles from "./PrescribedExercisesTable.module.css"
import { useState } from "react"
import { useSelector } from "react-redux"
import PrescribedExercisesTableRow from "./PrescribeExercisesTableRow"
import Footer from "./Footer"
import { DeletePrescribedExercise } from "./DeletePrescribedExercise"
const PrescribedExercisesTable = ({
  setShowFilters,
  setFilterToBeExpanded,
  selectedExercisesToDelete,
  setSelectedExercisesToDelete,
}) => {
  const { patient } = useSelector((state) => {
    return state.patient
  })
  const [showDeletePrescribedExercise, setShowDeletePrescribedExercise] =
    useState(false)
  const [selectedExerciseToDelete, setSelectedExerciseToDelete] =
    useState(() => {
      return new Set()
    }, [])
  const [paginationState, setPaginationState] = useState({
    limit: 10,
    page: 1,
  })
  const [editableRows, setEditableRows] = useState({})
  const patientData = patient?.data[0]
  const getBookingData = {
    data: [
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
      {
        ExerciseName: "ExerciseName",
        Level: "0",
        Time: "5",
        RedOpacity: "85%",
        BlueOpactity: "80%",
      },
    ],
  }

  const getPrescribedExercises = (patientData) => {
    return patientData?.exercises?.list.map((exerciseName) => {
      const exercise = patientData.exercises[exerciseName]
      return {
        exerciseName: exerciseName,
        ...exercise,
      }
    })
  }

  const prescribedExercises = getPrescribedExercises(patientData)

  const tableHeadCellStyles = {
    color: "var(--bg-theme-primary)",
    fontWeight: "700",
    fontSize: "12px",
    lineHeight: "16px",
    padding: "12px 24px 12px 24px",
    height: "42px",
    backgroundColor: "var(--bg-blue-light)",
    "@media (max-width:823px)": {
      minWidth: "150px",
    },
    minWidth: "250px",
  }

  return (
    <>
      {showDeletePrescribedExercise ? (
        <DeletePrescribedExercise
          selectedExercisesToDelete={selectedExerciseToDelete}
          onClose={() => {
            setShowDeletePrescribedExercise(false)
          }}
          onSuccess={() => {
            setShowDeletePrescribedExercise(false)
          }}
        />
      ) : null}

      <div className={styles.tableAndFooterWrapper}>
        <TableContainer
          onPage
          component={Paper}
          sx={{
            minHeight: "200px",
            border: "1px solid #EAEAEA",
            borderRadius: "0px",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            position: "relative",
            flexGrow: 1,
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-track": {},
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "var(--border-theme-300)",
              borderRadius: "8px",
            },
            boxShadow: "none",
            "@media (max-width:700px)": {
              borderRadius: "16px",
              "&::-webkit-scrollbar": {
                width: "0px",
              },
            },
          }}
        >
          <div className={styles.tableAndBarWrapper}>
            <Table stickyHeader aria-label="simple table">
              <TableHead
                sx={{
                  backgroundColor: "var(--bg-blue-light)",
                }}
              >
                <TableRow>
                  <TableCell
                    sx={{
                      ...tableHeadCellStyles,
                      minWidth: "unset !important",
                    }}
                    align="left"
                  />
                  <TableCell sx={tableHeadCellStyles}>
                    <PrescribedExercisesTableHeadCellCard
                      name="Exercise"
                      setShowFilters={setShowFilters}
                      setFilterToBeExpanded={setFilterToBeExpanded}
                    />
                  </TableCell>
                  <TableCell sx={tableHeadCellStyles} align="left">
                    <PrescribedExercisesTableHeadCellCard
                      name="Time"
                      setShowFilters={setShowFilters}
                      setFilterToBeExpanded={setFilterToBeExpanded}
                    />
                  </TableCell>
                  <TableCell sx={tableHeadCellStyles} align="left">
                    <PrescribedExercisesTableHeadCellCard
                      name="Level"
                      setShowFilters={setShowFilters}
                      setFilterToBeExpanded={setFilterToBeExpanded}
                    />
                  </TableCell>
                  <TableCell sx={tableHeadCellStyles} align="left">
                    <PrescribedExercisesTableHeadCellCard
                      name="Red Opacity"
                      setShowFilters={setShowFilters}
                      setFilterToBeExpanded={setFilterToBeExpanded}
                    />
                  </TableCell>
                  <TableCell sx={tableHeadCellStyles} align="left">
                    <PrescribedExercisesTableHeadCellCard
                      name="Blue opacity"
                      setShowFilters={setShowFilters}
                      setFilterToBeExpanded={setFilterToBeExpanded}
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      ...tableHeadCellStyles,
                      minWidth: "unset !important",
                    }}
                    align="left"
                  />
                  <TableCell
                    sx={{
                      ...tableHeadCellStyles,
                      minWidth: "unset !important",
                    }}
                    align="left"
                  />
                </TableRow>
              </TableHead>
              <TableBody sx={{ position: "relative" }}>
                {prescribedExercises?.map((exercise) => {
                  return (
                    <PrescribedExercisesTableRow
                      exercise={exercise}
                      patientData={patientData}
                      setEditableRows={setEditableRows}
                      editableRows={editableRows}
                      selectedExercisesToDelete={selectedExercisesToDelete}
                      setSelectedExercisesToDelete={
                        setSelectedExercisesToDelete
                      }
                      setSelectedExerciseToDelete={setSelectedExerciseToDelete}
                      setShowDeletePrescribedExercise={
                        setShowDeletePrescribedExercise
                      }
                    />
                  )
                })}
              </TableBody>
            </Table>

            <div className={styles.tableRightSideBar}>
              <div className={styles.rightSideBarHeadCell}></div>

              {prescribedExercises?.map((exercise) => {
                return (
                  <PrescribedExercisesTableRightSideBarCell
                    setEditableRows={setEditableRows}
                    exercise={exercise}
                    setSelectedExerciseToDelete={setSelectedExerciseToDelete}
                    setShowDeletePrescribedExercise={
                      setShowDeletePrescribedExercise
                    }
                  />
                )
              })}
            </div>
          </div>
          {!prescribedExercises || prescribedExercises.length === 0 ? (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
              No exercises prescribed
            </div>
          ) : null}
        </TableContainer>
        <Footer
          setPaginationState={setPaginationState}
          getBookingData={getBookingData}
          paginationState={paginationState}
        />
      </div>
    </>
  )
}

export default PrescribedExercisesTable

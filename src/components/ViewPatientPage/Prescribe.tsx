import EyeIcon from "../../assets/icons/Eye"
import { DeleteIcon, UserSquareIcon } from "../../assets/icons"
import PlusIcon from "../../assets/icons/plus"
import PrescribedExercisesTable from "./PrescribedExercisesTable/PrescribedExercisesTable"
import { UpdateBaseValues } from "./UpdateBaseValues"
import { useState } from "react"
import PrescribeExercises from "./PrescribedExercisesTable/PrescribeExercises"
import { useSelector } from "react-redux"
import { Button } from "@components/Button"
import { DeletePrescribedExercise } from "./PrescribedExercisesTable/DeletePrescribedExercise"
const Prescribe = () => {
  const [showAddExercises, setShowAddExercises] = useState(false)
  const [showDeletePrescribedExercises, setShowDeletePrescribedExercises] =
    useState(false)
  const [selectedExercisesToDelete, setSelectedExercisesToDelete] =
    useState(() => {
      return new Set()
    }, [])

  const { isRemoveExerciseLoading } = useSelector((state) => {
    return state.exercise
  })
  const closeAddExercises = () => {
    setShowAddExercises(false)
  }

  return (
    <>
      {showDeletePrescribedExercises ? (
        <DeletePrescribedExercise
          onClose={() => {
            setShowDeletePrescribedExercises(false)
          }}
          onSuccess={() => {
            setShowDeletePrescribedExercises(false)
            setSelectedExercisesToDelete(new Set())
          }}
          selectedExercisesToDelete={selectedExercisesToDelete}
        />
      ) : null}
      <div className="md:py-8 md:px-10 md:bg-[--pure-white] rounded-2xl flex flex-col gap-4">
        <div className="flex flex-col gap-4 md:gap-10">
          <div className="gap-2 flex items-center mx-4 md:mx-0">
            <UserSquareIcon className="h-6 w-6 text-[var(--text-theme)]" />
            <div className="text-xs text-[--text-light-gray] font-bold tracking-widest">
              DAN LEWY
            </div>
          </div>

          <UpdateBaseValues />

          <div className="gap-4 flex flex-col mx-4 md:mx-0">
            <div className="flex gap-4 flex-col md:flex-row">
              <div className="flex gap-2">
                <EyeIcon className="h-[24px] w-[24px] text-[--primary-blue]" />

                <div className="flex flex-col gap-1">
                  <h2 className="text-xs text-[--text-light-gray] font-bold tracking-widest">
                    PRESCRIBED EXERCISES
                  </h2>
                  <div className="text-xs text-[--text-light-gray]">
                    View and edit exercises prescribed to{" "}
                    <span className="font-bold">Dan Levy</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 ml-auto">
                <Button
                  variant="transparent"
                  disabled={selectedExercisesToDelete.size === 0}
                  loading={isRemoveExerciseLoading}
                  onClick={() => {
                    setShowDeletePrescribedExercises(true)
                  }}
                  className="!text-xs !text-[--primary-blue] !font-bold !tracking-widest !h-auto !p-2 md:!px-3 md:!py-1 border !border-[--primary-blue] !flex !gap-3"
                >
                  <DeleteIcon className="h-[1rem] w-[1rem] md:h-[24px] md:w-[24px] text-[--primary-blue]" />{" "}
                  <div className="hidden md:block">DELETE EXERCISES</div>
                </Button>
                <button
                  onClick={() => {
                    setShowAddExercises(true)
                  }}
                  className="text-xs text-[--pure-white] bg-[--primary-blue] font-bold tracking-widest p-2 md:px-3 md:py-1 rounded-lg flex gap-4 items-center"
                >
                  <PlusIcon
                    stroke="var(--pure-white)"
                    className="h-[1rem] w-[1rem] md:h-[24px] md:w-[24px]"
                  />
                  <div className="hidden md:block">ADD EXERCISES</div>
                </button>
              </div>
            </div>
            <PrescribedExercisesTable
              selectedExercisesToDelete={selectedExercisesToDelete}
              setSelectedExercisesToDelete={setSelectedExercisesToDelete}
              setShowDeletePrescribedExercises={
                setShowDeletePrescribedExercises
              }
            />
          </div>
        </div>
      </div>
      {showAddExercises ? (
        <PrescribeExercises
          onClose={() => {
            closeAddExercises(false)
          }}
        />
      ) : null}
    </>
  )
}

export default Prescribe

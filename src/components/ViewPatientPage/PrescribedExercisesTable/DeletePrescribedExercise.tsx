import ArrowLeftTwoIcon from "@assets/icons/arrowLeftTwo"
import { Button } from "@components/Button"
import useExercise from "@hooks/useExercise"
import { useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import usePatient from "@hooks/usePatient"
export const DeletePrescribedExercise = ({
  selectedExercisesToDelete,
  onClose,
  onSuccess,
}) => {
  const { handleGetSinglePatient } = usePatient()

  const [searchParams] = useSearchParams()
  const patientId = searchParams.get("_id")
  const { handleRemoveExercise } = useExercise()
  const { isRemoveExerciseLoading } = useSelector((state) => {
    return state.exercise
  })
  const closeDeletePrescribeExercise = () => {
    onClose()
  }

  const removeExerciseSuccess = () => {
    handleGetSinglePatient({ _id: patientId })
    onSuccess()
  }

  return (
    <div className="fixed right-0 left-0 bottom-0 top-0 bg-[#25323E3D] z-[1000] flex items-center justify-center">
      <div className="min-h-[300px] w-full m-4 max-w-[48rem] flex flex-col rounded-2xl border border-[#63B1FC]">
        <div className="flex flex-col items-center  rounded-t-2xl justify-center gap-4 bg-[--pure-white] grow">
          <h1 className="text-xl md:text-3xl text-[--text-light-grey]">
            Delete Prescribed Exercise?
          </h1>
          <div className="flex flex-col gap-4 max-h-[30vh] overflow-y-scroll theme-scrollbar">
            {[...selectedExercisesToDelete].map((item) => {
              return (
                <h2 className="text--[--text-light-grey] text-xs tracking-widest font-bold">
                  {item}
                </h2>
              )
            })}
          </div>
          <p className="text--[--text-light-grey] text-xs md:text-sm">
            Deleting the prescribed exercise from the <br></br> prescribed
            exercise list and cannot be undone
          </p>
        </div>
        <div className="p-8 flex gap-6 rounded-b-2xl items-center justify-end h-[6.75rem] bg-[#ECF6FF]">
          <Button
            onClick={closeDeletePrescribeExercise}
            variant="transparent"
            className="!bg-[--pure-white] !tracking-widest !font-[Roboto] !text-[--primary-blue] font-medium"
          >
            <ArrowLeftTwoIcon />
            BACK
          </Button>
          <Button
            loading={isRemoveExerciseLoading}
            onClick={() => {
              handleRemoveExercise(
                {
                  excerciseList: [...selectedExercisesToDelete],
                  patientId,
                },
                removeExerciseSuccess
              )
            }}
            className="!text-[#B90022] !bg-[--pure-white] !tracking-widest !font-[Roboto] font-medium"
          >
            YES, DELETE
          </Button>
        </div>
      </div>
    </div>
  )
}

import {
  addExerciseLoading,
  addExerciseSuccess,
  addExerciseFailure,
  updateExerciseOtlLoading,
  updateExerciseOtlSuccess,
  updateExerciseOtlFailure,
  updatePatientOtlLoading,
  updatePatientOtlSuccess,
  updatePatientOtlFailure,
  removeExerciseLoading,
  removeExerciseSuccess,
  removeExerciseFailure,
} from "@redux/slices/exerciseSlice"
import {
  updatePatientOtl,
  addExercise,
  updateExerciseOtl,
  removeExercise,
} from "@services/exercises"
import { notify } from "src/utils/notify"
import getErrorStatement from "src/utils/getErrorStatement"
import { useCallback } from "react"
import { useDispatch } from "react-redux"

const useExercise = () => {
  const dispatch = useDispatch()

  const handleAddExercise = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(addExerciseLoading())
        const response = await addExercise(data)
        dispatch(addExerciseSuccess(response.data))
        notify(response.data.message, "success")
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(addExerciseFailure())
        notify(getErrorStatement(error))
        console.log(error)
      }
    },
    [dispatch]
  )

  const handleRemoveExercise = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(removeExerciseLoading())
        const response = await removeExercise(data)
        dispatch(removeExerciseSuccess(response.data))
        notify(response.data.message, "success")
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(removeExerciseFailure())
        notify(getErrorStatement(error))
        console.log(error)
      }
    },
    [dispatch]
  )

  const handleUpdateExerciseOtl = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(updateExerciseOtlLoading())
        const response = await updateExerciseOtl(data)
        dispatch(updateExerciseOtlSuccess(response.data))
        notify(response.data.message, "success")
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(updateExerciseOtlFailure())
        notify(getErrorStatement(error))
        console.log(error)
      }
    },
    [dispatch]
  )

  const handleUpdatePatientOtl = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(updatePatientOtlLoading())
        const response = await updatePatientOtl(data)
        dispatch(updatePatientOtlSuccess(response.data))
        notify(response.data.message, "success")
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(updatePatientOtlFailure())
        notify(getErrorStatement(error))
      }
    },
    [dispatch]
  )

  return {
    handleAddExercise,
    handleRemoveExercise,
    handleUpdateExerciseOtl,
    handleUpdatePatientOtl,
  }
}
export default useExercise

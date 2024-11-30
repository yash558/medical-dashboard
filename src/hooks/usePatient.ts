import {
  getPatientFailure,
  getPatientLoading,
  getPatientSuccess,
  addPatientLoading,
  addPatientSuccess,
  addPatientFailure,
  findPatientLoading,
  findPatientSuccess,
  findPatientFailure,
  addNewPatientLoading,
  addNewPatientSuccess,
  addNewPatientFailure,
  addCommentLoading,
  addCommentSuccess,
  addCommentFailure,
  getSinglePatientLoading,
  getSinglePatientFailure,
  getSinglePatientSuccess,
  getPatientCountLoading,
  getPatientCountSuccess,
  getPatientCountFailure,
} from "@redux/slices/patientSlice"

import { notify } from "src/utils/notify"
import getErrorStatement from "src/utils/getErrorStatement"
import { useCallback } from "react"
import { useDispatch } from "react-redux"


const usePatient = () => {
  const dispatch = useDispatch()

  const handleGetPatient = useCallback(
    async (paginationState: any) => {
      try {
        dispatch(getPatientLoading())
        const response = await getPatient(paginationState)
        dispatch(getPatientSuccess(response.data))
      } catch (error) {
        dispatch(getPatientFailure())
        console.log(error)
      }
    },
    [dispatch]
  )

  const handleAddPatient = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(addPatientLoading())
        const response = await addPatient(data)
        dispatch(addPatientSuccess(response.data))
        notify(response.data.message, "success")
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(addPatientFailure())
        notify(getErrorStatement(error))
        console.log("error:", error)
      }
    },
    [dispatch]
  )

  const handleAddNewPatient = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(addNewPatientLoading())
        const response = await addNewPatient(data)
        dispatch(addNewPatientSuccess(response.data))
        notify(response.data.message, "success")
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(addNewPatientFailure())
        notify(getErrorStatement(error))
        console.log("error:", error)
      }
    },
    [dispatch]
  )

  const handleFindPatient = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(findPatientLoading())
        const response = await findPatient(data)
        dispatch(findPatientSuccess(response.data))
        if (onSuccess) {
          onSuccess(response.data)
        }
      } catch (error) {
        dispatch(findPatientFailure())
        console.log("error:", error)
        throw new Error(getErrorStatement(error))
      }
    },
    [dispatch]
  )

  const handleAddComment = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(addCommentLoading())
        const response = await addComment(data)
        dispatch(addCommentSuccess(response.data))
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(addCommentFailure())
        notify(getErrorStatement(error))
        console.log(error)
      }
    },
    [dispatch]
  )

  const handleGetSinglePatient = useCallback(
    async (data) => {
      try {
        dispatch(getSinglePatientLoading())
        const response = await getPatient(data)
        dispatch(getSinglePatientSuccess(response.data))
      } catch (error) {
        dispatch(getSinglePatientFailure())
        console.log(error)
      }
    },
    [dispatch]
  )

  const handleGetPatientCount = useCallback(
    async (data) => {
      try {
        dispatch(getPatientCountLoading())
        const response = await getPatientCount(data)
        dispatch(getPatientCountSuccess(response.data))
      } catch (error) {
        dispatch(getPatientCountFailure())
        console.log(error)
      }
    },
    [dispatch]
  )

  return {
    handleGetPatient,
    handleAddPatient,
    handleFindPatient,
    handleAddNewPatient,
    handleAddComment,
    handleGetSinglePatient,
    handleGetPatientCount,
  }
}
export default usePatient

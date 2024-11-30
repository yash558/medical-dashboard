import {
  getBookingFailure,
  getBookingLoading,
  getBookingSuccess,
} from "@redux/slices/bookingSlice"
import {
  getUpcomingBookingLoading,
  getUpcomingBookingSuccess,
  getUpcomingBookingFailure,
  getCalendarBookingLoading,
  getCalendarBookingSuccess,
  getCalendarBookingFailure,
  createGoogleEventLoading,
  createGoogleEventSuccess,
  createGoogleEventFailure,
  addCalendarBookingLoading,
  addCalendarBookingSuccess,
  addCalendarBookingFailure,
  isAccessTokenValidLoading,
  isAccessTokenValidSuccess,
  isAccessTokenValidFailure,
} from "@redux/slices/bookingSlice"
import {
  getBooking,
  getUpcomingBooking,
  getCalendarBooking,
  createGoogleEvent,
  addCalendarBooking,
  isAccessTokenValid,
} from "@services/booking"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { notify } from "src/utils/notify"
import getErrorStatement from "src/utils/getErrorStatement"
const useBooking = () => {
  const dispatch = useDispatch()

  const handleGetBooking = useCallback(
    async (paginationState) => {
      try {
        dispatch(getBookingLoading())
        const response = await getBooking(paginationState)
        dispatch(getBookingSuccess(response.data))
      } catch (error) {
        dispatch(getBookingFailure())
        console.log("error:", error)
      }
    },
    [dispatch]
  )

  const handleGetUpcomingBooking = useCallback(async () => {
    try {
      dispatch(getUpcomingBookingLoading())
      const response = await getUpcomingBooking()
      dispatch(getUpcomingBookingSuccess(response.data))
    } catch (error) {
      dispatch(getUpcomingBookingFailure())
      console.log("error:", error)
    }
  }, [dispatch])

  const handleGetCalendarBooking = useCallback(
    async (data, onSuccess, onError) => {
      try {
        dispatch(getCalendarBookingLoading())
        const response = await getCalendarBooking(data)
        dispatch(getCalendarBookingSuccess(response.data))
        if (onSuccess) {
          onSuccess(response.data)
        }
      } catch (error) {
        dispatch(getCalendarBookingFailure())
        if (onError) {
          onError(error)
        }
        console.log("error:", error)
      }
    },
    [dispatch]
  )

  const handleCreateGoogleEvent = useCallback(
    async (data) => {
      try {
        dispatch(createGoogleEventLoading())
        const response = await createGoogleEvent(data)
        dispatch(createGoogleEventSuccess(response.data))
        notify(response.data.message, "success")
        return response.data
      } catch (error) {
        notify(getErrorStatement(error))
        dispatch(createGoogleEventFailure())
        console.log("error:", error)
      }
    },
    [dispatch]
  )

  const handleAddCalendarBooking = useCallback(
    async (data) => {
      try {
        dispatch(addCalendarBookingLoading())
        const response = await addCalendarBooking(data)
        notify(response.data.message, "success")
        dispatch(addCalendarBookingSuccess(response.data))
        return response.data
      } catch (error) {
        notify(getErrorStatement(error))
        dispatch(addCalendarBookingFailure())
        console.log("error:", error)
      }
    },
    [dispatch]
  )

  const handleIsAccessTokenValid = useCallback(
    async (data) => {
      try {
        dispatch(isAccessTokenValidLoading())
        const response = await isAccessTokenValid(data)
        dispatch(isAccessTokenValidSuccess(response.data))
        return response.data
      } catch (error) {
        dispatch(isAccessTokenValidFailure())
        console.log("error:", error)
      }
    },
    [dispatch]
  )
  return {
    handleGetBooking,
    handleGetUpcomingBooking,
    handleGetCalendarBooking,
    handleCreateGoogleEvent,
    handleAddCalendarBooking,
    handleIsAccessTokenValid,
  }
}

export default useBooking

import axiosPrivate from "@services/axiosPrivate"
import { GET_UPCOMING_BOOKING } from "src/constants"

export const getUpcomingBooking = (doctorId) =>
  axiosPrivate.get(GET_UPCOMING_BOOKING, {
    params: {
      doctorId,
    },
  })

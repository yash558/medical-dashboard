import axiosPrivate from "@services/axiosPrivate"
import { GET_CALENDAR_BOOKING } from "src/constants"

export const getCalendarBooking = (data) =>
  axiosPrivate.post(GET_CALENDAR_BOOKING, data)

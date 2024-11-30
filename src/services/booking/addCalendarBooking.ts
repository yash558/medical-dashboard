import axiosPrivate from "@services/axiosPrivate"
import { ADD_CALENDAR_BOOKING } from "src/constants"

export const addCalendarBooking = (data) =>
  axiosPrivate.post(ADD_CALENDAR_BOOKING, data, { withCredentials: true })

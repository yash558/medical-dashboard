import axiosPrivate from "@services/axiosPrivate"
import { CALENDAR_EVENT } from "src/constants"

export const createGoogleEvent = (data) =>
  axiosPrivate.post(CALENDAR_EVENT, data, { withCredentials: true })

import axiosPrivate from "@services/axiosPrivate"
import { GET_BOOKING } from "src/constants"

export const getBooking = (paginationState) =>
  axiosPrivate.get(GET_BOOKING, {
    params: {
      ...paginationState,
    },
  })

import axiosPrivate from "@services/axiosPrivate"
import { GET_OWN_DETAILS } from "src/constants"

export const getOwnDetails = () => {
  return axiosPrivate.get(GET_OWN_DETAILS)
}

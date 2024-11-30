import axiosPrivate from "@services/axiosPrivate"
import { ADD_POST_PAID } from "src/constants"

export const addPostPaid = (data) => {
  return axiosPrivate.post(ADD_POST_PAID, data, { withCredentials: true })
}

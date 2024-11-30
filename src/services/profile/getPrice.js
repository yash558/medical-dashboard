import axiosPrivate from "@services/axiosPrivate"
import { GET_PRICE } from "src/constants"

export const getPrice = () => {
  return axiosPrivate.get(GET_PRICE)
}

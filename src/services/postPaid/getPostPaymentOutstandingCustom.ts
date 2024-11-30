import axiosPrivate from "@services/axiosPrivate"
import { GET_POST_PAYMENT_OUTSTANDING_CUSTOM } from "src/constants"

export const getPostPaymentOutstandingCustom = (data) => {
  return axiosPrivate.post(GET_POST_PAYMENT_OUTSTANDING_CUSTOM, data, {
    withCredentials: true,
  })
}

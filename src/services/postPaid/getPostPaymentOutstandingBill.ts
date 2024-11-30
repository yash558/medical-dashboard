import axiosPrivate from "@services/axiosPrivate"
import { GET_POST_PAYMENT_OUTSTANDING_BILL } from "src/constants"

export const getPostPaymentOutstandingBill = (data) => {
  return axiosPrivate.get(GET_POST_PAYMENT_OUTSTANDING_BILL, data, {
    withCredentials: true,
  })
}

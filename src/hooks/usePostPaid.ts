import {
  addPostPaidLoading,
  addPostPaidSuccess,
  addPostPaidFailed,
  getPostPaymentOutstandingBillLoading,
  getPostPaymentOutstandingBillSuccess,
  getPostPaymentOutstandingBillFailed,
  getPostPaymentOutstandingCustomLoading,
  getPostPaymentOutstandingCustomSuccess,
  getPostPaymentOutstandingCustomFailed,
} from "@redux/slices/postPaidSlice"
import { addPostPaid } from "@services/postPaid/addPostPaid"
import { getPostPaymentOutstandingBill } from "@services/postPaid/getPostPaymentOutstandingBill"
import { getPostPaymentOutstandingCustom } from "@services/postPaid/getPostPaymentOutstandingCustom"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { notify } from "src/utils/notify"
import getErrorStatement from "src/utils/getErrorStatement"

const usePostPaid = () => {
  const dispatch = useDispatch()
  const handleAddPostPaid = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(addPostPaidLoading())
        const response = await addPostPaid(data)
        dispatch(addPostPaidSuccess(response.data))
        notify(response.data.message, "success")
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(addPostPaidFailed())
        notify(getErrorStatement(error))
        console.log(error)
      }
    },
    [dispatch]
  )

  const handleGetPostPaymentOutstandingBill = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(getPostPaymentOutstandingBillLoading())
        const response = await getPostPaymentOutstandingBill(data)
        dispatch(getPostPaymentOutstandingBillSuccess(response.data))
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(getPostPaymentOutstandingBillFailed())
        console.log(error)
      }
    },
    [dispatch]
  )

  const handleGetPostPaymentOutstandingCustom = useCallback(
    async (data, onSuccess) => {
      try {
        dispatch(getPostPaymentOutstandingCustomLoading())
        const response = await getPostPaymentOutstandingCustom(data)
        dispatch(getPostPaymentOutstandingCustomSuccess(response.data))
        if (onSuccess) {
          onSuccess()
        }
      } catch (error) {
        dispatch(getPostPaymentOutstandingCustomFailed())
        console.log(error)
      }
    },
    [dispatch]
  )

  return {
    handleAddPostPaid,
    handleGetPostPaymentOutstandingBill,
    handleGetPostPaymentOutstandingCustom,
  }
}

export default usePostPaid

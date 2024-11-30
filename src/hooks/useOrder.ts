import {
  setInitiateOrderFailed,
  setInitiateOrderLoading,
  setInitiateOrderSuccess,
  setVerifyOrderFailed,
  setVerifyOrderLoading,
  setVerifyOrderSuccess,
} from "@redux/slices/orderSlice"

import { useDispatch, useSelector } from "react-redux"
import getErrorStatement from "src/utils/getErrorStatement"
import { notify } from "src/utils/notify"
import logoBlack from "@assets/Common/logo-black.png"
import { load } from "@cashfreepayments/cashfree-js"
import { useNavigate } from "react-router"

const DEV_CHECKOUT_URL = "http://localhost:5173/manage-patient-vision"
const PROD_CHECKOUT_URL = "https://app.orbsway.com/manage-patient-vision"

const cashfree = await load({
  mode: import.meta.env.VITE_ENVIRONMENT === "dev" ? "sandbox" : "production",
})

const useOrder = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { findPatientData } = useSelector((state: any) => state.patient)


  const handleVerifyOrder = async (paymentData: any, id: string, paypath: string) => {
    let data
    if (paypath === "razz") {
      data = {
        orderId: id,
        paypath,
        patientId: findPatientData?.data.patientId,
        ...paymentData,
      }
    } else if (paypath === "cfree") {
      data = {
        orderId: id,
        paypath,
        patientId: findPatientData?.data.patientId,
        receipt: paymentData?.order_id,
      }
    }
    try {
      dispatch(setVerifyOrderLoading(true))
      const response = await verifyOrder(data)
      dispatch(setVerifyOrderSuccess())
      notify(response.data.message, "success")
      navigate("/manage-patient-vision")
    } catch (error) {
      console.log(error)
      dispatch(setVerifyOrderFailed())
      navigate("/manage-patient-vision")
      notify(getErrorStatement(error))
    }
  }

  const handlePaymentCashfree = (cashfreePaymentData: any, orderId: string) => {
    let checkoutOptions = {
      paymentSessionId: cashfreePaymentData?.payment_session_id,
      redirectTarget: "_modal",
    }

    cashfree.checkout(checkoutOptions).then((result: any) => {
      if (result.error) {
        // This will be true whenever user clicks on close icon inside the modal or any error happens during the payment
        console.log(
          "User has closed the popup or there is some payment error, Check for Payment Status"
        )
        navigate("/manage-patient-vision")
        notify("payment not completed", "error")
      }
      if (result.redirect) {
        // This will be true when the payment redirection page couldnt be opened in the same window
        // This is an exceptional case only when the page is opened inside an inAppBrowser
        // In this case the customer will be redirected to return url once payment is completed
        console.log("Payment will be redirected")
      }
      if (result.paymentDetails) {
        // This will be called whenever the payment is completed irrespective of transaction status
        console.log(cashfreePaymentData)
        handleVerifyOrder(cashfreePaymentData, orderId, "cfree").then(() => {})
      }
    })
  }

  const handleInitiateOrder = async (data: any) => {
    try {
      dispatch(setInitiateOrderLoading(true))
      if (data.paypath === "cfree") {
        data.patientId = findPatientData?.data?.patientId
      }
      const response = await initiateOrder(data)
      if (data?.paypath === "razz") {
        const options = {
          key: import.meta.env.VITE_RAZZ_KEY_ID,
          amount: response.data?.data?.amount,
          currency: response.data?.data?.currency,
          name: "Orbsway",
          image: logoBlack,
          order_id: response.data?.data?.id,
          handler: function (razorpayData) {
            handleVerifyOrder(razorpayData, data.orderId, "razz")
          },
          prefill: {
            name: findPatientData?.data?.name ?? "",
            email: findPatientData?.data?.email ?? "",
            contact: findPatientData?.data?.contact ?? "",
          },
          handleback: true,
          hidden: {
            email: false,
            contact: false,
          },
          readonly: {
            contact: true,
            email: true,
          },
          modal: {
            ondismiss: () => {
              navigate("/manage-patient-vision")
              notify("payment not completed", "error")
            },
            animation: true,
          },
        }
        dispatch(setInitiateOrderSuccess(response.data))
        // eslint-disable-next-line no-undef
        const instance = new Razorpay(options)
        instance.open()
      } else {
        handlePaymentCashfree(response.data?.data, data?.orderId)
      }
    } catch (error) {
      console.log(error)
      dispatch(setInitiateOrderFailed(error))
      notify(getErrorStatement(error), "error")
    }
  }

  return {
    handleInitiateOrder,
    handleVerifyOrder,
  }
}

export default useOrder

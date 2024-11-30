import React, { useEffect, useState } from "react"
import useOrder from "@hooks/useOrder"
import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import usePatient from "@hooks/usePatient"
import { Loader } from "@components/Loader"
import { notify } from "src/utils/notify"
const primaryPaymentMethod = import.meta.env.VITE_PRIMARY_PAYMENT_PAYMENT_METHOD
const secondaryPaymentMethod = import.meta.env
  .VITE_SECONDARY_PAYMENT_PAYMENT_METHOD

const CheckoutComponent = () => {
  const { handleInitiateOrder } = useOrder()
  const [paypath, setPaypath] = useState(primaryPaymentMethod)
  const [isRazorPayScriptLoaded, setIsRazorpayScriptLoaded] = useState(false)
  const [razorpayScriptError, setRazorpayScriptError] = useState(false)
  const { handleFindPatient } = usePatient()
  const [searchParams] = useSearchParams()
  const email = searchParams.get("email")
  const planId = searchParams.get("planId")
  const { findPatientData, isFindPatientLoading } = useSelector(
    (state) => state.patient
  )
  const navigate = useNavigate()
  useEffect(() => {
    if (!email || !planId) {
      notify("invalid details", "error")
      navigate("/manage-patient-vision")
      return
    }
    handleFindPatient({ email }).catch(() => {
      navigate("/manage-patient-vision")
    })
  }, [handleFindPatient])

  useEffect(() => {
    if (paypath === "razz") {
      const script = document.createElement("script")
      script.src = "https://checkout.razorpay.com/v1/checkout.js"
      script.async = true

      script.onload = () => setIsRazorpayScriptLoaded(true)
      script.onerror = () => {
        console.error("Failed to load the Razorpay script")
        setRazorpayScriptError(true)
      }

      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }
  }, [paypath])

  useEffect(() => {
    if (razorpayScriptError) {
      setPaypath(secondaryPaymentMethod)
    }
  }, [razorpayScriptError])

  useEffect(() => {
    if (findPatientData && (isRazorPayScriptLoaded || paypath === "cfree")) {
      const data = {
        orderId: planId,
        paypath,
      }

      handleInitiateOrder(data)
    }
  }, [findPatientData, paypath, isRazorPayScriptLoaded])
  return (
    <>
      {isFindPatientLoading ? (
        <div className="fixed right-0 left-0 bottom-0 top-0 flex items-center justify-center">
          <Loader />
        </div>
      ) : null}
    </>
  )
}

export default CheckoutComponent

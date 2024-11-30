import { useDispatch } from "react-redux"
import {
  setSignUpLoading,
  setSignUpSuccess,
  setSignUpFailure,
  setSignInLoading,
  setSignInSuccess,
  setSignInFailure,
  setVerifyTokenPasswordLoading,
  setVerifyTokenPasswordSuccess,
  setVerifyTokenPasswordFailure,
  setForgotPasswordLoading,
  setForgotPasswordSuccess,
  setForgotPasswordFailure,
  setResetPasswordLoading,
  setResetPasswordSuccess,
  setResetPasswordFailure,
  setLogout,
  setLogoutLoading,
  setLogoutSuccess,
  setLogoutFailure,
  setOauthLoading,
  setOauthSuccess,
  setOauthFailure,
} from "../redux/slices/authenticationSlice"
import { signup } from "../services/authentication/signup"
import { signin } from "@services/authentication/signin"
import { forgotPassword } from "../services/authentication/forgotPassword"
import { verifyTokenPassword } from "../services/authentication/verifyTokenPassword"
import { resetPassword } from "../services/authentication/resetPassword"
import { useNavigate } from "react-router"
import { notify } from "src/utils/notify"
import getErrorStatement from "src/utils/getErrorStatement"
import { clearToken } from "src/utils/indexedDb"
import useIndexedDB from "./useIndexedDB"
import { logout } from "../services/authentication/logout"
import { googleOauth } from "@services/authentication/googleOauth"
import useProfile from "./useProfile"

const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { handleOwnDetailsLogout } = useProfile()
  const { storeToken } = useIndexedDB()

  const handleSignUp = async (data) => {
    try {
      dispatch(setSignUpLoading())
      const response = await signup(data)
      dispatch(setSignUpSuccess(response.data))
      storeToken(response.data.authToken)
      navigate("/sign-in")
      notify("Account created successfully", "success")
    } catch (error) {
      dispatch(setSignUpFailure(error.message))
      notify(getErrorStatement(error))
    }
  }

  const handleSignIn = async (data) => {
    try {
      dispatch(setSignInLoading())
      const response = await signin(data)
      navigate("/dashboard")
      dispatch(setSignInSuccess(response.data))
      storeToken(response.data.authToken)
    } catch (error) {
      dispatch(setSignInFailure(error.message))
      console.error(error)
      notify(getErrorStatement(error))
    }
  }

  const handleForgotPassword = async (
    data,
    setShowVerifyOtpUi,
    setFormSteps,
    nextStep,
    handleResendCode
  ) => {
    try {
      dispatch(setForgotPasswordLoading())
      const response = await forgotPassword(data)
      dispatch(setForgotPasswordSuccess(response.data))
      if (setShowVerifyOtpUi) setShowVerifyOtpUi(true)
      if (setFormSteps) {
        setFormSteps(nextStep)
      }
      if (handleResendCode) handleResendCode()
    } catch (error) {
      console.log("error:", error)
      dispatch(setForgotPasswordFailure(error.message))
      notify(getErrorStatement(error))
    }
  }

  const handleVerifyTokenPassword = async (data, setFormSteps, nextStep) => {
    try {
      dispatch(setVerifyTokenPasswordLoading())
      const response = await verifyTokenPassword(data)
      dispatch(setVerifyTokenPasswordSuccess(response.data))
      if (setFormSteps) {
        setFormSteps(nextStep)
      }
    } catch (error) {
      dispatch(setVerifyTokenPasswordFailure(error.message))
      notify(getErrorStatement(error))
    }
  }

  const handleResetPassword = async (data) => {
    try {
      dispatch(setResetPasswordLoading())
      const response = await resetPassword(data)
      dispatch(setResetPasswordSuccess(response.data))
      navigate("/sign-in")
      notify("Password has been reset successfully", "success")
    } catch (error) {
      dispatch(setResetPasswordFailure(error.message))
      notify(getErrorStatement(error))
    }
  }

  const handleLogoutSession = async () => {
    try {
      dispatch(setLogoutLoading())
      await logout()
      clearToken()
      dispatch(setLogout())
      dispatch(setLogoutSuccess())
      handleOwnDetailsLogout()
      navigate("/sign-in")
    } catch (error) {
      dispatch(setLogoutFailure(error.message))
      notify(getErrorStatement(error))
    }
  }

  const handleGoogleOauth = async () => {
    try {
      dispatch(setOauthLoading())
     const response = await googleOauth()
      dispatch(setOauthSuccess())
      return response?.data
    } catch (error) {
      dispatch(setOauthFailure())
      notify(getErrorStatement(error))
      return null
    }
  }

  return {
    handleGoogleOauth,
    handleSignUp,
    handleSignIn,
    handleForgotPassword,
    handleVerifyTokenPassword,
    handleResetPassword,
    handleLogoutSession,
  }
}

export default useAuth

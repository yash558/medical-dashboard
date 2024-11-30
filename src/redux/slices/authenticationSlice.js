import { createSlice } from "@reduxjs/toolkit"

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    isSignupLoading: false,
    isSigninLoading: false,
    isForgotPasswordLoading: false,
    isVerifyTokenPasswordLoading: false,
    isResetPasswordLoading: false,
    authDetails: "initial",
    authToken: null,
    isRetrieveTokenLoading: false,
    isLogoutLoading: false,
    verifyCodeError: null,
    open: false,
    // oauth
    isOauthLoading: false,
  },
  reducers: {
    // retrieve token
    setRetrieveTokenLoading: (state) => {
      state.isRetrieveTokenLoading = true
    },
    setOpen: (state) => {
      state.open = true;
    },
    setClose: (state) => {
      state.open = false;
    },
    setRetrieveTokenSucess: (state, action) => {
      state.authToken = action.payload
      state.isRetrieveTokenLoading = false
    },
    setRetrieveTokenFailure: (state) => {
      state.isRetrieveTokenLoading = false
    },
    // signup
    setSignUpLoading: (state) => {
      state.isSignupLoading = true
    },
    setSignUpSuccess: (state, action) => {
      state.isSignupLoading = false
      state.authDetails = action.payload
      state.authToken = action.payload.authToken
    },
    setSignUpFailure: (state) => {
      state.isSignupLoading = false
    },
    // sign in
    setSignInLoading: (state) => {
      state.isSigninLoading = true
    },
    setSignInSuccess: (state, action) => {
      state.isSigninLoading = false
      state.authDetails = action.payload
      state.authToken = action.payload.authToken
    },
    setSignInFailure: (state) => {
      state.isSigninLoading = false
    },
    // forgotPassword
    setForgotPasswordLoading: (state) => {
      state.isForgotPasswordLoading = true
    },
    setForgotPasswordSuccess: (state) => {
      state.isForgotPasswordLoading = false
    },
    setForgotPasswordFailure: (state) => {
      state.isForgotPasswordLoading = false
    },
    // verifyTokenPassword
    setVerifyTokenPasswordLoading: (state) => {
      state.isVerifyTokenPasswordLoading = true
    },
    setVerifyTokenPasswordSuccess: (state) => {
      state.isVerifyTokenPasswordLoading = false
      state.verifyCodeError = null
    },
    setVerifyTokenPasswordFailure: (state, action) => {
      state.isVerifyTokenPasswordLoading = false
      state.verifyCodeError = action.payload
    },
    // reset password
    setResetPasswordLoading: (state) => {
      state.isResetPasswordLoading = true
    },
    setResetPasswordSuccess: (state) => {
      state.isResetPasswordLoading = false
    },
    setResetPasswordFailure: (state) => {
      state.isResetPasswordLoading = false
    },
    setLogout: (state) => {
      state.authDetails = null
      state.authToken = null
      state.isRetrieveTokenLoading = false
    },
    // these are for api only
    setLogoutLoading: (state) => {
      state.isLogoutLoading = true
    },
    setLogoutSuccess: (state) => {
      state.isLogoutLoading = false
    },
    setLogoutFailure: (state) => {
      state.isLogoutLoading = false
    },
    // oauth
    setOauthLoading: (state) => {
      state.isOauthLoading = true
    },
    setOauthSuccess: (state) => {
      state.isOauthLoading = false
    },
    setOauthFailure: (state) => {
      state.isOauthLoading = false
    },
  },
})

export const {
  setSignUpLoading,
  setOpen,
  setClose,
  setSignUpSuccess,
  setSignUpFailure,
  setSignInLoading,
  setSignInSuccess,
  setSignInFailure,
  setForgotPasswordLoading,
  setForgotPasswordSuccess,
  setForgotPasswordFailure,
  setVerifyTokenPasswordLoading,
  setVerifyTokenPasswordSuccess,
  setVerifyTokenPasswordFailure,
  setResetPasswordLoading,
  setResetPasswordSuccess,
  setResetPasswordFailure,
  setRetrieveTokenSucess,
  setLogout,
  setRetrieveTokenLoading,
  setTokenLoading,
  setRetrieveTokenFailure,
  setLogoutFailure,
  setLogoutLoading,
  setLogoutSuccess,
  setOauthFailure,
  setOauthSuccess,
  setOauthLoading,
} = authenticationSlice.actions

export default authenticationSlice.reducer

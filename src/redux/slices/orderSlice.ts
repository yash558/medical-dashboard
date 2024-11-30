import { createSlice } from "@reduxjs/toolkit"

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    isInitiateOrderLoading: false,
    isVerifyOrderLoading: false,
  },
  reducers: {
    setInitiateOrderLoading: (state: any) => {
      state.isInitiateOrderLoading = true
    },
    setInitiateOrderSuccess: (state: any) => {
      state.isInitiateOrderLoading = false
    },
    setInitiateOrderFailed: (state: any) => {
      state.isInitiateOrderLoading = false
    },
    
    setVerifyOrderLoading: (state: any) => {
      state.isVerifyOrderLoading = true
    },
    setVerifyOrderSuccess: (state: any) => {
      state.isVerifyOrderLoading = false
    },
    setVerifyOrderFailed: (state: any) => {
      state.isVerifyOrderLoading = false
    },
  },
})

export const {
  setInitiateOrderLoading,
  setInitiateOrderSuccess,
  setInitiateOrderFailed,
  setVerifyOrderLoading,
  setVerifyOrderSuccess,
  setVerifyOrderFailed,
} = orderSlice.actions
export default orderSlice.reducer

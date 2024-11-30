import { createSlice } from "@reduxjs/toolkit"

export const postPaidSlice = createSlice({
  name: "order",
  initialState: {
    isAddPostPaidLoading: false,
    isGetPostPaymentOutstandingBillLoading: false,
    isGetPostPaymentOutstandingCustomLoading: false,
    postPaymentOutstandingBill: null,
    postPaymentOutstandingCustom: null,
  },
  reducers: {
    addPostPaidLoading: (state) => {
      state.isAddPostPaidLoading = true
    },
    addPostPaidSuccess: (state) => {
      state.isAddPostPaidLoading = false
    },
    addPostPaidFailed: (state) => {
      state.isAddPostPaidLoading = false
    },

    getPostPaymentOutstandingBillLoading: (state) => {
      state.isGetPostPaymentOutstandingBillLoading = true
    },
    getPostPaymentOutstandingBillSuccess: (state, action) => {
      state.isGetPostPaymentOutstandingBillLoading = false
      state.postPaymentOutstandingBill = action.payload
    },
    getPostPaymentOutstandingBillFailed: (state) => {
      state.isGetPostPaymentOutstandingBillLoading = false
    },

    getPostPaymentOutstandingCustomLoading: (state) => {
      state.isGetPostPaymentOutstandingCustomLoading = true
    },
    getPostPaymentOutstandingCustomSuccess: (state, action) => {
      state.isGetPostPaymentOutstandingCustomLoading = false
      state.postPaymentOutstandingCustom = action.payload
    },
    getPostPaymentOutstandingCustomFailed: (state) => {
      state.isGetPostPaymentOutstandingCustomLoading = false
    },
  },
})

export const {
  addPostPaidLoading,
  addPostPaidSuccess,
  addPostPaidFailed,
  getPostPaymentOutstandingBillLoading,
  getPostPaymentOutstandingBillSuccess,
  getPostPaymentOutstandingBillFailed,
  getPostPaymentOutstandingCustomLoading,
  getPostPaymentOutstandingCustomSuccess,
  getPostPaymentOutstandingCustomFailed,
} = postPaidSlice.actions
export default postPaidSlice.reducer

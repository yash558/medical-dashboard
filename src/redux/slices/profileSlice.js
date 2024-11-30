import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isGetPriceLoadingisGetOwnDetailsLoading: false,
  ownDetails: null,
  isGetPriceLoading: false,
  getPriceResponse: null,
}

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // getBooking
    getOwnDetailsLoading: (state) => {
      state.isGetOwnDetailsLoading = true
    },
    getOwnDetailsSuccess: (state, { payload }) => {
      state.isGetOwnDetailsLoading = false
      state.ownDetails = payload
    },
    getOwnDetailsFailed: (state) => {
      state.isGetOwnDetailsLoading = false
    },
    setOwnDetailsLogout: (state) => {
      state.ownDetails = null
    },
    // getPrice
    getPriceLoading: (state) => {
      state.isGetPriceLoading = true
    },
    getPriceSuccess: (state, { payload }) => {
      state.isGetPriceLoading = false
      state.getPriceResponse = payload
    },
    getPriceFailure: (state) => {
      state.isGetPriceLoading = false
    },
  },
})

export const {
  getOwnDetailsLoading,
  getOwnDetailsSuccess,
  getOwnDetailsFailed,
  setOwnDetailsLogout,
  getPriceLoading,
  getPriceSuccess,
  getPriceFailure,
} = profileSlice.actions

export default profileSlice.reducer

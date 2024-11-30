import { createSlice } from "@reduxjs/toolkit"
import { addCalendarBooking } from "@services/booking/addCalendarBooking"

const initialState = {
  isGetBookingLoading: false,
  isGetUpcomingBookingLoading: false,
  getUpcomingBookingResponse: null,
  getCalendarBookingResponse: null,
  isGetCalendarBookingLoading: false,
  createGoogleEvent: null,
  isCreateGoogleEventLoading: false,
  isAddCalendarBookingLoading: false,
  calendarBooking: null,
  isAccessTokenValidLoading: false,
  accessTokenValid: null,
}

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    // getBooking
    getBookingLoading: (state) => {
      state.isGetBookingLoading = true
    },
    getBookingSuccess: (state, { payload }) => {
      state.isGetBookingLoading = false
      state.bookings = payload
    },
    getBookingFailure: (state) => {
      state.isGetBookingLoading = false
    },
    // getUpcomingBooking
    getUpcomingBookingLoading: (state) => {
      state.isGetUpcomingBookingLoading = true
    },
    getUpcomingBookingSuccess: (state, { payload }) => {
      state.isGetUpcomingBookingLoading = false
      state.getUpcomingBookingResponse = payload
    },
    getUpcomingBookingFailure: (state) => {
      state.isGetUpcomingBookingLoading = false
    },

    // getCalendarBooking
    getCalendarBookingLoading: (state) => {
      state.isGetCalendarBookingLoading = true
    },
    getCalendarBookingSuccess: (state, { payload }) => {
      state.isGetCalendarBookingLoading = false
      state.getCalendarBookingResponse = payload
    },
    getCalendarBookingFailure: (state) => {
      state.isGetCalendarBookingLoading = false
    },

    // google event
    createGoogleEventLoading: (state) => {
      state.isCreateGoogleEventLoading = true
    },
    createGoogleEventSuccess: (state, { payload }) => {
      state.isCreateGoogleEventLoading = false
      state.createGoogleEvent = payload
    },
    createGoogleEventFailure: (state) => {
      state.isCreateGoogleEventLoading = false
    },

    // google event
    addCalendarBookingLoading: (state) => {
      state.isAddCalendarBookingLoading = true
    },
    addCalendarBookingSuccess: (state, { payload }) => {
      state.isAddCalendarBookingLoading = false
      state.calendarBooking = payload
    },
    addCalendarBookingFailure: (state) => {
      state.isAddCalendarBookingLoading = false
    },

    // access token
    isAccessTokenValidLoading: (state) => {
      state.isAccessTokenValidLoading = true
    },
    isAccessTokenValidSuccess: (state, { payload }) => {
      state.isAccessTokenValidLoading = false
      state.accessTokenValid = payload
    },
    isAccessTokenValidFailure: (state) => {
      state.isAccessTokenValidLoading = false
    },
  },
})

export const {
  getBookingFailure,
  getBookingLoading,
  getBookingSuccess,
  getUpcomingBookingFailure,
  getUpcomingBookingLoading,
  getUpcomingBookingSuccess,
  getCalendarBookingLoading,
  getCalendarBookingSuccess,
  getCalendarBookingFailure,
  createGoogleEventLoading,
  createGoogleEventSuccess,
  createGoogleEventFailure,
  addCalendarBookingLoading,
  addCalendarBookingSuccess,
  addCalendarBookingFailure,
  isAccessTokenValidLoading,
  isAccessTokenValidSuccess,
  isAccessTokenValidFailure,
} = bookingSlice.actions

export default bookingSlice.reducer

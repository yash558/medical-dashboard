import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authenticationSlice"
import patientReducer from "./slices/patientSlice"
import bookingReducer from "./slices/bookingSlice"
import profileReducer from "./slices/profileSlice"
import exerciseReducer from "./slices/exerciseSlice"
import postPaidReducer from "./slices/postPaidSlice"
export const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patientReducer,
    booking: bookingReducer,
    profile: profileReducer,
    exercise: exerciseReducer,
    postPaid: postPaidReducer,
  },
})

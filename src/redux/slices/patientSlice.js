import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isGetPatientLoading: false,
  isGetSinglePatientLoading: false,
  isAddPatientLoading: false,
  isAddCommentLoading: false,
  isAddNewPatientLoading: false,
  isFindPatientLoading: false,
  isGetPatientCountLoading: false,
  findPatientData: null,
  patients: [],
  getPatientCountResponse: null,
  patient: null,
}
const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    // getPatient
    getPatientLoading: (state) => {
      state.isGetPatientLoading = true
    },
    getPatientSuccess: (state, { payload }) => {
      state.isGetPatientLoading = false
      state.patients = payload
    },
    getPatientFailure: (state) => {
      state.isGetPatientLoading = false
    },
    // getPatient
    getSinglePatientLoading: (state) => {
      state.isGetSinglePatientLoading = true
    },
    getSinglePatientSuccess: (state, { payload }) => {
      console.log(payload)
      state.isGetSinglePatientLoading = false
      state.patient = payload
    },
    getSinglePatientFailure: (state) => {
      state.isGetSinglePatientLoading = false
    },
    // addPatient
    addPatientLoading: (state) => {
      state.isAddPatientLoading = true
    },
    addPatientSuccess: (state, { payload }) => {
      state.isAddPatientLoading = false
      state.findPatientData = payload
    },
    addPatientFailure: (state) => {
      state.isAddPatientLoading = false
    },

    addCommentLoading: (state) => {
      state.isAddCommentLoading = true
    },
    addCommentSuccess: (state) => {
      state.isAddCommentLoading = false
    },
    addCommentFailure: (state) => {
      state.isAddCommentLoading = false
    },

    addNewPatientLoading: (state) => {
      state.isAddPatientLoading = true
    },
    addNewPatientSuccess: (state, { payload }) => {
      state.isAddPatientLoading = false
    },
    addNewPatientFailure: (state) => {
      state.isAddPatientLoading = false
    },
    // find patient
    findPatientLoading: (state) => {
      state.isFindPatientLoading = true
    },
    findPatientSuccess: (state, { payload }) => {
      state.isFindPatientLoading = false
      state.findPatientData = payload
    },
    findPatientFailure: (state) => {
      state.isFindPatientLoading = false
    },

    // patient count
    getPatientCountLoading: (state) => {
      state.isGetPatientCountLoading = true
    },
    getPatientCountSuccess: (state, { payload }) => {
      state.isGetPatientCountLoading = false
      state.getPatientCountResponse = payload
    },
    getPatientCountFailure: (state) => {
      state.isGetPatientCountLoading = false
    },
  },
})

export const {
  getPatientFailure,
  getPatientLoading,
  getPatientSuccess,
  addPatientFailure,
  addPatientLoading,
  addPatientSuccess,
  findPatientFailure,
  findPatientLoading,
  findPatientSuccess,
  addNewPatientLoading,
  addNewPatientSuccess,
  addNewPatientFailure,
  getPatientCountLoading,
  getPatientCountSuccess,
  getPatientCountFailure,
  addCommentLoading,
  addCommentSuccess,
  addCommentFailure,
  getSinglePatientLoading,
  getSinglePatientSuccess,
  getSinglePatientFailure,
} = patientSlice.actions
export default patientSlice.reducer

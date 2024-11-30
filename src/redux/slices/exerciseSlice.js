import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAddExerciseLoading: false,
  isRemoveExerciseLoading: false,
  isUpdateExerciseOtlLoading: false,
  isUpdatePatientOtlLoading: false,
}
const exerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    addExerciseLoading: (state) => {
      state.isAddPatientLoading = true
    },
    addExerciseSuccess: (state) => {
      state.isAddExerciseLoading = false
    },
    addExerciseFailure: (state) => {
      state.isAddExerciseLoading = false
    },

    removeExerciseLoading: (state) => {
      state.isRemoveExerciseLoading = true
    },
    removeExerciseSuccess: (state) => {
      state.isRemoveExerciseLoading = false
    },
    removeExerciseFailure: (state) => {
      state.isRemoveExerciseLoading = false
    },

    updateExerciseOtlLoading: (state) => {
      state.isUpdateExerciseOtlLoading = true
    },
    updateExerciseOtlSuccess: (state) => {
      state.isUpdateExerciseOtlLoading = false
    },
    updateExerciseOtlFailure: (state) => {
      state.isUpdateExerciseOtlLoading = false
    },

    updatePatientOtlLoading: (state) => {
      state.isUpdatePatientOtlLoading = true
    },
    updatePatientOtlSuccess: (state) => {
      state.isUpdatePatientOtlLoading = false
    },
    updatePatientOtlFailure: (state) => {
      state.isUpdatePatientOtlLoading = false
    },
  },
})

export const {
  addExerciseLoading,
  addExerciseSuccess,
  addExerciseFailure,
  removeExerciseLoading,
  removeExerciseSuccess,
  removeExerciseFailure,
  updateExerciseOtlLoading,
  updateExerciseOtlSuccess,
  updateExerciseOtlFailure,
  updatePatientOtlLoading,
  updatePatientOtlSuccess,
  updatePatientOtlFailure,
} = exerciseSlice.actions
export default exerciseSlice.reducer

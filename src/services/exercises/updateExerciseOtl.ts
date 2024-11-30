import axiosPrivate from "@services/axiosPrivate"
import { UPDATE_EXERCISE_OTL } from "src/constants"

export const updateExerciseOtl = (data) =>
  axiosPrivate.post(UPDATE_EXERCISE_OTL, data, { withCredentials: true })

import axiosPrivate from "@services/axiosPrivate"
import { REMOVE_EXERCISE } from "src/constants"

export const removeExercise = (data) =>
  axiosPrivate.post(REMOVE_EXERCISE, data, { withCredentials: true })

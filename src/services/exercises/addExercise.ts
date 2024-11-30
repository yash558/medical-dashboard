import axiosPrivate from "@services/axiosPrivate"
import { ADD_EXERCISE } from "src/constants"

export const addExercise = (data) =>
  axiosPrivate.post(ADD_EXERCISE, data, { withCredentials: true })

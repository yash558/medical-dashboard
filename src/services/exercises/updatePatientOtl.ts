import axiosPrivate from "@services/axiosPrivate"
import { UPDATE_PATIENT_OTL } from "src/constants"

export const updatePatientOtl = (data) =>
  axiosPrivate.post(UPDATE_PATIENT_OTL, data, { withCredentials: true })

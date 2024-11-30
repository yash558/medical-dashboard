import axiosPrivate from "@services/axiosPrivate"
import { GOOGLE_OAUTH } from "src/constants"

export const googleOauth = () => {
  return axiosPrivate.get(GOOGLE_OAUTH)
}

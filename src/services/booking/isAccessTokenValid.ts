import axiosPrivate from "@services/axiosPrivate"
import { IS_ACCESS_TOKEN_VALID } from "src/constants"

export const isAccessTokenValid = (data) =>
  axiosPrivate.post(IS_ACCESS_TOKEN_VALID, data, { withCredentials: true })

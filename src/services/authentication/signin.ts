import axios from "axios"
import { SIGNIN_URL } from "src/constants"

export const signin = (data) => {
  return axios.post(SIGNIN_URL, data, { withCredentials: true })
}

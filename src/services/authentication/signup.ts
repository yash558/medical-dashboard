import axios from "axios"
import { SIGNUP_URL } from "src/constants"

export const signup = (data) => {
  const formData = new FormData()
  for (let [key, value] of Object.entries(data)) {
    formData.append(key, value)
  }

  return axios.post(SIGNUP_URL, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  })
}

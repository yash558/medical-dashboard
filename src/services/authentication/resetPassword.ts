import axios from "axios";
import { RESET_PASSWORD_URL } from "src/constants";

export const resetPassword = (data) => {
  return axios.post(RESET_PASSWORD_URL, data);
};

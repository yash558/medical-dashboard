import axios from "axios";
import { VERIFY_TOKEN_PASSWORD_URL } from "src/constants";

// verify reset password otp
export const verifyTokenPassword = (data) => {
  return axios.post(`${VERIFY_TOKEN_PASSWORD_URL}`, data);
};

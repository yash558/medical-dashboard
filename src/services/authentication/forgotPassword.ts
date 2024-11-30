import axios from "axios";
import { FORGOT_PASSWORD } from "src/constants";

export const forgotPassword = (data: any) => {
  return axios.post(FORGOT_PASSWORD, data);
};

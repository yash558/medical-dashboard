import axiosPrivate from "@services/axiosPrivate";
import { LOGOUT_URL } from "src/constants";

export const logout = () => {
  return axiosPrivate.get(LOGOUT_URL);
};

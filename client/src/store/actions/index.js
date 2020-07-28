import axios from "axios";

export const AxiosWithAuth = () => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    headers: {
      authorization: token
    }
  });
};

import axios from "axios";
import { ctx } from "../../constants";

export const userAPI = {
  getUser: (token) =>
    axios.get(`${ctx.baseUrl}/user`, {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    }),
  login: (data) => axios.post(`${ctx.baseUrl}/login`, data),
};

export const dellersAPI = {
  getDeller: (token) =>
    axios.get(`${ctx.baseUrl}/dellers/get`, {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    }),
};

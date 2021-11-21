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

  deleteDeller: ({ token, id }) =>
    axios.delete(`${ctx.baseUrl}/dellers/delete?id=${id}`, {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    }),

  updateAccess: ({ token, id }) =>
    axios.put(`${ctx.baseUrl}/dellers/give_access?id=${id}`, {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    }),
};

export const ordersAPI = {
  getOrder: (token) =>
    axios.get(`${ctx.baseUrl}/orders/get`, {
      headers: {
        common: {
          Authorization: `Bearer ${token}`,
        },
      },
    }),
};

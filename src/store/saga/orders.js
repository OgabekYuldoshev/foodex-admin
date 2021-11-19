import { call, put, takeEvery } from "redux-saga/effects";
import * as ctx from "../constants/orders";
import { ordersAPI } from "../api";
import { toast } from "react-toastify";

function* getOrders({ payload }) {
  try {
    let res = yield call(ordersAPI.getOrder, payload);
    yield put({
      type: ctx.GET_ORDERS.SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error);
    yield put({
      type: ctx.GET_ORDERS.FAILURE,
    });
  }
}
export default function* dellers() {
  yield takeEvery(ctx.GET_ORDERS.REQUEST, getOrders);
}

import { call, put, takeEvery } from "redux-saga/effects";
import * as ctx from "../constants/dellers";
import { dellersAPI } from "../api";
import { toast } from "react-toastify";

function* getDellers({ payload }) {
  try {
    let res = yield call(dellersAPI.getDeller, payload);
    yield put({
      type: ctx.DELLERS_INFO.SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    toast.error(error);
    yield put({
      type: ctx.DELLERS_INFO.FAILURE,
    });
  }
}
export default function* dellers() {
  yield takeEvery(ctx.DELLERS_INFO.REQUEST, getDellers);
}

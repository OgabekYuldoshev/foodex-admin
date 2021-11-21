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

function* deleteDeller({ payload }) {
  try {
    let res = yield call(dellersAPI.deleteDeller, payload);
    toast.success(res.data);
  } catch (error) {
    toast.error(error);
  }
}

function* updateAccess({ payload }) {
  try {
    let res = yield call(dellersAPI.updateAccess, payload);
    console.log(payload)
    toast.success(res.data);
  } catch (error) {
    toast.error(error);
  }
}
export default function* dellers() {
  yield takeEvery(ctx.DELLERS_INFO.REQUEST, getDellers);
  yield takeEvery(ctx.DELETE_DELLER.REQUEST, deleteDeller);
  yield takeEvery(ctx.UPDATE_ACCESS.REQUEST, updateAccess);
}

import { call, put, takeEvery } from "redux-saga/effects";
import * as ctx from "../constants/user";
import { userAPI } from "../api/user";
import { toast } from "react-toastify";

function* initializeApp() {
  try {
    let token = yield call([localStorage, localStorage.getItem], "authtoken");
    if (!token) {
      yield put({
        type: ctx.LOG_OUT.SUCCESS,
      });
    } else {
      let res = yield call(userAPI.getUser, token);
      yield put({
        type: ctx.INITIALIZE_APP.SUCCESS,
        payload: { user: res.data, token: token },
      });
    }
  } catch (error) {
    toast.error(error);
  }
}

function* logIn({ payload }) {
  try {
    let res = yield call(userAPI.login, payload);
    yield call(
      [localStorage, localStorage.setItem],
      "authtoken",
      res.data.token
    );
    yield put({
      type: ctx.LOG_IN.SUCCESS,
      payload: res.data.token,
    });
    toast.success("Logged In Successfully !!!");
  } catch (error) {
    toast.error(error);
  }
}

function* logOutFunc() {
  try {
    yield call([localStorage, localStorage.removeItem], "authtoken");
    yield put({
      type: ctx.LOG_OUT.SUCCESS,
    });
  } catch (err) {
    toast.error(err);
  }
}

export default function* user() {
  yield takeEvery(ctx.INITIALIZE_APP.REQUEST, initializeApp);
  yield takeEvery(ctx.LOG_IN.REQUEST, logIn);
  yield takeEvery(ctx.LOG_OUT.REQUEST, logOutFunc);
}

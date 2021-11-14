import { call, all } from "redux-saga/effects";
import user from "./saga/user";
import dellers from "./saga/dellers";

function* rootSaga() {
  yield all([call(user), call(dellers)]);
}

export default rootSaga;

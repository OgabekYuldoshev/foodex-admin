import { call, all } from "redux-saga/effects";
import user from "./saga/user";
import dellers from "./saga/dellers";
import orders from "./saga/orders";

function* rootSaga() {
  yield all([call(user), call(dellers), call(orders)]);
}

export default rootSaga;

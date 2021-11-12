import { call, all } from "redux-saga/effects";
import user from "./saga/user"

function* rootSaga(){
    yield all([
        call(user)
    ])
}

export default rootSaga
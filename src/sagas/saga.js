import { fork } from "redux-saga/effects"
import UserSagas from "./userSagas"
import BoardSagas from "./boardSaga"
import TaskSagas from "./taskSaga"

export default function* rootSaga() {
  let sagaFunctions = []
  sagaFunctions = sagaFunctions.concat(UserSagas.sagaFunctions())
  sagaFunctions = sagaFunctions.concat(BoardSagas.sagaFunctions())
  sagaFunctions = sagaFunctions.concat(TaskSagas.sagaFunctions())

  for (let i = 0; i < sagaFunctions.length; i++) {
    yield fork(sagaFunctions[i])
  }
}
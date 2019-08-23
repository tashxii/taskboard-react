import { eventChannel } from "redux-saga"
import { takeEvery, take, call, put } from "redux-saga/effects"
import {
  LOGIN_SUCCESS_EVENT,
  listTasksStartEvent,
} from "../actions"
import ApiCommon from "../libs/apis/apiCommon"

function* handleWebsocketMessage() {
  yield takeEvery(LOGIN_SUCCESS_EVENT, watchWebsocketMessage)
}

function* watchWebsocketMessage(action) {
  const channel = yield call(createWebsocketChannel, action.payload.user)
  while (true) {
    const pushedAction = yield take(channel)
    yield put(pushedAction)
  }
}

const createWebsocketChannel = async loginUser => {
  return eventChannel(emit => {
    const ws = ApiCommon.createWebsocket(loginUser)
    // ws.onopen = () => {
    //   console.warn("opening...")
    // }
    // ws.onerror = (error) => {
    //   console.error("WebSocket error " + error)
    // }
    ws.onmessage = (msg) => {
      const params = msg.data.split(" ")
      if (params.length >= 1) {
        const type = params[0]
        let ids = params.slice(1)
        switch (type) {
          case "UPDATE_TASKBOARDS": {
            ids.forEach(boardId => {
              emit(listTasksStartEvent(boardId))
            })
            break
          }
          case "UPDATE_BOARDS":
            break
          case "UPDATE_TASKS":
            break
          case "UPDATE_USERS":
            break
          default:
            break
        }
      }
    }

    return () => {
      // Nothing
    }
  })
}

export default class WsSaga {
  static sagaFunctions = () => {
    return [handleWebsocketMessage]
  }
}

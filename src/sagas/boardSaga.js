import { takeEvery, call, put } from "redux-saga/effects"
import {
  LIST_BOARDS_START_EVENT,
  listBoardsSuccessEvent,
  listBoardsFailureEvent,
} from "../actions"
import BoardService from "../libs/services/boardService"


function* handleListBoards() {
  yield takeEvery(LIST_BOARDS_START_EVENT, listBoards)
}

function* listBoards(/*action*/) {
  const { boards, error } = yield call(BoardService.listAsync)
  if (!error) {
    yield put(listBoardsSuccessEvent(boards))
  } else {
    yield put(listBoardsFailureEvent(error))
  }
}

export default class BoardSagas {
  static sagaFunctions = () => {
    return [
      handleListBoards,
    ]
  }
}

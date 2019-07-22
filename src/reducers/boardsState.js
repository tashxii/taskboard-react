import {
  LIST_BOARDS_START_EVENT,
  LIST_BOARDS_SUCCESS_EVENT,
  LIST_BOARDS_FAILURE_EVENT,
} from "../actions"

const initialState = {
  boards: [],
  isLoadingBoards: false,
}

const boardsState = (state = initialState, action) => {
  const type = action.type
  const payload = action.payload
  switch (type) {
    case LIST_BOARDS_START_EVENT:
      return { ...state, isLoadingBoards: true }
    case LIST_BOARDS_SUCCESS_EVENT:
      return { ...state, isLoadingBoards: false, boards: payload.boards }
    case LIST_BOARDS_FAILURE_EVENT:
      return { ...state, isLoadingBoards: false }
    default:
      return state
  }
}

export default boardsState

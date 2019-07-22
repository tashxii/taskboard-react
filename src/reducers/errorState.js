import { SHOW_ERROR_CLOSE_EVENT, LOGIN_FAILURE_EVENT, SIGNUP_FAILURE_EVENT } from "../actions"

const initialState = { error: undefined }
const errorState = (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
    case LOGIN_FAILURE_EVENT:
    case SIGNUP_FAILURE_EVENT:
      // ログインとサインアップのエラーはログイン画面で処理するため無視する
      return { ...state }
    case SHOW_ERROR_CLOSE_EVENT:
      return { ...state, error: undefined }
    default:
      if (action.type.endsWith("_FAILURE_EVENT") && payload.error) {
        return { ...state, error: payload.error }
      }
      return state

  }
}

export default errorState

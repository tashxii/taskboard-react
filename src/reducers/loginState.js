import {
  LOGIN_START_EVENT,
  LOGIN_SUCCESS_EVENT,
  LOGIN_FAILURE_EVENT,
  LOGOUT_START_EVENT,
  LOGOUT_SUCCESS_EVENT,
  LOGOUT_FAILURE_EVENT,
  SIGNUP_START_EVENT,
  SIGNUP_SUCCESS_EVENT,
  SIGNUP_FAILURE_EVENT,
  CLEAR_LOGIN_ERRORS_EVENT,
  UPDATE_LOGIN_USER_START_EVENT,
  UPDATE_LOGIN_USER_SUCCESS_EVENT,
  UPDATE_LOGIN_USER_FAILURE_EVENT,
} from "../actions"

const initialState = {
  loginUser: undefined,
  isLoginProcessing: false,
  isLogoutProcessing: false,
  isSignUpProcessing: false,
  isSaveUserProcessing: false,
  loginError: undefined,
  signUpError: undefined,
}
const loginState = (state = initialState, action) => {
  const type = action.type
  const payload = action.payload
  switch (type) {
    case LOGIN_START_EVENT:
      return { ...state, isLoginProcessing: true }
    case LOGIN_SUCCESS_EVENT:
      return { ...state, isLoginProcessing: false, loginUser: payload.user, loginError: undefined, signUpError: undefined }
    case LOGIN_FAILURE_EVENT:
      return { ...state, isLoginProcessing: false, loginError: payload.error }
    case SIGNUP_START_EVENT:
      return { ...state, isSignUpProcessing: true }
    case SIGNUP_SUCCESS_EVENT:
      return { ...state, isSignUpProcessing: false, loginUser: payload.user, loginError: undefined, signUpError: undefined }
    case SIGNUP_FAILURE_EVENT:
      return { ...state, isSignUpProcessing: false, signUpError: payload.error }
    case LOGOUT_START_EVENT:
      return { ...state, isLogoutProcessing: true }
    case LOGOUT_SUCCESS_EVENT:
      return { ...state, isLogoutProcessing: false, loginUser: undefined }
    case LOGOUT_FAILURE_EVENT:
      return { ...state, isLogoutProcessing: false, loginError: payload.error }
    case CLEAR_LOGIN_ERRORS_EVENT:
      return { ...state, loginError: undefined, signUpError: undefined }
    case UPDATE_LOGIN_USER_START_EVENT:
      return { ...state, isSaveUserProcessing: true }
    case UPDATE_LOGIN_USER_SUCCESS_EVENT:
      return { ...state, isSaveUserProcessing: false, loginUser: payload.user }
    case UPDATE_LOGIN_USER_FAILURE_EVENT:
      return { ...state, isSaveUserProcessing: false }
    default:
      return state
  }
}

export default loginState

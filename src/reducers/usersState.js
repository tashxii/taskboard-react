import {
  LIST_USERS_START_EVENT,
  LIST_USERS_SUCCESS_EVENT,
  LIST_USERS_FAILURE_EVENT,
  UPDATE_LOGIN_USER_SUCCESS_EVENT,
} from "../actions"

const initialState = {
  users: [],
  isLoadingUsers: false,
}

const settingsState = (state = initialState, action) => {
  const type = action.type
  const payload = action.payload
  switch (type) {
    case LIST_USERS_START_EVENT:
      return { ...state, isLoadingUsers: true }
    case LIST_USERS_SUCCESS_EVENT:
      return { ...state, isLoadingUsers: false, users: payload.users }
    case LIST_USERS_FAILURE_EVENT:
      return { ...state, isLoadingUsers: false }
    case UPDATE_LOGIN_USER_SUCCESS_EVENT: {
      for (let i = 0; i < state.users.length; i++) {
        if (state.users[i].id === payload.user.id) {
          state.users[i] = payload.user
          break
        }
      }
      return { ...state }
    }
    default:
      return state
  }
}

export default settingsState

export const SWITCH_MAIN_VIEW_EVENT = "SWITCH_MAIN_VIEW_EVENT"
export const UPDATE_LOGIN_USER_START_EVENT = "UPDATE_LOGIN_USER_START_EVENT"
export const UPDATE_LOGIN_USER_SUCCESS_EVENT = "UPDATE_LOGIN_USER_SUCCESS_EVENT"
export const UPDATE_LOGIN_USER_FAILURE_EVENT = "UPDATE_LOGIN_USER_FAILURE_EVENT"
export const LOGOUT_START_EVENT = "LOGOUT_START_EVENT"
export const LOGOUT_SUCCESS_EVENT = "LOGOUT_SUCCESS_EVENT"
export const LOGOUT_FAILURE_EVENT = "LOGOUT_FAILURE_EVENT"
export const SHOW_ERROR_CLOSE_EVENT = "SHOW_ERROR_CLOSE_EVENT"

export const switchMainViewEvent = (view) => ({
  type: SWITCH_MAIN_VIEW_EVENT,
  payload: {
    view: view,
  }
})

export const updateLoginUserStartEvent = (user) => ({
  type: UPDATE_LOGIN_USER_START_EVENT,
  payload: {
    user: user,
  }
})

export const updateLoginUserSuccessEvent = (user) => ({
  type: UPDATE_LOGIN_USER_SUCCESS_EVENT,
  payload: {
    user: user,
  }
})

export const updateLoginUserFailureEvent = (error) => ({
  type: UPDATE_LOGIN_USER_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const logoutStartEvent = () => ({
  type: LOGOUT_START_EVENT,
  payload: {
  }
})

export const logoutSuccessEvent = () => ({
  type: LOGOUT_SUCCESS_EVENT,
  payload: {
  }
})

export const logoutFailureEvent = (error) => ({
  type: LOGOUT_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const showErrorCloseEvent = () => ({
  type: SHOW_ERROR_CLOSE_EVENT,
  payload: {
  }
})

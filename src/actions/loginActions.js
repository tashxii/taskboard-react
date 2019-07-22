export const LOGIN_START_EVENT = "LOGIN_START_EVENT"
export const LOGIN_SUCCESS_EVENT = "LOGIN_SUCCESS_EVENT"
export const LOGIN_FAILURE_EVENT = "LOGIN_FAILURE_EVENT"
export const SIGNUP_START_EVENT = "SIGNUP_START_EVENT"
export const SIGNUP_SUCCESS_EVENT = "SIGNUP_SUCCESS_EVENT"
export const SIGNUP_FAILURE_EVENT = "SIGNUP_FAILURE_EVENT"
export const CLEAR_LOGIN_ERRORS_EVENT = "CLEAR_LOGIN_ERRORS_EVENT"

export const loginStartEvent = (name, password) => ({
  type: LOGIN_START_EVENT,
  payload: {
    name,
    password,
  }
})

export const loginSuccessEvent = (user) => ({
  type: LOGIN_SUCCESS_EVENT,
  payload: {
    user,
  }
})

export const loginFailureEvent = (error) => ({
  type: LOGIN_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const signUpStartEvent = (userCreateRequest) => ({
  type: SIGNUP_START_EVENT,
  payload: {
    userCreateRequest,
  }
})

export const signUpSuccessEvent = (user) => ({
  type: SIGNUP_SUCCESS_EVENT,
  payload: {
    user,
  }
})

export const signUpFailureEvent = (error) => ({
  type: SIGNUP_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const clearLoginErrorsEvent = () => ({
  type: CLEAR_LOGIN_ERRORS_EVENT,
  payload: {
  }
})

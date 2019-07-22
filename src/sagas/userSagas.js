import { takeEvery, call, put } from "redux-saga/effects"
import {
  LOGIN_START_EVENT,
  loginFailureEvent,
  loginSuccessEvent,
  SIGNUP_START_EVENT,
  signUpSuccessEvent,
  signUpFailureEvent,
  LOGOUT_START_EVENT,
  logoutSuccessEvent,
  logoutFailureEvent,
  UPDATE_LOGIN_USER_START_EVENT,
  updateLoginUserFailureEvent,
  updateLoginUserSuccessEvent,
  LIST_USERS_START_EVENT,
  listUsersSuccessEvent,
  listUsersFailureEvent,
} from "../actions"
import UserService from "../libs/services/userService"


function* handleLogin() {
  yield takeEvery(LOGIN_START_EVENT, login)
}

function* login(action) {
  const payload = action.payload
  const { user, error } = yield call(UserService.loginAsync, payload.name, payload.password)
  if (!error) {
    yield put(loginSuccessEvent(user))
  } else {
    yield put(loginFailureEvent(error))
  }
}

function* handleSignUp() {
  yield takeEvery(SIGNUP_START_EVENT, signUp)
}

function* signUp(action) {
  const payload = action.payload
  const { user, error } = yield call(UserService.createAsync, payload.userCreateRequest)
  if (!error) {
    yield put(signUpSuccessEvent(user))
  } else {
    yield put(signUpFailureEvent(error))
  }
}

function* handleLogout() {
  yield takeEvery(LOGOUT_START_EVENT, logout)
}

function* logout(/*action*/) {
  const { error } = yield call(UserService.logoutAsync)
  if (!error) {
    yield put(logoutSuccessEvent())
  } else {
    yield put(logoutFailureEvent(error))
  }
}

function* handleUpdateLoginUser() {
  yield takeEvery(UPDATE_LOGIN_USER_START_EVENT, updateLoginUser)
}

function* updateLoginUser(action) {
  const payload = action.payload
  const { user, error } = yield call(UserService.updateAsync, payload.user)
  if (!error) {
    yield put(updateLoginUserSuccessEvent(user))
  } else {
    yield put(updateLoginUserFailureEvent(error))
  }
}


function* handleListUsers() {
  yield takeEvery(LIST_USERS_START_EVENT, listUsers)
}

function* listUsers(/*action*/) {
  const { users, error } = yield call(UserService.listAsync)
  if (!error) {
    yield put(listUsersSuccessEvent(users))
  } else {
    yield put(listUsersFailureEvent(error))
  }
}

export default class UserSagas {
  static sagaFunctions = () => {
    return [
      handleLogin,
      handleSignUp,
      handleLogout,
      handleUpdateLoginUser,
      handleListUsers,
    ]
  }
}

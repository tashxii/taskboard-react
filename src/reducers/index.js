import { combineReducers } from "redux"
import loginState from "./loginState"
import mainState from "./mainState"
import boardsState from "./boardsState"
import tasksState from "./tasksState"
import usersState from "./usersState"
import errorState from "./errorState"

const appState = combineReducers({
  loginState,
  mainState,
  boardsState,
  tasksState,
  usersState,
  errorState,
})
export default appState

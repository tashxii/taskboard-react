import { connect } from "react-redux"
import SettingsPage from "../components/pages/SettingsPage"
import {
  listUsersStartEvent,
  createUserStartEvent,
  updateUserStartEvent,
  deleteUserStartEvent,
  listBoardsStartEvent,
  createBoardStartEvent,
  updateBoardStartEvent,
  deleteBoardStartEvent,
  changeBoardOrderStartEvent,
} from "../actions"

const mapStateToProps = (state) => ({
  settingsState: state.settingsState,
})

const mapDispatchToProps = (dispatch) => ({
  loadUserList() {
    dispatch(listUsersStartEvent())
  },
  onCreateUserButtonClick(userCreateRequest) {
    dispatch(createUserStartEvent(userCreateRequest))
  },
  onUpdateUserIconClick(user) {
    dispatch(updateUserStartEvent(user))
  },
  onDeleteUserIconClick(user) {
    dispatch(deleteUserStartEvent(user))
  },
  loadBoardList() {
    dispatch(listBoardsStartEvent())
  },
  onCreateBoardButtonClick(boardCreateRequest) {
    dispatch(createBoardStartEvent(boardCreateRequest))
  },
  onUpdateBoardIconClick(board) {
    dispatch(updateBoardStartEvent(board))
  },
  onDeleteBoardIconClick(board) {
    dispatch(deleteBoardStartEvent(board))
  },
  changeBoardOrderLinkClick(boards) {
    dispatch(changeBoardOrderStartEvent(boards))
  },
})

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPage)

export default SettingsContainer

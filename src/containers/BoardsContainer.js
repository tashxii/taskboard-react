import { connect } from "react-redux"
import BoardsPage from "../components/pages/BoardsPage"
import {
  listUsersStartEvent,
  listBoardsStartEvent,
  listTasksStartEvent,
  createTaskStartEvent,
  updateTaskStartEvent,
  deleteTaskStartEvent,
  updateTaskOrdersStartEvent,
} from "../actions"

const mapStateToProps = (state) => ({
  usersState: state.usersState,
  boardsState: state.boardsState,
  tasksState: state.tasksState,
})

const mapDispatchToProps = (dispatch) => ({
  loadUserList() {
    dispatch(listUsersStartEvent())
  },
  loadBoardList() {
    dispatch(listBoardsStartEvent())
  },
  loadTaskList(board) {
    dispatch(listTasksStartEvent(board.id))
  },
  onNewTaskButtonClick(task) {
    dispatch(createTaskStartEvent(task))
  },
  onUpdateTaskButtonClick(task) {
    dispatch(updateTaskStartEvent(task))
  },
  onDeleteTaskButtonClick(task) {
    dispatch(deleteTaskStartEvent(task))
  },
  onDropTask(taskId, sourceBoardId, sourceDispOrder, destBoardId, destInsertIndex) {
    dispatch(updateTaskOrdersStartEvent(taskId, sourceBoardId, sourceDispOrder, destBoardId, destInsertIndex))
  },
})

const BoardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BoardsPage)

export default BoardsContainer

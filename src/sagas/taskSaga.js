import { takeEvery, call, put, select } from "redux-saga/effects"
import {
  LIST_TASKS_START_EVENT,
  listTasksSuccessEvent,
  listTasksFailureEvent,
  CREATE_TASK_START_EVENT,
  createTaskSuccessEvent,
  createTaskFailureEvent,
  updateTaskSuccessEvent,
  DELETE_TASK_START_EVENT,
  deleteTaskSuccessEvent,
  deleteTaskFailureEvent,
  UPDATE_TASK_START_EVENT,
  updateTaskFailureEvent,
  UPDATE_TASK_ORDERS_START_EVENT,
  updateTaskOrdersSuccessEvent,
  updateTaskOrdersFailureEvent,
} from "../actions"
import TaskService from "../libs/services/taskService"

function* handleListTasks() {
  yield takeEvery(LIST_TASKS_START_EVENT, listTasks)
}

function* listTasks(action) {
  const payload = action.payload
  const { tasks, error } = yield call(TaskService.listAsync, payload.boardId)
  if (!error) {
    yield put(listTasksSuccessEvent(payload.boardId, tasks))
  } else {
    yield put(listTasksFailureEvent(error))
  }
}

function* handleCreateTask() {
  yield takeEvery(CREATE_TASK_START_EVENT, createTask)
}

function* createTask(action) {
  const payload = action.payload
  const { task, error } = yield call(TaskService.createAsync, payload.task)
  if (!error) {
    yield put(createTaskSuccessEvent(task))
  } else {
    yield put(createTaskFailureEvent(error))
  }
}

function* handleUpdateTask() {
  yield takeEvery(UPDATE_TASK_START_EVENT, updateTask)
}

function* updateTask(action) {
  const payload = action.payload
  const state = yield select(state => state.tasksState)
  // update task dispOrder
  let originalBoardId = payload.task.id
  Object.keys(state.boardIdToTasks).forEach(boardId => {
    state.boardIdToTasks[boardId].forEach((task) => {
      if (task.id === payload.task.id) {
        originalBoardId = task.boardId
      }
    })
  })
  if (originalBoardId !== payload.task.boardId) {
    const max = state.boardIdToTasks[payload.task.boardId]
      .reduce((p, task) => { return (task.dispOrder > p) ? task.dispOrder : p }, 0)
    payload.task.dispOrder = (state.boardIdToTasks[payload.task.boardId].length === 1) ? 1 : max + 1
  }
  const { task, error } = yield call(TaskService.updateAsync, payload.task)
  if (!error) {
    yield put(updateTaskSuccessEvent(task))
  } else {
    yield put(updateTaskFailureEvent(error))
  }
}

function* handleDeleteTask() {
  yield takeEvery(DELETE_TASK_START_EVENT, deleteTask)
}

function* deleteTask(action) {
  const payload = action.payload
  const { error } = yield call(TaskService.deleteAsync, payload.task)
  if (!error) {
    yield put(deleteTaskSuccessEvent(payload.task))
  } else {
    yield put(deleteTaskFailureEvent(error))
  }
}

function* handleUpdateTaskOrders() {
  yield takeEvery(UPDATE_TASK_ORDERS_START_EVENT, updateTaskOrders)
}

function* updateTaskOrders(action) {
  const payload = action.payload
  const { taskId, fromBoardId, fromDispOrder, toBoardId, toInsertIndex } = payload
  const boardIdToTasks = yield select(state => state.tasksState.boardIdToTasks)
  let toTasks = boardIdToTasks[toBoardId]
  let toDispOrder = 0
  if (toInsertIndex === toTasks.length) {
    toDispOrder = (toTasks.length !== 0) ? toTasks[toTasks.length - 1].dispOrder + 1 : 1
  } else {
    toDispOrder = toTasks[toInsertIndex].dispOrder
  }
  const { error } = yield call(
    TaskService.updateTaskOrdersAsync,
    taskId, fromBoardId, fromDispOrder,
    toBoardId, toDispOrder
  )
  if (!error) {
    yield put(updateTaskOrdersSuccessEvent(taskId, fromBoardId, fromDispOrder, toBoardId, toDispOrder, toInsertIndex))
  } else {
    yield put(updateTaskOrdersFailureEvent(error))
  }
}

export default class TaskSagas {
  static sagaFunctions = () => {
    return [
      handleListTasks,
      handleCreateTask,
      handleUpdateTask,
      handleDeleteTask,
      handleUpdateTaskOrders,
    ]
  }
}

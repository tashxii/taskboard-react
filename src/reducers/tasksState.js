import {
  CREATE_TASK_START_EVENT,
  CREATE_TASK_SUCCESS_EVENT,
  CREATE_TASK_FAILURE_EVENT,
  LIST_TASKS_SUCCESS_EVENT,
  UPDATE_TASK_SUCCESS_EVENT,
  UPDATE_TASK_FAILURE_EVENT,
  UPDATE_TASK_START_EVENT,
  DELETE_TASK_START_EVENT,
  DELETE_TASK_SUCCESS_EVENT,
  DELETE_TASK_FAILURE_EVENT,
  UPDATE_TASK_ORDERS_SUCCESS_EVENT,
  UPDATE_TASK_ORDERS_START_EVENT,
  UPDATE_TASK_ORDERS_FAILURE_EVENT,
} from "../actions"

import Task from "../libs/models/task"

const initialState = {
  boardIdToTasks: {},
  isSavingNewTask: false,
  isSavingTask: false,
  boardIdToMoving: {},
}

const tasksState = (state = initialState, action) => {
  const type = action.type
  const payload = action.payload
  switch (type) {
    case CREATE_TASK_START_EVENT:
      return { ...state, isSavingNewTask: true }
    case CREATE_TASK_SUCCESS_EVENT:
      if (!state.boardIdToTasks[payload.task.boardId]) {
        state.boardIdToTasks[payload.task.boardId] = []
      }
      state.boardIdToTasks[payload.task.boardId].push(payload.task)
      return { ...state, isSavingNewTask: false }
    case CREATE_TASK_FAILURE_EVENT:
      return { ...state, isSavingNewTask: false }
    case LIST_TASKS_SUCCESS_EVENT:
      state.boardIdToTasks[payload.boardId] = payload.tasks
      return { ...state }
    case UPDATE_TASK_START_EVENT:
      return { ...state, isSavingTask: true }
    case UPDATE_TASK_SUCCESS_EVENT: {
      // remove original task
      Object.keys(state.boardIdToTasks).forEach(boardId => {
        state.boardIdToTasks[boardId] = state.boardIdToTasks[boardId]
          .filter((task) => { return task.id !== payload.task.id })
      })
      // Put and sort by dispOrder
      if (!state.boardIdToTasks[payload.task.boardId]) {
        state.boardIdToTasks[payload.task.boardId] = []
      }
      state.boardIdToTasks[payload.task.boardId].push(payload.task)
      state.boardIdToTasks[payload.task.boardId]
        .sort((a, b) => { return (a.dispOrder > b.dispOrder) ? 1 : -1 })
      return { ...state, isSavingTask: false }
    }
    case UPDATE_TASK_FAILURE_EVENT:
      return { ...state, isSavingTask: false }
    case DELETE_TASK_START_EVENT:
      return { ...state }
    case DELETE_TASK_SUCCESS_EVENT:
      // remove original task
      Object.keys(state.boardIdToTasks).forEach(boardId => {
        state.boardIdToTasks[boardId] = state.boardIdToTasks[boardId]
          .filter((task) => { return task.id !== payload.task.id })
      })
      return { ...state, boardIdToTasks: state.boardIdToTasks }
    case DELETE_TASK_FAILURE_EVENT:
      return { ...state }
    case UPDATE_TASK_ORDERS_START_EVENT: {
      const fromTasks = state.boardIdToTasks[payload.fromBoardId]
      Task.createIdToTaskMap(fromTasks)[payload.taskId].moving = true
      state.boardIdToMoving[payload.fromBoardId] = true
      state.boardIdToMoving[payload.toBoardId] = true
      return { ...state }
    }
    case UPDATE_TASK_ORDERS_SUCCESS_EVENT: {
      state.boardIdToMoving[payload.fromBoardId] = false
      state.boardIdToMoving[payload.toBoardId] = false
      const { taskId, fromBoardId, fromDispOrder, toBoardId, toDispOrder, toInsertIndex } = payload
      const fromTasks = state.boardIdToTasks[fromBoardId]
      Task.createIdToTaskMap(fromTasks)[payload.taskId].moving = false
      const toTasks = state.boardIdToTasks[toBoardId]
      // Adjust order
      if (fromBoardId === toBoardId) {
        const highDispOrder = (fromDispOrder > toDispOrder) ? fromDispOrder : toDispOrder
        const lowDispOrder = (fromDispOrder <= toDispOrder) ? fromDispOrder : toDispOrder
        const delta = (fromDispOrder > toDispOrder) ? 1 : -1
        fromTasks.forEach(task => {
          task.dispOrder = (lowDispOrder <= task.dispOrder && task.dispOrder <= highDispOrder) ? task.dispOrder + delta : task.dispOrder
        })
      } else {
        fromTasks.forEach(task => {
          task.dispOrder = (task.dispOrder >= fromDispOrder) ? task.dispOrder - 1 : task.dispOrder
        })
        toTasks.forEach(task => {
          task.dispOrder = (task.dispOrder >= toDispOrder) ? task.dispOrder + 1 : task.dispOrder
        })
      }
      let dragTask = undefined
      let fromIndex = 0
      for (let i = 0;i < fromTasks.length;i++) {
        const task = fromTasks[i]
        if (task.id === taskId) {
          dragTask = task
          fromIndex = i
          break
        }
      }
      fromTasks.splice(fromIndex, 1)
      toTasks.splice(toInsertIndex, 0, dragTask)
      dragTask.dispOrder = toDispOrder
      dragTask.boardId = toBoardId
      return { ...state }
    }
    case UPDATE_TASK_ORDERS_FAILURE_EVENT: {
      state.boardIdToMoving[payload.fromBoardId] = false
      state.boardIdToMoving[payload.toBoardId] = false
      return { ...state }
    }
    default:
      return state
  }
}

export default tasksState

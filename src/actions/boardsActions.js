export const LIST_TASKS_START_EVENT = "LIST_TASKS_START_EVENT"
export const LIST_TASKS_SUCCESS_EVENT = "LIST_TASKS_SUCCESS_EVENT"
export const LIST_TASKS_FAILURE_EVENT = "LIST_TASKS_FAILURE_EVENT"
export const CREATE_TASK_START_EVENT = "CREATE_TASK_START_EVENT"
export const CREATE_TASK_SUCCESS_EVENT = "CREATE_TASK_SUCCESS_EVENT"
export const CREATE_TASK_FAILURE_EVENT = "CREATE_TASK_FAILURE_EVENT"
export const UPDATE_TASK_START_EVENT = "UPDATE_TASK_START_EVENT"
export const UPDATE_TASK_SUCCESS_EVENT = "UPDATE_TASK_SUCCESS_EVENT"
export const UPDATE_TASK_FAILURE_EVENT = "UPDATE_TASK_FAILURE_EVENT"
export const DELETE_TASK_START_EVENT = "DELETE_TASK_START_EVENT"
export const DELETE_TASK_SUCCESS_EVENT = "DELETE_TASK_SUCCESS_EVENT"
export const DELETE_TASK_FAILURE_EVENT = "DELETE_TASK_FAILURE_EVENT"
export const UPDATE_TASK_ORDERS_START_EVENT = "UPDATE_TASK_ORDERS_START_EVENT"
export const UPDATE_TASK_ORDERS_SUCCESS_EVENT = "UPDATE_TASK_ORDERS_SUCCESS_EVENT"
export const UPDATE_TASK_ORDERS_FAILURE_EVENT = "UPDATE_TASK_ORDERS_FAILURE_EVENT"

export const listTasksStartEvent = (boardId) => ({
  type: LIST_TASKS_START_EVENT,
  payload: {
    boardId: boardId,
  }
})

export const listTasksSuccessEvent = (boardId, tasks) => ({
  type: LIST_TASKS_SUCCESS_EVENT,
  payload: {
    boardId: boardId,
    tasks: tasks,
  }
})

export const listTasksFailureEvent = (error) => ({
  type: LIST_TASKS_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const createTaskStartEvent = (task) => ({
  type: CREATE_TASK_START_EVENT,
  payload: {
    task: task,
  }
})

export const createTaskSuccessEvent = (task) => ({
  type: CREATE_TASK_SUCCESS_EVENT,
  payload: {
    task: task,
  }
})

export const createTaskFailureEvent = (error) => ({
  type: CREATE_TASK_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const updateTaskStartEvent = (task) => ({
  type: UPDATE_TASK_START_EVENT,
  payload: {
    task: task,
  }
})

export const updateTaskSuccessEvent = (task) => ({
  type: UPDATE_TASK_SUCCESS_EVENT,
  payload: {
    task: task,
  }
})

export const updateTaskFailureEvent = (error) => ({
  type: UPDATE_TASK_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const deleteTaskStartEvent = (task) => ({
  type: DELETE_TASK_START_EVENT,
  payload: {
    task: task,
  }
})

export const deleteTaskSuccessEvent = (task) => ({
  type: DELETE_TASK_SUCCESS_EVENT,
  payload: {
    task: task,
  }
})

export const deleteTaskFailureEvent = (error) => ({
  type: DELETE_TASK_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const updateTaskOrdersStartEvent = (
  taskId,
  fromBoardId,
  fromDispOrder,
  toBoardId,
  toInsertIndex,
) => ({
  type: UPDATE_TASK_ORDERS_START_EVENT,
  payload: {
    taskId,
    fromBoardId,
    fromDispOrder,
    toBoardId,
    toInsertIndex,
  }
})

export const updateTaskOrdersSuccessEvent = (
  taskId,
  fromBoardId,
  fromDispOrder,
  toBoardId,
  toDispOrder,
  toInsertIndex,
) => ({
  type: UPDATE_TASK_ORDERS_SUCCESS_EVENT,
  payload: {
    taskId,
    fromBoardId,
    fromDispOrder,
    toBoardId,
    toDispOrder,
    toInsertIndex,
  }
})

export const updateTaskOrdersFailureEvent = (error) => ({
  type: UPDATE_TASK_ORDERS_FAILURE_EVENT,
  payload: {
    error,
  }
})

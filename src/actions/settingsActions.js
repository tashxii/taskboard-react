export const LIST_USERS_START_EVENT = "LIST_USERS_START_EVENT"
export const LIST_USERS_SUCCESS_EVENT = "LIST_USERS_SUCCESS_EVENT"
export const LIST_USERS_FAILURE_EVENT = "LIST_USERS_FAILURE_EVENT"
export const CREATE_USER_START_EVENT = "CREATE_USER_START_EVENT"
export const CREATE_USER_SUCCESS_EVENT = "CREATE_USER_SUCCESS_EVENT"
export const CREATE_USER_FAILURE_EVENT = "CREATE_USER_FAILURE_EVENT"
export const UPDATE_USER_START_EVENT = "UPDATE_USER_START_EVENT"
export const UPDATE_USER_SUCCESS_EVENT = "UPDATE_USER_SUCCESS_EVENT"
export const UPDATE_USER_FAILURE_EVENT = "UPDATE_USER_FAILURE_EVENT"
export const DELETE_USER_START_EVENT = "DELETE_USER_START_EVENT"
export const DELETE_USER_SUCCESS_EVENT = "DELETE_USER_SUCCESS_EVENT"
export const DELETE_USER_FAILURE_EVENT = "DELETE_USER_FAILURE_EVENT"
export const LIST_BOARDS_START_EVENT = "LIST_BOARDS_START_EVENT"
export const LIST_BOARDS_SUCCESS_EVENT = "LIST_BOARDS_SUCCESS_EVENT"
export const LIST_BOARDS_FAILURE_EVENT = "LIST_BOARDS_FAILURE_EVENT"
export const CREATE_BOARD_START_EVENT = "CREATE_BOARD_START_EVENT"
export const CREATE_BOARD_SUCCESS_EVENT = "CREATE_BOARD_SUCCESS_EVENT"
export const CREATE_BOARD_FAILURE_EVENT = "CREATE_BOARD_FAILURE_EVENT"
export const UPDATE_BOARD_START_EVENT = "UPDATE_BOARD_START_EVENT"
export const UPDATE_BOARD_SUCCESS_EVENT = "UPDATE_BOARD_SUCCESS_EVENT"
export const UPDATE_BOARD_FAILURE_EVENT = "UPDATE_BOARD_FAILURE_EVENT"
export const DELETE_BOARD_START_EVENT = "DELETE_BOARD_START_EVENT"
export const DELETE_BOARD_SUCCESS_EVENT = "DELETE_BOARD_SUCCESS_EVENT"
export const DELETE_BOARD_FAILURE_EVENT = "DELETE_BOARD_FAILURE_EVENT"
export const CHANGE_BOARD_ORDER_START_EVENT = "CHANGE_BOARD_ORDER_START_EVENT"
export const CHANGE_BOARD_ORDER_SUCCESS_EVENT = "CHANGE_BOARD_ORDER_SUCCESS_EVENT"
export const CHANGE_BOARD_ORDER_FAILURE_EVENT = "CHANGE_BOARD_ORDER_FAILURE_EVENT"

export const listUsersStartEvent = () => ({
  type: LIST_USERS_START_EVENT,
  payload: {
  }
})

export const listUsersSuccessEvent = (users) => ({
  type: LIST_USERS_SUCCESS_EVENT,
  payload: {
    users: users,
  }
})

export const listUsersFailureEvent = (error) => ({
  type: LIST_USERS_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const createUserStartEvent = (userCreateRequest) => ({
  type: CREATE_USER_START_EVENT,
  payload: {
    userCreateRequest: userCreateRequest,
  }
})

export const createUserSuccessEvent = (user) => ({
  type: CREATE_USER_SUCCESS_EVENT,
  payload: {
    user: user,
  }
})

export const createUserFailureEvent = (error) => ({
  type: CREATE_USER_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const updateUserStartEvent = (user) => ({
  type: UPDATE_USER_START_EVENT,
  payload: {
    user: user,
  }
})

export const updateUserSuccessEvent = (user) => ({
  type: UPDATE_USER_SUCCESS_EVENT,
  payload: {
    user: user,
  }
})

export const updateUserFailureEvent = (error) => ({
  type: UPDATE_USER_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const deleteUserStartEvent = (user) => ({
  type: DELETE_USER_START_EVENT,
  payload: {
    user: user,
  }
})

export const deleteUserSuccessEvent = (userId) => ({
  type: DELETE_USER_SUCCESS_EVENT,
  payload: {
    userId: userId,
  }
})

export const deleteUserFailureEvent = (error) => ({
  type: DELETE_USER_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const listBoardsStartEvent = () => ({
  type: LIST_BOARDS_START_EVENT,
  payload: {
  }
})

export const listBoardsSuccessEvent = (boards) => ({
  type: LIST_BOARDS_SUCCESS_EVENT,
  payload: {
    boards: boards,
  }
})

export const listBoardsFailureEvent = (error) => ({
  type: LIST_BOARDS_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const createBoardStartEvent = (boardCreateRequest) => ({
  type: CREATE_BOARD_START_EVENT,
  payload: {
    boardCreateRequest: boardCreateRequest,
  }
})

export const createBoardSuccessEvent = (board) => ({
  type: CREATE_BOARD_SUCCESS_EVENT,
  payload: {
    board: board,
  }
})

export const createBoardFailureEvent = (error) => ({
  type: CREATE_BOARD_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const updateBoardStartEvent = (board) => ({
  type: UPDATE_BOARD_START_EVENT,
  payload: {
    board: board,
  }
})

export const updateBoardSuccessEvent = (board) => ({
  type: UPDATE_BOARD_SUCCESS_EVENT,
  payload: {
    board: board,
  }
})

export const updateBoardFailureEvent = (error) => ({
  type: UPDATE_BOARD_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const deleteBoardStartEvent = (board) => ({
  type: DELETE_BOARD_START_EVENT,
  payload: {
    board: board,
  }
})

export const deleteBoardSuccessEvent = (boardId) => ({
  type: DELETE_BOARD_SUCCESS_EVENT,
  payload: {
    boardId: boardId,
  }
})

export const deleteBoardFailureEvent = (error) => ({
  type: DELETE_BOARD_FAILURE_EVENT,
  payload: {
    error,
  }
})

export const changeBoardOrderStartEvent = (boards) => ({
  type: CHANGE_BOARD_ORDER_START_EVENT,
  payload: {
    boards: boards,
  }
})

export const changeBoardOrderSuccessEvent = () => ({
  type: CHANGE_BOARD_ORDER_SUCCESS_EVENT,
  payload: {
  }
})

export const changeBoardOrderFailureEvent = (error) => ({
  type: CHANGE_BOARD_ORDER_FAILURE_EVENT,
  payload: {
    error,
  }
})

import Task from "../../models/task"

export default class TaskConverter {
  static getTaskByTaskResponse = (response) => {
    return new Task(
      response.id,
      response.name,
      response.description,
      response.assigneeUserId,
      response.boardId,
      response.dispOrder,
      response.createdDate,
      response.isClosed,
      response.estimateSize,
      response.version,
    )
  }

  static convertCreateRequest = (task) => {
    return {
      name: task.name,
      description: task.description,
      assigneeUserId: task.assigneeUserId,
      boardId: task.boardId,
      dispOrder: task.dispOrder,
      isClosed: task.isClosed,
      estimateSize: task.estimateSize,
    }
  }

  static convertUpdateRequest = (task) => {
    return {
      id: task.id,
      name: task.name,
      description: task.description,
      assigneeUserId: task.assigneeUserId,
      boardId: task.boardId,
      dispOrder: task.dispOrder,
      isClosed: task.isClosed,
      estimateSize: task.estimateSize,
      version: task.version,
    }
  }

  static convertUpdateTaskOrdersRequest = (taskId, fromBoardId, fromDispOrder, toBoardId, toDispOrder) => {
    return {
      taskId: taskId,
      fromBoardId: fromBoardId,
      fromDispOrder: fromDispOrder,
      toBoardId: toBoardId,
      toDispOrder: toDispOrder,
    }
  }
}

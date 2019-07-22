export default class Task {
  constructor(
    id, name, description,
    assigneeUserId, boardId, dispOrder,
    createdDate, isClosed, estimateSize,
    version,
  ) {
    this.id = id
    this.name = name
    this.description = description
    this.assigneeUserId = assigneeUserId
    this.boardId = boardId
    this.dispOrder = dispOrder
    this.createdDate = createdDate
    this.isClosed = isClosed
    this.estimateSize = estimateSize
    this.version = version
  }

  static createIdToTaskMap(tasks) {
    const result = {}
    tasks.forEach(task => {
      result[task.id] = task
    })
    return result
  }
}

export class TaskCreateRequest {
  constructor(
    name, description,
    assigneeUserId, boardId,
    isClosed, estimateSize,
  ) {
    this.name = name
    this.description = description
    this.assigneeUserId = assigneeUserId
    this.boardId = boardId
    this.isClosed = isClosed
    this.estimateSize = estimateSize
    this.moving = false
  }
}

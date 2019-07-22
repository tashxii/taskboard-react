export default class Board {
  constructor(
    id, name, dispOrder,
    isSystem, isClosed, createdDate,
    version, tasks,
  ) {
    this.id = id
    this.name = name
    this.dispOrder = dispOrder
    this.isSystem = isSystem
    this.isClosed = isClosed
    this.createdDate = createdDate
    this.version = version
    this.tasks = tasks
  }

  static createIdToBoardMap(boards) {
    const result = {}
    boards.forEach(board => {
      result[board.id] = board
    })
    return result
  }
}

export class BoardCreateRequest {
  constructor(
    name, isClosed,
  ) {
    this.name = name
    this.isClosed = isClosed
  }
}

import Board from "../../models/board"

export default class BoardConverter {
  static getBoardByBoardResponse = (response) => {
    return new Board(
      response.id,
      response.name,
      response.dispOrder,
      response.isSystem,
      response.isClosed,
      response.createdDate,
      response.version,
    )
  }

  static convertCreateRequest = (boardCreateRequest) => {
    return {
      name: boardCreateRequest.name,
      isClosed: boardCreateRequest.isClosed,
    }
  }

  static convertUpdateRequest = (board) => {
    return {
      id: board.id,
      name: board.name,
      isSystem: board.isSystem,
      isClosed: board.isClosed,
      version: board.version,
    }
  }
}

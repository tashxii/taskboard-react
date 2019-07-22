import BoardApi from "../apis/boardApi"
import BoardConverter from "./converter/boardConverter"
import ApiErrorConverter from "./converter/apiErrorConverter"
import I18n from "../common/i18n"

export default class BoardService {
  static listAsync = async () => {
    return await BoardApi.list()
      .then((res) => {
        if (res.ok) {
          const boards = []
          res.json.forEach(boardResponse => {
            boards.push(BoardConverter.getBoardByBoardResponse(boardResponse))
          })
          return { boards: boards }
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("ボード一覧の取得に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static createAsync = async (boardCreateRequest) => {
    const request = BoardConverter.convertCreateRequest(boardCreateRequest)
    return await BoardApi.create(request)
      .then((res) => {
        if (res.ok) {
          return { board: BoardConverter.getBoardByBoardResponse(res.json) }
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("ボードの登録に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static updateAsync = async (board) => {
    const request = BoardConverter.convertUpdateRequest(board)
    return await BoardApi.update(board.id, request)
      .then((res) => {
        if (res.ok) {
          return { board: BoardConverter.getBoardByBoardResponse(res.json) }
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("ボードの更新に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static deleteAsync = async (board) => {
    return await BoardApi.delete(board.id)
      .then((res) => {
        if (res.ok) {
          return {}
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("ボードの更新に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

}

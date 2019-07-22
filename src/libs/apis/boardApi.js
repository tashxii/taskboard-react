import ApiCommon from "./apiCommon"

export default class BoardApi {
  static create = async (request) => {
    return await ApiCommon.post("/boards", request)
  }

  static list = async () => {
    return ApiCommon.get("/boards")
  }

  static get = async (boardId) => {
    return ApiCommon.get(`/boards/${boardId}`)
  }

  static update = async (boardId, request) => {
    return ApiCommon.put(`/boards/${boardId}`, request)
  }

  static delete = async (boardId) => {
    return ApiCommon.delete(`/boards/${boardId}`, {})
  }
}

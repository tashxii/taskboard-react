import ApiCommon from "./apiCommon"

export default class TaskApi {
  static create = async (request) => {
    return await ApiCommon.post("/tasks", request)
  }

  static list = async (boardId) => {
    return await ApiCommon.get(`/tasks?boardid=${boardId}`)
  }

  static get = async (taskId) => {
    return await ApiCommon.get(`/tasks/${taskId}`)
  }

  static update = async (taskId, request) => {
    return await ApiCommon.put(`/tasks/${taskId}`, request)
  }

  static delete = async (taskId) => {
    return await ApiCommon.delete(`/tasks/${taskId}`, {})
  }

  static updateTaskOrders = async (request) => {
    return await ApiCommon.put("/taskorders", request)
  }
}

import ApiCommon from "./apiCommon"

export default class UserApi {
  static login = async (request) => {
    return await ApiCommon.post("/login", request)
  }

  static create = async (request) => {
    return await ApiCommon.post("/users", request)
  }

  static list = async () => {
    return ApiCommon.get("/users")
  }

  static get = async (userId) => {
    return ApiCommon.get(`/users/${userId}`)
  }

  static update = async (userId, request) => {
    return ApiCommon.put(`/users/${userId}`, request)
  }

  static delete = async (userId) => {
    return ApiCommon.delete(`/users/${userId}`, {})
  }

  static logout = async () => {
    return new Promise((resolve) => {
      setTimeout(
        () => {
          resolve({})
        }, 334) // wait a litle while
    })
  }
}

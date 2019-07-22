import UserApi from "../apis/userApi"
import UserConverter from "./converter/userConverter"
import ApiErrorConverter from "./converter/apiErrorConverter"
import I18n from "../common/i18n"

export default class UserService {
  static loginAsync = async (name, password) => {
    const request = UserConverter.convertLoginRequest(name, password)
    return await UserApi.login(request)
      .then((res) => {
        if (res.ok) {
          return { user: UserConverter.getUserByUserResponse(res.json) }
        } else {
          if (res.status === 401) {
            return {
              error: ApiErrorConverter.createByApiError(res, I18n.get("アカウントまたはパスワードが一致しません"))
            }
          } else {
            return {
              error: ApiErrorConverter.createByApiError(res, I18n.get("ログイン処理に失敗しました"))
            }
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static logoutAsync = async () => {
    return await UserApi.logout()
      .then((/*response*/) => {
        return {}
      })
      .catch((httpError) => {
        return {
          error: ApiErrorConverter.createByApiError(httpError, "Logout is failed")
        }
      })
  }

  static listAsync = async () => {
    return await UserApi.list()
      .then((res) => {
        if (res.ok) {
          const users = []
          res.json.forEach(userResponse => {
            users.push(UserConverter.getUserByUserResponse(userResponse))
          })
          return { users: users }
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

  static createAsync = async (userCreateRequest) => {
    const request = UserConverter.convertCreateRequest(userCreateRequest)
    return await UserApi.create(request)
      .then((res) => {
        if (res.ok) {
          return { user: UserConverter.getUserByUserResponse(res.json) }
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("ユーザーの登録に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }

  static updateAsync = async (user) => {
    const request = UserConverter.convertUpdateRequest(user)
    return await UserApi.update(user.id, request)
      .then((res) => {
        if (res.ok) {
          return { user: UserConverter.getUserByUserResponse(res.json) }
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("ユーザーの更新に失敗しました"))
          }
        }
      })
      .catch((error) => {
        return {
          error: ApiErrorConverter.createSystemError(error)
        }
      })
  }


  static deleteAsync = async (user) => {
    return await UserApi.delete(user.id)
      .then((res) => {
        if (res.ok) {
          return {}
        } else {
          return {
            error: ApiErrorConverter.createByApiError(res, I18n.get("ユーザーの削除に失敗しました"))
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

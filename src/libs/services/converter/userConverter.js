import User from "../../models/user"

export default class UserConverter {
  static getUserByUserResponse = (response) => {
    return new User(
      response.id,
      response.name,
      response.avatar,
      response.version,
    )
  }

  static convertLoginRequest = (name, password) => {
    return {
      name: name,
      password: password,
    }
  }

  static convertCreateRequest = (userCreateRequest) => {
    return {
      name: userCreateRequest.name,
      password: userCreateRequest.password,
      avatar: userCreateRequest.avatar,
    }
  }

  static convertUpdateRequest = (user) => {
    return {
      id: user.id,
      name: user.name,
      password: user.newPassword,
      avatar: user.avatar,
      version: user.version,
    }
  }
}

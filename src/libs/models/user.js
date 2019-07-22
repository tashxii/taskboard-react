export default class User {
  constructor(id, name, avatar, version) {
    this.id = id
    this.name = name
    this.avatar = avatar
    this.version = version
    this.newPassword = ""
  }

  static createIdToUserMap(users) {
    const result = {}
    users.forEach(user => {
      result[user.id] = user
    })
    return result
  }
}

export class UserCreateRequest {
  constructor(name, password, avatar) {
    this.name = name
    this.password = password
    this.avatar = avatar
  }
}

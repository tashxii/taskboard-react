let setting = undefined
let endPoint = ""
const mode = "cors"
const credential = "omit"
const headers = new Headers({
  "Content-type": "application/json",
})

export default class ApiCommon {
  static Method = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  }

  static init(serverSetting) {
    setting = serverSetting
    endPoint = `${setting.url}/${setting.base}`
  }

  static async get(path) {
    return doFetch(
      getApiUrl(path),
      getOption()
    )
  }

  static async post(path, request) {
    return doFetch(
      getApiUrl(path),
      getUpdateOption(ApiCommon.Method.POST, request)
    )
  }

  static async put(path, request) {
    return doFetch(
      getApiUrl(path),
      getUpdateOption(ApiCommon.Method.PUT, request)
    )
  }

  static async delete(path, request) {
    return doFetch(
      getApiUrl(path),
      getUpdateOption(ApiCommon.Method.DELETE, request)
    )
  }

  static createWebsocket(loginUser) {
    const wsurl = `${setting.wsurl}?from=${loginUser.id}`
    return new WebSocket(wsurl)
  }
}

const getApiUrl = (path) => {
  const apiUrl = `${endPoint}${path}`
  return apiUrl
}

const getOption = () => {
  const option = {
    method: ApiCommon.Method.GET,
    mode: mode,
    credential: credential,
    headers: headers,
  }
  return option
}

const getUpdateOption = (method, request) => {
  const option = {
    method: method,
    mode: mode,
    credential: credential,
    headers: headers,
    body: JSON.stringify(request),
  }
  return option
}

const doFetch = async (path, option) => {
  let ok = false
  let status = -1
  console.debug("API-request:", path, option)
  return await fetch(path, option)
    .then(response => {
      ok = response.ok
      status = response.status
      return response.text()
    })
    .then(text => {
      const json = text !== "" ? JSON.parse(text) : {}
      console.debug("API-response:", path, status, { json })
      return { ok, status, json }
    })
    .catch(error => {
      console.debug("API-error:", path, { error })
      throw error
    })
}

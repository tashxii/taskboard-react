import ErrorMessage from "../../models/errorMessage"
import I18n from "../../common/i18n"

const httpStatusCodes = {
  // 2XX
  "200": "200(OK)",
  "201": "201(Created)",
  "202": "202(Accepted)",
  "203": "203(Non-Authoritative Information)",
  "204": "204(No Content)",
  "205": "205(Reset Content)",
  "206": "206(Partial Content)",
  // 4XX
  "400": "400(Bad Request)",
  "401": "401(Unathorized)",
  "402": "402(Payment Required)",
  "403": "403(Forbidden)",
  "404": "404(Not Found)",
  "405": "405(Method Not Allowed)",
  "406": "406(Not Acceptable)",
  "408": "408(Request Timeout)",
  "409": "409(Conflict)",
  "415": "415(Unsupported Media Type)",
  // 5XX
  "500": "500(Internal Server Error)",
  "501": "501(Not Implemented)",
  "502": "502(Bad Gateway)",
  "503": "503(Service Unavailable)",
}

export default class ApiErrorConverter {
  static createByApiError(response, summary) {
    const code = httpStatusCodes[`${response.status}`] || `${response.status}`
    const errorResponse = response.json
    console.warn("API-error:", errorResponse)
    const detail = `${errorResponse.message} code:${errorResponse.code}`
    return new ErrorMessage(code, summary, detail)
  }

  static createSystemError(error, summary) {
    return new ErrorMessage("500(Internal Server Error)", summary, I18n.get("システムエラーが発生しました {0}", error.messsage))
  }
}

import React from "react"
import PropTypes from "prop-types"
import { notification } from "antd"

export const Description = ({ detail }) => {
  if (!detail) {
    return null
  }
  const msg = detail.replace(/\n/g, "<br>")
  return <div dangerouslySetInnerHTML={{ __html: `<span>${msg}</span>` }} />
}

export default class Notification {
  static Success(message, detail, ...other) {
    PopupNotification(message, detail, "success", ...other)
  }

  static Info(message, detail, ...other) {
    PopupNotification(message, detail, "info", ...other)
  }

  static Warning(message, detail, ...other) {
    PopupNotification(message, detail, "warn", ...other)
  }

  static Error(message, detail, ...other) {
    PopupNotification(message, detail, "error", ...other)
  }
}

const PopupNotification = (message, detail, type, ...other) => {
  notification[type]({
    message: message,
    description: <Description detail={detail} />,
    duration: 0,
    ...other,
  })
}

Description.propTypes = {
  detail: PropTypes.string,
}
PopupNotification.propTypes = {
  message: PropTypes.string.isRequired,
  detail: PropTypes.string,
  type: PropTypes.string.isRequired,
}

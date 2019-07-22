import React from "react"
import PropTypes from "prop-types"
import ApplicationSetting from "../../libs/common/applicationSetting"
const Avatar = (props) => {
  const setting = ApplicationSetting.getServerSetting()
  const src = `${setting.url}/${setting.base}/${setting.img}/${props.avatar}${setting.ext}`
  const size = props.size || "50px"
  const alt = props.alt || "No Image"
  return (
    <img src={src} width={size} height={size} borderstyle={"solid"} border={"thin solid gray"} align={"center"} alt={alt} />
  )
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  size: PropTypes.string,
  alt: PropTypes.string,
}

export default Avatar

import React from "react"
import PropTypes from "prop-types"

const Link = (props) => {
  const enableTextStyle = { color: "blue", cursor: "pointer", textDecoration: "underline" }
  const disableTextStyle = { color: "gray", cursor: "none", textDecoration: "underline" }
  const textStyle = !props.disable ? enableTextStyle : disableTextStyle
  return (
    <div style={props.style} onClick={props.onClick}>
      <span style={textStyle}>{props.text}</span>
    </div>
  )
}

Link.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  disable: PropTypes.bool,
}

export default Link

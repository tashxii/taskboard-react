import React, { Component } from "react"
import PropTypes from "prop-types"
import { Modal as AntdModal } from "antd"
import "./Modal.css"

export default class Modal extends Component {
  render() {
    return (
      <AntdModal
        className={"standard-modal"}
        {...this.props}
      >
        {this.props.children}
      </AntdModal >
    )
  }
}

Modal.propTypes = {
  children: PropTypes.object,
}

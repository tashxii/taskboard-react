import React, { Component } from "react"
import Link from "../basics/Link"

class MainView extends Component {
  render() {
    const disabled = this.props.loginState.isLogoutProcessing
    const text = this.props.loginState.isLogoutProcessing ? "Logout..." : "Logout"
    return (
      <div>
        Main
        <Link onClick={this.props.onLogoutLinkClick} text={text} disabled={disabled} />
      </div>
    )
  }
}

export default MainView

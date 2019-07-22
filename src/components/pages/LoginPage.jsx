import React, { Component } from "react"
import LoginPageTemplate from "../templates/LoginPageTemplate"

class LoginPage extends Component {
  render() {
    return (
      <LoginPageTemplate {...this.props} />
    )
  }
}

export default LoginPage

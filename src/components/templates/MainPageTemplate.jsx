import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { Row } from "antd"
import Notification from "../basics/Notification"
import MenuBarContainer from "../../containers/MenuBarContainer"
import BoardsContainer from "../../containers/BoardsContainer"
import SettingsContainer from "../../containers/SettingsContainer"

class MainPageTemplate extends Component {

  static View = {
    Boards: "boards",
    Settings: "settings",
  }

  componentDidUpdate() {
    const error = this.props.errorState.error
    if (error) {
      Notification.Error(error.summary, `${error.detail} code:${error.code}`)
      this.props.onShowErrorClose()
    }
  }

  render() {
    if (!this.props.loginState.loginUser) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <Row>
          <MenuBarContainer />
        </Row>
        <Row>
          {(this.props.mainState.view === MainPageTemplate.View.Settings)
            ? <SettingsContainer />
            : <BoardsContainer />}
        </Row>
      </div>
    )
  }
}

export default MainPageTemplate

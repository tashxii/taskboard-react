import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Tooltip } from "antd"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Avatar from "../basics/Avatar"
import I18n from "../../libs/common/i18n"
import MainPageTemplate from "../templates/MainPageTemplate"
import Modal from "../basics/Modal"
import UserForm from "./UserForm"

class MenuBar extends Component {
  constructor(props) {
    super(props)
    this.state = { showProfileDialog: false }
    this.toggleProfileDialog = this.toggleProfileDialog.bind(this)
  }

  render() {
    const loginUserName = this.props.loginState.loginUser.name || ""
    const avatarName = this.props.loginState.loginUser.avatar || ""
    return (
      <div>
        <div style={{ marginTop: "2px", color: "cornflowerblue", backgroundColor: "azure" }}>
          <Row >
            <Col style={{ marginLeft: "10px", verticalAlign: "middle", display: "inline-block" }}>
              <Tooltip placement="bottom" title={I18n.get("タスクボード")}>
                <FontAwesomeIcon icon="tasks" size="2x"
                  onClick={() => this.props.switchMainViewIconClick(MainPageTemplate.View.Boards)} />
              </Tooltip>
            </Col>
            <Col style={{ marginLeft: "10px", verticalAlign: "middle", display: "inline-block" }}>
              <Tooltip placement="bottom" title={I18n.get("管理")}>
                <FontAwesomeIcon icon="cogs" size="2x"
                  onClick={() => this.props.switchMainViewIconClick(MainPageTemplate.View.Settings)} />
              </Tooltip>
            </Col>
            <Col style={{ marginLeft: "10px", verticalAlign: "middle", display: "inline-block" }}>
              <Tooltip placement="bottom" title={I18n.get("プロフィール変更")}>
                <FontAwesomeIcon icon="user" size="2x"
                  onClick={this.toggleProfileDialog} />
              </Tooltip>
            </Col >
            <Col style={{ float: "right", marginRight: "10px", verticalAlign: "middle", display: "inline-block" }}>
              <Tooltip placement="bottom" title={I18n.get("ログアウト")}>
                <FontAwesomeIcon icon="door-open" size="2x"
                  onClick={this.props.onLogoutIconClick} />
              </Tooltip>
            </Col >
            <Col style={{ float: "right", marginRight: "10px", verticalAlign: "middle", display: "inline-block" }}>
              <Avatar avatar={avatarName} size="32px" />
            </Col>
            <Col style={{ float: "right", marginRight: "10px", verticalAlign: "middle", display: "inline-block" }}>
              <font size="4">{loginUserName}</font>
            </Col>
          </Row >
        </div>
        <Modal
          visible={this.state.showProfileDialog}
          onCancel={this.toggleProfileDialog}
          footer={null}
          destroyOnClose
          width={500}
        >
          <UserForm
            user={this.props.loginState.loginUser}
            onSaveButtonClick={this.props.onUserProfileSaveButtonClick}
            isSavingProcessing={this.props.loginState.isSaveUserProcessing}
          />
        </Modal>
      </div>
    )
  }

  toggleProfileDialog() {
    this.setState({
      showProfileDialog: !this.state.showProfileDialog,
    })
  }
}

MenuBar.propTypes = {
  loginState: PropTypes.object.isRequired,
  switchMainViewIconClick: PropTypes.func.isRequired,
  onUserProfileSaveButtonClick: PropTypes.func.isRequired,
  onLogoutIconClick: PropTypes.func.isRequired,
}

export default MenuBar

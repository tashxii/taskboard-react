import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Input, Button, Select } from "antd"
import User from "../../libs/models/user"
import Avatar from "../basics/Avatar"
import I18n from "../../libs/common/i18n"
import ApplicationSetting from "../../libs/common/applicationSetting"

class UserForm extends Component {
  constructor(props) {
    super(props)
    const user = props.user
    this.state = {
      name: user.name,
      password: user.password,
      avatar: user.avatar,
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleAvatarChange = this.handleAvatarChange.bind(this)
  }

  render() {
    const avatars = ApplicationSetting.getAvatars()
    const saveButtonLabel = (!this.props.isSavingProcessing) ? I18n.get("保存") : I18n.get("保存中")
    const disabled = this.props.isSavingProcessing || this.state.name === ""
    return (
      <div>
        <Col>
          <Row style={{ marginBottom: "10px" }}>
            <div style={{ fontSize: "20px", color: "dodgerblue", textDecoration: "underline" }}>
              {I18n.get("ユーザー")}
            </div>
          </Row>
          <Row>
            <Col span={8}>
              {I18n.get("アカウント")}:
            </Col>
            <Col span={16}>
              <Input
                autoFocus={true}
                value={this.state.name}
                onChange={(e) => this.handleTextChange(e, "name")}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              {I18n.get("新しいパスワード")}:
            </Col>
            <Col span={16}>
              <Input.Password
                placeholder={I18n.get("変更したい場合のみ入力")}
                onChange={(e) => this.handleTextChange(e, "password")}
              />
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              {I18n.get("アバター")}:
            </Col>
            <Col span={16}>
              <Select
                style={{ marginRight: "20px", width: "200px", verticalAlign: "top" }}
                onChange={this.handleAvatarChange}
                value={this.state.avatar}
                dropdownMatchSelectWidth={false}
              >
                {avatars.map(value => {
                  return (
                    <Select.Option key={value}>
                      <Avatar avatar={value} size={"20px"} /> {value}
                    </Select.Option>
                  )
                })}
              </Select>
              <div style={{ display: "inline-block", border: "solid 1px gray", marginTop: "5px" }}>
                <Avatar avatar={this.state.avatar} size={"100px"}/>
              </div>
            </Col>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Button
              type="primary"
              onClick={
                () => {
                  const user = new User(
                    this.props.user.id,
                    this.state.name,
                    this.state.avatar,
                    this.props.user.version,
                  )
                  user.newPassword = this.state.password
                  this.props.onSaveButtonClick(user)
                }
              }
              disabled={disabled}
              loading={this.props.isSavingProcessing}
              style={{ float: "right" }}
            >
              {saveButtonLabel}
            </Button>
          </Row>
        </Col>
      </div >
    )
  }

  handleTextChange(e, key) {
    this.setState({ [key]: e.target.value })
  }

  handleAvatarChange(value) {
    this.setState({ avatar: value })
  }
}

UserForm.propTypes = {
  user: PropTypes.object.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  isSavingProcessing: PropTypes.bool.isRequired,
}

export default UserForm

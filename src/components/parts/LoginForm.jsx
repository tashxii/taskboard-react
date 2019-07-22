import React, { Component } from "react"
import PropTypes from "prop-types"
import { Row, Col, Input, Button } from "antd"
import Modal from "../basics/Modal"
import ErrorCard from "../basics/ErrorCard"
import I18n from "../../libs/common/i18n"
import Link from "../basics/Link"
import SignUpForm from "./SignUpForm"

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      password: "",
      showSignUpDialog: false,
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.toggleSignUpDialog = this.toggleSignUpDialog.bind(this)
  }

  render() {
    const loginLabel = (!this.props.loginState.isLoginProcessing) ? I18n.get("ログイン") : I18n.get("ログイン中")
    const disabled = this.props.loginState.isLoginProcessing || this.state.name === ""
    return (
      <div>
        <Col>
          <Row>
            <div style={{ fontSize: "32px" }}>
              <font color="cornflowerblue">Taskboard React</font>
            </div>
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Input
              placeholder={I18n.get("アカウント")}
              autoFocus={true}
              onChange={(e) => this.handleTextChange(e, "name")}
            />
          </Row>
          <Row>
            <Input.Password
              placeholder={I18n.get("パスワード")}
              onChange={(e) => this.handleTextChange(e, "password")}
            />
            {
              this.props.loginState.loginError ?
                <ErrorCard errorMessage={this.props.loginState.loginError} />
                : null
            }
          </Row>
          <Row style={{ marginTop: "10px" }}>
            <Button
              type="primary"
              onClick={() => this.props.onLoginButtonClick(this.state.name, this.state.password)}
              disabled={disabled}
              loading={this.props.loginState.isLoginProcessing}
            >
              {loginLabel}
            </Button>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Link text={I18n.get("サインアップ")} onClick={this.toggleSignUpDialog} />
          </Row>
        </Col>
        <Modal
          visible={this.state.showSignUpDialog}
          onCancel={this.toggleSignUpDialog}
          footer={null}
          destroyOnClose
          width={500}
        >
          <SignUpForm {...this.props}></SignUpForm>
        </Modal>
      </div >
    )

  }

  handleTextChange(e, key) {
    this.setState({ [key]: e.target.value })
  }

  toggleSignUpDialog() {
    this.props.clearLoginErrors()
    this.setState({
      showSignUpDialog: !this.state.showSignUpDialog,
    })
  }
}

LoginForm.propTypes = {
  loginState: PropTypes.object.isRequired,
  onLoginButtonClick: PropTypes.func.isRequired,
  clearLoginErrors: PropTypes.func.isRequired,
}

export default LoginForm

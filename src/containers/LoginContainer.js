import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import LoginPage from "../components/pages/LoginPage"
import {
  loginStartEvent,
  signUpStartEvent,
  clearLoginErrorsEvent,
} from "../actions"

const mapStateToProps = (state) => ({
  loginState: state.loginState,
})

const mapDispatchToProps = (dispatch) => ({
  onLoginButtonClick: (name, password) => {
    dispatch(loginStartEvent(name, password))
  },
  onSignUpButtonClick: (userCreateRequest) => {
    dispatch(signUpStartEvent(userCreateRequest))
  },
  clearLoginErrors: () => {
    dispatch(clearLoginErrorsEvent())
  },
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage)

export default withRouter(LoginContainer)

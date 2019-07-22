import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import MenuBarPage from "../components/pages/MenuBarPage"
import {
  updateLoginUserStartEvent,
  logoutStartEvent,
  switchMainViewEvent,
} from "../actions"

const mapStateToProps = (state) => ({
  loginState: state.loginState,
})

const mapDispatchToProps = (dispatch) => ({
  switchMainViewIconClick: (view) => {
    dispatch(switchMainViewEvent(view))
  },
  onUserProfileSaveButtonClick: (user) => {
    dispatch(updateLoginUserStartEvent(user))
  },
  onLogoutIconClick: () => {
    dispatch(logoutStartEvent())
  },
})

const MenuBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuBarPage)

export default withRouter(MenuBarContainer)

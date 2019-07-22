import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import MainPage from "../components/pages/MainPage"
import { showErrorCloseEvent } from "../actions"

const mapStateToProps = (state) => ({
  loginState: state.loginState,
  mainState: state.mainState,
  errorState: state.errorState,
})

const mapDispatchToProps = (dispatch) => ({
  onShowErrorClose: () => {
    dispatch(showErrorCloseEvent())
  },
})

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainPage)

export default withRouter(MainContainer)

import React, { Component } from "react"
import MainPageTemplate from "../templates/MainPageTemplate"

class MainPage extends Component {
  render() {
    return (
      <MainPageTemplate {...this.props} />
    )
  }
}

export default MainPage

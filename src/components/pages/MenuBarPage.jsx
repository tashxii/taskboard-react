import React, { Component } from "react"
import MenuBarPageTemplate from "../templates/MenuBarPageTemplate"

class MenuBarPage extends Component {
  render() {
    return (
      <MenuBarPageTemplate {...this.props} />
    )
  }
}

export default MenuBarPage

import React, { Component } from "react"
import MenuBar from "../parts/MenuBar"

class MenuBarPageTemplate extends Component {
  render() {
    return (
      <MenuBar {...this.props} />
    )
  }
}

export default MenuBarPageTemplate

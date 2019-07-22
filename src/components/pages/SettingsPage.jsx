import React, { Component } from "react"
import SettingsPageTemplate from "../templates/SettingsPageTemplate.jsx"

class SettingsPage extends Component {
  render() {
    return (
      <SettingsPageTemplate {...this.props} />
    )
  }
}

export default SettingsPage

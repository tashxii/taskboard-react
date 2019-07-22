import React, { Component } from "react"
import SettingsForm from "../parts/SettingsForm"

class SettingsPageTemplate extends Component {
  render() {
    return (
      <SettingsForm {...this.props} />
    )
  }
}

export default SettingsPageTemplate

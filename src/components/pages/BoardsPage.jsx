import React, { Component } from "react"
import BoardsPageTemplate from "../templates/BoardsPageTemplate"

class BoardsPage extends Component {
  render() {
    return (
      <BoardsPageTemplate {...this.props} />
    )
  }
}

export default BoardsPage

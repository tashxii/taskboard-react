import React, { Component } from "react"
import PropTypes from "prop-types"

class ErrorCard extends Component {
  render() {
    const errorMessage = this.props.errorMessage
    const summary = errorMessage.summary
    const summaryColor = this.props.summaryColor || "red"
    const detailColor = this.props.detailColor || "gray"
    let detail = ""
    if (errorMessage.detail) {
      detail = (errorMessage.code) ? `${errorMessage.detail}(${errorMessage.code})` : `${errorMessage.detail}`
    }
    return (
      <div style={this.props.cardStyle}>
        <div>
          <font color={summaryColor}>
            {summary}
          </font>
        </div>
        {(detail) ?
          <div>
            <font color={detailColor}>
              {detail}
            </font>
          </div>
          : null}
      </div>
    )
  }
}

ErrorCard.propTypes = {
  errorMessage: PropTypes.object.isRequired,
  cardStyle: PropTypes.object,
  summaryColor: PropTypes.string,
  detailColor: PropTypes.string,
}

export default ErrorCard

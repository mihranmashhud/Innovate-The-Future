import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (this.props.authenticated === null) {
        this.context.router.history.push("/Log-In")
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.history.push("/Log-In")
      }
    }

    render() {
      if (this.props.authenticated === true) {
        return <ComposedComponent {...this.props} />
      }
      return null
    }
  }

  function mapStateToProps(state) {
    return { authenticated: Boolean(state.auth) }
  }

  return withRouter(connect(mapStateToProps)(Authentication))
}

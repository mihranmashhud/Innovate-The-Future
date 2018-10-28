import React, { Component } from "react"
import Navigation from "./components/Navigation"
import { Switch, Route, withRouter } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"

import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Scope from "./components/pages/Scope"
import Example from "./components/pages/Example"
import Contact from "./components/pages/Contact"
import LogIn from "./components/pages/LogIn"
import SignUp from "./components/pages/SignUp"
import Apply from "./components/pages/Apply"
import requireAuth from "./components/auth/requireAuth"
import { connect } from "react-redux"
import { fetchUser } from "./actions"

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#030514",
      main: "#2d2f3a",
      dark: "#ffffff",
      contrastText: "#fff"
    },
    secondary: {
      main: "#00e5ff",
      constrastText: "#000"
    },
    text: {
      primary: "#fff",
      secondary: "#000",
      disabled: "#fefefe",
      hint: "#fefefe"
    },
    background: {
      default: "#2d2f3a",
      paper: "#030514"
    },
    action: {
      active: "rgba(255, 255, 255, 0.54)",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.14)",
      disabled: "rgba(255, 255, 255, 0.26)",
      disabledBackground: "rgba(255, 255, 255, 0.12)"
    }
  }
})
class App extends Component {
  componentWillMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About-Us" component={About} />
          {/* <Route path='/Event-Scope' component={Scope}></Route> */}
          <Route path="/Example-Projects" component={Example} />
          <Route path="/Contact-Us" component={Contact} />
          <Route exact path="/Log-In" component={LogIn} />
          <Route path="/Sign-Up" component={SignUp} />
          <Route path="/Apply" component={requireAuth(Apply)} />
        </Switch>
      </MuiThemeProvider>
    )
  }
}

export default withRouter(
  connect(
    null,
    { fetchUser }
  )(App)
)

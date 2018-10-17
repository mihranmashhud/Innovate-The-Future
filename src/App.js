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
    primary: {
      main: "#000759"
    },
    secondary: {
      main: "#0cf7f7"
    }
  }
})
class App extends Component {
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
          <Route path="/Log-In" component={LogIn} />
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

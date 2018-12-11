import React, { Component } from "react";
import Navigation from "./components/Navigation";
import { Switch, Route, withRouter } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Main from "./components/pages/Main";
import SignIn from "./components/pages/SignIn";
import Apply from "./components/pages/Apply";
import requireAuth from "./components/auth/requireAuth";
import { connect } from "react-redux";
import { fetchUser } from "./actions";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      light: "#030514",
      main: "#2d2f3a",
      dark: "#ffffff",
      contrastText: "#000"
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
      default: "#ddeeff",
      paper: "#000000"
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
});
class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navigation />
        <div
          style={{
            padding: "32px"
          }}
        />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/Sign-In' component={SignIn} />
          <Route path='/Apply' component={requireAuth(Apply)} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(
  connect(
    null,
    { fetchUser }
  )(App)
);

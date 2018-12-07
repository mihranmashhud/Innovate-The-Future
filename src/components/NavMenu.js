import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import StyledLink from "./Styled-Link";
import { connect } from "react-redux";
import { signOut } from "../actions";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";

class NavMenu extends React.Component {
  state = {
    anchorEl: null,
    hasSignedOut: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSnackbarClose = () => {
    this.setState({ hasSignedOut: false });
  };

  signOut = () => {
    this.handleClose();
    this.props.signOut();
    this.setState({ hasSignedOut: true });
  };

  render() {
    const { anchorEl, hasSignedOut } = this.state;
    let logOut;
    let logIn;
    let apply;

    if (this.props.authenticated) {
      apply = (
        <StyledLink to='/Apply'>
          <MenuItem onClick={this.handleClose}>Your Application</MenuItem>
        </StyledLink>
      );
      logOut = <MenuItem onClick={this.signOut}>Sign Out</MenuItem>;
    } else {
      logIn = (
        <StyledLink to='/Sign-In'>
          <MenuItem onClick={this.handleClose}>Sign In</MenuItem>
        </StyledLink>
      );
    }

    return (
      <div>
        <IconButton
          aria-owns={anchorEl ? "nav-menu" : null}
          aria-haspopup='true'
          color='secondary'
          onClick={this.handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu id='nav-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          {logIn}
          {apply}
          {logOut}
          <StyledLink to='/#About'>
            <MenuItem onClick={this.handleClose}>About</MenuItem>
          </StyledLink>

          <StyledLink to='/#Scope'>
            <MenuItem onClick={this.handleClose}>Event Scope</MenuItem>
          </StyledLink>

          {/* <StyledLink to='/#Example-Projects'>
            <MenuItem onClick={this.handleClose}>Example Projects</MenuItem>
          </StyledLink> */}

          <StyledLink to='/#Contact-Us'>
            <MenuItem onClick={this.handleClose}>Contact Us</MenuItem>
          </StyledLink>
        </Menu>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={hasSignedOut}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            "aria-describedby": "message-id"
          }}
          message={<span id='message-id'>You have been successfully signed out</span>}
          action={[
            <IconButton key='close' aria-label='Close' color='secondary' onClick={this.handleSnackbarClose}>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: Boolean(state.auth)
  };
}

export default connect(
  mapStateToProps,
  { signOut }
)(NavMenu);

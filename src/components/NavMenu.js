import React from "react";
import { Menu, MenuItem, IconButton, Snackbar, Hidden, Button } from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import StyledLink from "./Styled-Link";
import { connect } from "react-redux";
import { signOut } from "../actions";
import CloseIcon from "@material-ui/icons/Close";

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
        <div>
          <Hidden smDown>
            <StyledLink to='/Apply'>
              <Button color='secondary'>Your Application</Button>
            </StyledLink>
          </Hidden>
          <Hidden mdUp>
            <StyledLink to='/Apply'>
              <MenuItem onClick={this.handleClose}>Your Application</MenuItem>
            </StyledLink>
          </Hidden>
        </div>
      );
      logOut = (
        <div>
          <Hidden smDown>
            <Button onClick={this.signOut} color='secondary'>
              Sign Out
            </Button>
          </Hidden>
          <Hidden mdUp>
            <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
          </Hidden>
        </div>
      );
    } else {
      logIn = (
        <div>
          <StyledLink to='/Sign-In'>
            <Button color='secondary'>Sign In</Button>
          </StyledLink>
          <Hidden mdUp>
            <StyledLink to='/Sign-In'>
              <MenuItem onClick={this.handleClose}>Sign In</MenuItem>
            </StyledLink>
          </Hidden>
        </div>
      );
    }

    return (
      <div>
        <Hidden smDown>
          <StyledLink to='/#About'>
            <Button>About</Button>
          </StyledLink>
          <StyledLink to='/#Scope'>
            <Button>Event Scope</Button>
          </StyledLink>
          {/* <StyledLink to='/#Example-Projects'>
            <Button>Example Projects</Button>
          </StyledLink> */}
          <StyledLink to='/#Contact-Us'>
            <Button>Contact Us</Button>
          </StyledLink>
          {/* {!this.props.authenticated && (
            <StyledLink to='/Sign-In'>
              <Button color='secondary'>Sign In</Button>
            </StyledLink>
          )}
          {this.props.authenticated && (
            <StyledLink to='/Apply'>
              <Button color='secondary'>Your Application</Button>
            </StyledLink>
          )}
          {this.props.authenticated && (
            <Button onClick={this.signOut} color='secondary'>
              Sign Out
            </Button>
          )} */}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            aria-owns={anchorEl ? "nav-menu" : null}
            aria-haspopup='true'
            color='secondary'
            onClick={this.handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu id='nav-menu' anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
            {!this.props.authenticated && (
              <StyledLink to='/Sign-In'>
                <MenuItem onClick={this.handleClose}>Sign In</MenuItem>
              </StyledLink>
            )}
            {this.props.authenticated && (
              <StyledLink to='/Apply'>
                <MenuItem onClick={this.handleClose}>Your Application</MenuItem>
              </StyledLink>
            )}
            {this.props.authenticated && <MenuItem onClick={this.signOut}>Sign Out</MenuItem>}
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
        </Hidden>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={hasSignedOut}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          ContentProps={{ "aria-describedby": "message-id" }}
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
    authenticated: state.auth == null ? false : Boolean(state.auth)
  };
}

export default connect(
  mapStateToProps,
  { signOut }
)(NavMenu);

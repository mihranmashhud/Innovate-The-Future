import React from "react"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import StyledLink from "./Styled-Link"
import { connect } from "react-redux"
import { signOut } from "../actions"

class NavMenu extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    let signOut

    if (this.props.authenticated) {
      signOut = <MenuItem onClick={this.signOut}>Sign Out</MenuItem>
    }

    return (
      <div>
        <IconButton aria-owns={anchorEl ? "nav-menu" : null} aria-haspopup="true" color="white" onClick={this.handleClick}>
          <MenuIcon />
        </IconButton>
        <Menu id="nav-menu" color="inherit" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          <StyledLink to="/Apply">
            <MenuItem onClick={this.handleClose}>Apply</MenuItem>
          </StyledLink>

          <StyledLink to="/About-Us">
            <MenuItem onClick={this.handleClose}>About Us</MenuItem>
          </StyledLink>

          <StyledLink to="/Event-Scope">
            <MenuItem onClick={this.handleClose}>Event Scope</MenuItem>
          </StyledLink>

          <StyledLink to="/Example-Projects">
            <MenuItem onClick={this.handleClose}>Example Projects</MenuItem>
          </StyledLink>

          <StyledLink to="/Contact-Us">
            <MenuItem onClick={this.handleClose}>Contact Us</MenuItem>
          </StyledLink>
          {signOut}
        </Menu>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: Boolean(state.auth)
  }
}

export default connect(
  mapStateToProps,
  signOut
)(NavMenu)

import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Hidden from "@material-ui/core/Hidden"
import StyledLink from "./Styled-Link"
import NavMenu from "./NavMenu"

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    color: theme.palette.primary.dark
  }
})

function Navigation(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Hidden smDown>
            <Typography variant="h5" color="textPrimary" className={classes.grow}>
              <StyledLink to="/">Innovate The Future</StyledLink>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant="h5" color="textPrimary" className={classes.grow}>
              <StyledLink to="/">IF</StyledLink>
            </Typography>
          </Hidden>
          <NavMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Navigation)

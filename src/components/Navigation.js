import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";
import StyledLink from "./Styled-Link";
import NavMenu from "./NavMenu";
import IFLogo from "./pages/Home/IFLogo";

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
});

function Navigation(props) {
  const { classes } = props;
  return (
    <div className={classes.root} id='Navigation'>
      <AppBar position='static'>
        <Toolbar>
          <Hidden smDown>
            <Typography variant='h5' color='secondary' className={classes.grow}>
              <StyledLink to='/#Home'>Innovate The Future</StyledLink>
            </Typography>
          </Hidden>
          <Hidden mdUp>
            <Typography variant='h5' color='secondary' className={classes.grow}>
              <StyledLink to='/#Home'>
                <IFLogo height={"40px"} />
              </StyledLink>
            </Typography>
          </Hidden>
          <NavMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navigation);

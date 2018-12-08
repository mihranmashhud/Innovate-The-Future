import React, { variant } from "react";
import { Parallax } from "react-parallax";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import StyledLink from "../Styled-Link";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import IFLogo from "./Home/IFLogo";
import { Fab } from "@material-ui/core";
import { ArrowUp } from "mdi-material-ui";
import Hidden from "@material-ui/core/Hidden";
import { connect } from "react-redux";

import About from "./About";
import Scope from "./Scope";
import Contact from "./Contact";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block"
  },
  buttons: {
    margin: "auto",
    marginBottom: "20px"
  },
  button: {
    fontSize: "20px",
    margin: "auto"
  },
  input: {
    display: "none"
  },
  root: {
    width: "100%"
  },
  title: {
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "30pt"
  },
  text: {
    width: "90%",
    margin: "auto",
    textAlign: "center"
  },
  card: {
    minWidth: "70%",
    maxWidth: "90%",
    width: "600px",
    margin: "auto",
    marginTop: "20px"
  },
  fab: {
    position: "fixed",
    bottom: "30px",
    right: "30px"
  },
  parallax: {
    alignItems: "center"
  },
  logo: {
    margin: "auto",
    position: "relative",
    height: "300",
    alignItems: "center",
    textAlign: "center"
  }
});

function Main(props) {
  const { classes } = props;

  return (
    <main className={classes.layout}>
      <CssBaseline
        style={{
          backgroundImage: "./static/media/IF-Banner.png"
        }}
      />
      <Card className={classes.card} elevation={1} id='Home'>
        <Parallax
          bgImage={require(`./../../assets/city-image-1.png`)}
          bgWidth={"100%"}
          strength={300}
          className={classes.parallax}>
          <div className={classes.logo}>
            <Hidden mdUp>
              <IFLogo width={"250px"} />
            </Hidden>
            <Hidden smDown>
              <IFLogo width={"400px"} />
            </Hidden>
          </div>
        </Parallax>

        <CardContent>
          <Typography variant='h4' className={classes.title}>
            Welcome to Innovate The Future
          </Typography>
          <Typography variant='h5' className={classes.text} paragraph={true}>
            Incididunt et exercitation esse labore cupidatat nulla. Amet commodo amet anim dolore elit ea Lorem
            adipisicing in. Cupidatat aliquip occaecat do consectetur fugiat ad mollit aliqua eu fugiat tempor amet esse
            ipsum. Pariatur officia mollit eu commodo tempor voluptate. Do sint cillum quis aute sit consequat
            incididunt.
          </Typography>
        </CardContent>
        <CardActions>
          <Hidden xs>
            <div className={classes.buttons}>
              <Button className={classes.button} color='secondary'>
                <StyledLink to={props.authenticated ? "/Apply" : "/Sign-In"}>Apply Now</StyledLink>
              </Button>
              <Button className={classes.button} color='secondary'>
                <StyledLink to='/#Scope'>See The Scope</StyledLink>
              </Button>
            </div>
          </Hidden>
          <Hidden smUp>
            <div className={classes.buttons}>
              <Button className={classes.button} color='secondary'>
                <StyledLink to={props.authenticated ? "/Apply" : "/Sign-In"}>Apply Now</StyledLink>
              </Button>
            </div>
            <div className={classes.buttons}>
              <Button className={classes.button} color='secondary'>
                <StyledLink to='/#Scope'>See The Scope</StyledLink>
              </Button>
            </div>
          </Hidden>
        </CardActions>
      </Card>
      <About />
      <Scope />
      <Contact />
      <StyledLink to='/#Navigation'>
        <Fab color='secondary' aria-label='Go To Top' className={classes.fab}>
          <ArrowUp />
        </Fab>
      </StyledLink>
    </main>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    authenticated: Boolean(state.auth)
  };
}

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(Main));

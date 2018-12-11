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
    marginBottom: "10pt",
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
      <CssBaseline />
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
            Looking for collaboration? Entrepreneurial development? Software skills tests? Innovate the Future is Peel’s
            new conference that will give you all of these. Student-run and student-led, we have what you’re looking
            for. The IF competition aims to help students use their entrepreneurial and computer science skills to help
            create meaningful software products that have real-world applications. As an IF candidate, you will
            collaborate in small groups of 2-4 people to address an issue from today’s society, your own community or a
            business venture to solve using said product. High school candidates of any grade and experience level are
            welcomed to IF.
          </Typography>
          <Typography variant='h5' className={classes.text} paragraph={true}>
            So what are you waiting for? Sign up, and become the ones who innovate the future!!
          </Typography>
        </CardContent>
        <CardActions>
          <Hidden xsDown>
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

import React, { Component } from "react";
import PropTypes from "prop-types";
import { CssBaseline, Typography, Grid, withStyles, Card, CardMedia } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Parallax } from "react-parallax";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block",
    minWidth: "70%",
    maxWidth: "90%",
    width: "600px",
    margin: "auto",
    marginTop: "20px"
  },
  paper: {
    paddingTop: "20px",
    paddingBottom: "20px"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  text: {
    fontSize: "20px",
    margin: "20px",
    height: "100%",
    width: "auto",
    textAlign: "left"
  },
  image: {
    height: "100%"
  }
});

class About extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.layout} id={"About"}>
        <Paper className={classes.paper}>
          <Typography variant='h2' className={classes.title} color='secondary'>
            About The Competition
          </Typography>
          <Parallax bgImage={require("./../../assets/vr-image.jpeg")} bgWidth={"100%"} strength={200}>
            <div style={{ height: "300px" }} />
          </Parallax>
          <Typography variant='body1' className={classes.text}>
            The IF competition aims to help students use their entrepreneurial and computer science skills to help
            create meaningful software products that have real world applications. The competition models what may be
            expected of individuals in their future professions by introducing two disciplines that are used in unison
            within the business and computer science careers.
          </Typography>
          <Parallax bgImage={require("./../../assets/developers-image.jpg")} bgWidth={"100%"} strength={200}>
            <div style={{ height: "300px" }} />
          </Parallax>
          <Typography variant='body1' className={classes.text}>
            As an IF candidate, you will collaborate in small groups of 2-4 people to develop your own software product.
            Working in your groups, you will address an issue from today’s society to solve using said product.
            Candidates of any grade and experience level are welcomed to IF. There are no limitations on the complexity
            or skills you use for your product, even the programming language is up to you. The software you create to
            address your problem will be due several weeks before the competition date, at which point it will be
            evaluated by our panel of judges..
          </Typography>
          <Parallax bgImage={require("./../../assets/business-man-image.jpg")} bgWidth={"100%"} strength={200}>
            <div style={{ height: "300px" }} />
          </Parallax>
          <Typography variant='body1' className={classes.text}>
            On the day of the competition, you will have the opportunity to show us your entrepreneurial skills. In 15
            minutes, you have to convince a mock panel of investors of the value and use of your product and why your
            product is worth investing in. Your team will present a short business pitch, explaining the product’s
            characteristics and your target market, and establishing a marketing plan outlining the future for your
            product. What are you waiting for? Sign up, and become the ones to innovate the future!!
          </Typography>
        </Paper>
      </main>
    );
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);

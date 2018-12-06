import React, { Component } from "react";
import { Paper, withStyles, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
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
  subtitle: {
    textAlign: "left",
    margin: "20px"
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
class Scope extends Component {
  render() {
    const { classes } = this.props;

    return (
      <main className={classes.layout} id={"Scope"}>
        <Paper className={classes.paper}>
          <Typography variant='h2' color='secondary' className={classes.title}>
            Scope
          </Typography>

          {/* <Parallax bgImage={require("./../../assets/vr-image.jpeg")} bgWidth={"100%"} strength={200}>
            <div style={{ height: "300px" }} />
          </Parallax> */}
          <Typography variant='h4' color='secondary' className={classes.subtitle}>
            What The Event Is Like
          </Typography>
          <Typography variant='body1' className={classes.text}>
            Cillum laboris aliquip id aliqua anim irure elit anim ex eu deserunt cupidatat pariatur labore. Irure
            officia Lorem consequat cillum nulla sint ad do qui dolore aute aute fugiat pariatur. Aute ea ullamco esse
            ullamco ipsum sint sunt ad ipsum do officia qui commodo. Ad non enim occaecat amet exercitation ex.
          </Typography>

          {/* <Parallax bgImage={require("./../../assets/developers-image.jpg")} bgWidth={"100%"} strength={200}>
            <div style={{ height: "300px" }} />
          </Parallax> */}
          <Typography variant='h4' color='secondary' className={classes.subtitle}>
            Student Requirements
          </Typography>
          <Typography variant='body1' className={classes.text}>
            Laboris cupidatat enim occaecat minim. Sit cupidatat culpa cillum nostrud officia quis quis aliqua do aliqua
            reprehenderit id reprehenderit. Sit irure proident cupidatat eu ullamco magna adipisicing pariatur eu. Minim
            ea dolor adipisicing cillum labore officia sit reprehenderit commodo. Consequat qui adipisicing non elit sit
            esse deserunt labore. Commodo ullamco proident nulla tempor minim laborum enim consectetur.
          </Typography>

          {/* <Parallax bgImage={require("./../../assets/business-man-image.jpg")} bgWidth={"100%"} strength={200}>
            <div style={{ height: "300px" }} />
          </Parallax> */}
          <Typography variant='h4' color='secondary' className={classes.subtitle}>
            Judge Duties
          </Typography>
          <Typography variant='body1' className={classes.text}>
            Fugiat esse nulla consequat aute duis et sunt id. Nisi ad dolor amet fugiat ipsum dolor nostrud labore. Aute
            reprehenderit consectetur dolor magna nostrud sit voluptate do cillum sit est dolore sunt duis. Quis do
            eiusmod fugiat tempor laborum exercitation sint voluptate aliqua aliquip. Elit consectetur cillum consequat
            adipisicing sit minim. Cillum enim eiusmod in ea exercitation exercitation quis consequat aute.
          </Typography>
        </Paper>
      </main>
    );
  }
}

Scope.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Scope);

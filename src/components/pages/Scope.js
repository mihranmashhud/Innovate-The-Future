import React, { Component } from "react";
import {
  Paper,
  withStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Radio
} from "@material-ui/core";
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
    marginBottom: "20px",
    fontSize: "35pt"
  },
  subtitle: {
    textAlign: "left",
    margin: "20px",
    fontSize: "25pt"
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
          <Typography variant="h2" color="secondary" className={classes.title}>
            Scope
          </Typography>

          {/* <Parallax bgImage={require("./../../assets/vr-image.jpeg")} bgWidth={"100%"} strength={200}>
            <div style={{ height: "300px" }} />
          </Parallax> */}
          <Typography
            variant="h3"
            color="secondary"
            className={classes.subtitle}
          >
            What The Event Is Like
          </Typography>
          <Typography variant="body1" className={classes.text}>
            HYPE IT UP! Cillum laboris aliquip id aliqua anim irure elit anim ex
            eu deserunt cupidatat pariatur labore. Irure officia Lorem consequat
            cillum nulla sint ad do qui dolore aute aute fugiat pariatur. Aute
            ea ullamco esse ullamco ipsum sint sunt ad ipsum do officia qui
            commodo. Ad non enim occaecat amet exercitation ex.
          </Typography>

          {/* <Parallax bgImage={require("./../../assets/developers-image.jpg")} bgWidth={"100%"} strength={200}>
            <div style={{ height: "300px" }} />
          </Parallax> */}
          <Typography
            variant="h3"
            color="secondary"
            className={classes.subtitle}
          >
            Student Requirements
          </Typography>
          <Typography variant="h4" className={classes.subtitle}>
            Pre-Presentation Checklist
          </Typography>
          <List className={classes.list}>
            <ListItem>
              <Checkbox checked={true} disableRipple />
              <ListItemText
                primary={"The software is organized into distinct sections."}
              />
            </ListItem>
            <ListItem>
              <Checkbox checked={true} disableRipple />
              <ListItemText
                primary={
                  "A detailed set of documentation is included in the project.The documentation is organized and easy to follow."
                }
              />
            </ListItem>
            <ListItem>
              <Checkbox checked={true} disableRipple />
              <ListItemText
                primary={
                  "A one-page outline of the entire product and pitch is created and submitted, along with the software, and the appropriate documentation."
                }
              />
            </ListItem>
          </List>
          <Typography variant="h4" className={classes.subtitle}>
            Presentation Checklist
          </Typography>
          <List>
            <ListItem>
              <Checkbox checked={true} disableRipple />
              <ListItemText
                primary={
                  "The presentation specifically states the problem that the product addresses and how the product itself is explained."
                }
              />
            </ListItem>
            <ListItem>
              <Checkbox checked={true} disableRipple />
              <ListItemText primary={"Explanation of product aspects"} />
            </ListItem>
            <ListItem
              style={{
                marginLeft: "20px",
                marginTop: "-20px"
              }}
            >
              <Radio checked={true} disableRipple />
              <ListItemText
                primary={
                  "Different features, the user interface, error protections etc."
                }
              />
            </ListItem>
            <ListItem>
              <Checkbox checked={true} disableRipple />
              <ListItemText
                primary={
                  "References to potential future build and developments, or creations of other products, are explained."
                }
              />
            </ListItem>
            <ListItem
              style={{
                marginLeft: "20px",
                marginTop: "-20px"
              }}
            >
              <Radio checked={true} disableRipple />
              <ListItemText
                primary={
                  "Will future revisions be released? Do you have plans for creating a series of products along with the one you developed?"
                }
              />
            </ListItem>
          </List>
          <Typography
            variant="h3"
            color="secondary"
            className={classes.subtitle}
          >
            Judge Duties
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Fugiat esse nulla consequat aute duis et sunt id. Nisi ad dolor amet
            fugiat ipsum dolor nostrud labore. Aute reprehenderit consectetur
            dolor magna nostrud sit voluptate do cillum sit est dolore sunt
            duis. Quis do eiusmod fugiat tempor laborum exercitation sint
            voluptate aliqua aliquip. Elit consectetur cillum consequat
            adipisicing sit minim. Cillum enim eiusmod in ea exercitation
            exercitation quis consequat aute.
          </Typography>
        </Paper>
      </main>
    );
  }
}
/*
The presentation specifically states the problem that the product addresses and how
The product itself is explained
Explanation of product aspects
  Different features, the user interface, error protections etc.
References to potential future build and developments, or creations of other products, are explained
  Will future revisions be released? Do you have plans for creating a series of products along with the one you developed?
*/
Scope.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Scope);

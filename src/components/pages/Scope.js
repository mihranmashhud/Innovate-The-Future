import React, { Component } from "react";
import {
  Paper,
  withStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Button
} from "@material-ui/core";
import PropTypes from "prop-types";
import StyledLink from "./../Styled-Link";
import { Parallax } from "react-parallax";
import { CheckboxBlankCircle } from "mdi-material-ui";

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
    padding: "20px"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "35pt"
  },
  subtitle: {
    textAlign: "left",
    fontSize: "25pt"
  },
  text: {
    fontSize: "20px",
    height: "100%",
    width: "auto",
    textAlign: "left"
  },
  image: {
    height: "100%"
  },
  icon: {
    marginRight: theme.spacing.unit,
    color: theme.palette.secondary.main
  },
  button: {
    marginTop: "20pt",
    marginBottom: "20pt"
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
            Business. Software. Food. Fun. Speakers. Prizes. Awards. Stun. and
            Done.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            IF is about all of this and much much more!!
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Although a formal competition, IF is also very light-hearted. The
            event itself will be held on <b>April 13th, 2019</b>. On the day of,
            competitors give their business pitches and are marked by judges on
            the criteria outlined within the student checklist. The actual
            software programs are handed in <b>2 weeks beforehand</b>.
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
<<<<<<< HEAD
          <StyledLink to='/Checklist'>
            <Button color='secondary' className={classes.button}>
              SEE FULL CHECKLIST
            </Button>
          </StyledLink>
          <Typography variant='h4' className={classes.subtitle}>
=======
          {/* <StyledLink to={require("./../../documents/IF Student Checklist.pdf")}>
            <Button>GO TO FULL CHECKLIST</Button>
          </StyledLink> */}
          <Typography variant="h4" className={classes.subtitle}>
>>>>>>> 861651821c9093ccce4a2c7ac83aec779dc1162a
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
            <ListItem style={{ marginLeft: "30pt", marginTop: "-20px" }}>
              <CheckboxBlankCircle className={classes.icon} />
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
            <ListItem style={{ marginLeft: "30pt", marginTop: "-20px" }}>
              <CheckboxBlankCircle className={classes.icon} />
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
            Judging rubrics are not made available to students, they are only
            released to the judges themselves. Instead, competitors should use
            the student checklist to help guide them in the creation of their
            project. If you are a working professional in the field of computer
            science or business we encourage you to contact us at the email
            found within our contact us section to become one of the judges for
            this competition. We look forward to working with you!!
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

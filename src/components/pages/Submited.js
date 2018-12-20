import React, { Component } from "react";
import { Paper, Typography, withStyles } from "@material-ui/core";

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
  text: {
    fontSize: "20px",
    height: "100%",
    width: "auto",
    textAlign: "left"
  }
});

class Submited extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.layout} id={"Scope"}>
        <Paper className={classes.paper}>
          <Typography variant='h2' color='secondary' className={classes.title}>
            You Have Submited Your Application!
          </Typography>
          <Typography variant='body1' className={classes.text}>
            Your application has been submitted to our servers. In the following weeks make sure to keep tabs on your
            email to see if you have been accepted. We will also be sending any other important information through
            there.
          </Typography>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Submited);

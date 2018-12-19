import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";

export default class Submited extends Component {
  render() {
    const { classes } = props;
    return (
      <main className={classes.layout} id={"Scope"}>
        <Paper className={classes.paper}>
          <Typography variant='h2' color='secondary' className={classes.title}>
            You Have Submited Your Application!
          </Typography>
          <Typography variant='body1' className={classes.text}>
            Your application has been submitted to our servers. In the following weeks make sure to keep tabs on your
            email to see if you have been accepted and any other important information.
          </Typography>
        </Paper>
      </main>
    );
  }
}

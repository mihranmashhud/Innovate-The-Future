import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CssBaseline from "@material-ui/core/CssBaseline";

import Instagram from "mdi-material-ui/Instagram";
import Facebook from "mdi-material-ui/Facebook";
import Twitter from "mdi-material-ui/Twitter";
import Snapchat from "mdi-material-ui/Snapchat";

const styles = {
  card: {
    maxWidth: 500,
    width: "90%",
    margin: "auto",
    marginTop: "20px"
  },
  title: {
    fontSize: 60
  },
  pos: {
    marginBottom: 12
  },
  pos1: {
    marginBottom: 25
  }
};

function Contact(props) {
  const { classes } = props;

  return (
    <div className={classes.root} align="center">
      <CssBaseline />
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            Contact Information
          </Typography>
          <Typography className={classes.pos} color="textPrimary">
            Phone Number
          </Typography>
          <Typography className={classes.pos1} variant="h5" component="h2">
            123-456-7890
          </Typography>
          <Typography className={classes.pos} color="textPrimary">
            Email
          </Typography>
          <Typography className={classes.pos1} variant="h5" component="h2">
            if@if.com
          </Typography>
          <Typography className={classes.pos} color="textPrimary">
            Address
          </Typography>
          <Typography className={classes.pos1} variant="h5" component="h2">
            Turner Fenton Secondary School
          </Typography>
          <Typography className={classes.pos} color="textPrimary">
            Social Media
          </Typography>

          <div>
            <IconButton
              title="Visit our Facebook Page"
              color="white"
              href="http://www.facebook.com"
            >
              <Facebook />
            </IconButton>

            <IconButton
              title="See our Instagram"
              color="white"
              href="https://www.instagram.com/innovatethefuture/"
            >
              <Instagram />
            </IconButton>

            <IconButton
              title="See our Twitter"
              color="white"
              href="http://www.twitter.com"
            >
              <Twitter />
            </IconButton>

            <IconButton
              title="See our Snapchat"
              color="white"
              href="http://www.snapchat.com"
            >
              <Snapchat />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Contact);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import IconButton from "@material-ui/core/IconButton";

import Instagram from "mdi-material-ui/Instagram";
import Facebook from "mdi-material-ui/Facebook";
import Twitter from "mdi-material-ui/Twitter";
import Snapchat from "mdi-material-ui/Snapchat";

const styles = {
  card: {
    minWidth: 275,
    width: "90%",
    margin: 50
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
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Contact Information
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Phone Number
          </Typography>
          <Typography className={classes.pos1} variant="h5" component="h2">
            123-456-7890
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Email
          </Typography>
          <Typography className={classes.pos1} variant="h5" component="h2">
            if@if.com
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Address
          </Typography>
          <Typography className={classes.pos1} variant="h5" component="h2">
            Turner Fenton Secondary School
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Social Media
          </Typography>

          <div>
            <IconButton
              title="Visit our Facebook Page"
              color="primary"
              href="http://www.facebook.com"
            >
              <Facebook />
            </IconButton>

            <IconButton
              title="See our Instagram"
              color="primary"
              href="https://www.instagram.com/innovatethefuture/"
            >
              <Instagram />
            </IconButton>

            <IconButton
              title="See our Twitter"
              color="primary"
              href="http://www.twitter.com"
            >
              <Twitter />
            </IconButton>

            <IconButton
              title="See our Snapchat"
              color="primary"
              href="http://www.snapchat.com"
            >
              <Snapchat />
            </IconButton>
          </div>

          {/* <Typography className={classes.pos1} variant="h5" component="h2">
            facebook twitter insta slack
          </Typography> */}
          {/*Connect FB twitter insta and slack to the buttons. Remember that we are using material UI*/}
          {/* will add proper social media buttons later */}
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Contact);

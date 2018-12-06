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
    width: "auto",
    display: "block",
    minWidth: "70%",
    maxWidth: "90%",
    width: "600px",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px"
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
    <div className={classes.root} align='center' id='Contact-Us'>
      <CssBaseline />
      <Card className={classes.card}>
        <CardContent>
          <Typography variant='h2' color='secondary' gutterBottom>
            Contact Information
          </Typography>
          <Typography className={classes.pos} variant='h4' color='secondary'>
            Email
          </Typography>
          <Typography className={classes.pos1} variant='h6' component='h2'>
            email-if.innovatethefuture@gmail.com
          </Typography>
          <Typography className={classes.pos} variant='h4' color='secondary'>
            Address
          </Typography>
          <Typography className={classes.pos1} variant='h5' component='h2'>
            Turner Fenton Secondary School
          </Typography>
          <Typography className={classes.pos} variant='h4' color='secondary'>
            Social Media
          </Typography>

          <div>
            <IconButton title='Visit our Facebook Page' color='white' href='http://www.facebook.com'>
              <Facebook />
            </IconButton>

            <IconButton title='See our Instagram' color='white' href='https://www.instagram.com/innovatethefuture/'>
              <Instagram />
            </IconButton>

            <IconButton title='See our Twitter' color='white' href='http://www.twitter.com'>
              <Twitter />
            </IconButton>

            <IconButton title='See our Snapchat' color='white' href='http://www.snapchat.com'>
              <Snapchat />
            </IconButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Contact);

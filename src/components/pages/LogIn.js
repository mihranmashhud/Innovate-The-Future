import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React, { Component } from "react";
import StyledLink from "./../Styled-Link";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import { connect } from "react-redux";
import {
  signInWithEmailAndPassword,
  signInWithGoogle,
  signInWithGithub,
  signInWithTwitter,
  signInWithFacebook
} from "../../actions";
import Google from "mdi-material-ui/Google";
import GithubCircle from "mdi-material-ui/GithubCircle";
import Facebook from "mdi-material-ui/Facebook";
import Twitter from "mdi-material-ui/Twitter";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  formControl: {
    color: theme.palette.secondary.main
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  signUp: {
    marginTop: theme.spacing.unit * 2
  },
  link: {
    color: theme.palette.secondary.main
  },
  checkRoot: {
    color: theme.palette.secondary.main,
    "&$checked": {
      color: theme.palette.secondary.light
    }
  },
  checked: {},
  inputRoot: {
    color: theme.palette.secondary.main,
    "&$inputFocused": {
      color: theme.palette.secondary.main
    }
  },
  inputFocused: {}
});

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = id => event => {
    event.persist();
    this.setState({
      [id]: event.target.value
    });
  };

  signInWithEmailAndPassword = () => {
    this.props.signInWithEmailAndPassword(this.state.email, this.state.password);
  };

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push("/Apply");
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component='h1' variant='h5'>
              Log In
            </Typography>

            <form className={classes.form}>
              <FormControl margin='normal' fullWidth>
                <InputLabel
                  htmlFor='email'
                  FormLabelClasses={{
                    root: classes.inputRoot,
                    focused: classes.inputFocused
                  }}>
                  Email Address
                </InputLabel>
                <Input
                  id='email'
                  name='email'
                  autoComplete='email'
                  autoFocus
                  onChange={this.handleChange("email")}
                  classes={{
                    root: classes.inputRoot
                  }}
                />
              </FormControl>

              <FormControl margin='normal' fullWidth>
                <InputLabel
                  htmlFor='password'
                  FormLabelClasses={{
                    root: classes.inputRoot,
                    focused: classes.inputFocused
                  }}>
                  Password
                </InputLabel>
                <Input
                  name='password'
                  type='password'
                  id='password'
                  autoComplete='current-password'
                  onChange={this.handleChange("password")}
                  classes={{
                    root: classes.inputRoot
                  }}
                />
              </FormControl>

              <FormControlLabel
                classes={{
                  root: classes.inputRoot
                }}
                control={
                  <Checkbox
                    value='remember'
                    classes={{
                      root: classes.checkRoot,
                      checked: classes.checked
                    }}
                  />
                }
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
                className={classes.submit}
                onClick={this.signInWithEmailAndPassword}>
                <StyledLink to='/Apply'>Log In</StyledLink>
                {/* Log In */}
              </Button>
            </form>
            <Typography className={classes.signUp}>
              Don't have an account?{" "}
              <StyledLink to='/Sign-Up' className={classes.link}>
                Click here to sign up!
              </StyledLink>{" "}
              Or sign up with the methods below.
            </Typography>
            <div>
              <IconButton color='secondary' onClick={this.props.signInWithGoogle} aria-label='GoogleOAuth'>
                <Google />
              </IconButton>
              <IconButton color='secondary' onClick={this.props.signInWithGithub}>
                <GithubCircle />
              </IconButton>
              <IconButton color='secondary' onClick={this.props.signInWithFacebook}>
                <Facebook />
              </IconButton>
              <IconButton color='secondary' onClick={this.props.signInWithTwitter}>
                <Twitter />
              </IconButton>
            </div>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

LogIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      signInWithEmailAndPassword,
      signInWithGoogle,
      signInWithGithub,
      signInWithFacebook,
      signInWithTwitter
    }
  )(withStyles(styles)(LogIn))
);

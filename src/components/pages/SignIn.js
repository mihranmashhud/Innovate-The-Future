import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Grid, Divider } from "@material-ui/core";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { signInWithGoogle, signInWithGithub, signInWithTwitter, signInWithFacebook } from "../../actions";
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
  title: {
    marginBottom: theme.spacing.unit * 2
  },
  button: {
    width: "100%",
    margin: "10px",
    textAlign: "left"
  },
  icon: {
    marginRight: theme.spacing.unit,
    color: theme.palette.secondary.main,
    fontSize: "40px"
  },
  buttonText: {
    fontSize: "14pt",
    color: theme.palette.secondary.main
  },
  divider: {
    fontColor: theme.palette.secondary.main
  },
  text: {
    marginBottom: "10px",
    fontSize: "12pt",
    textAlign: "center"
  }
});

class SignIn extends Component {
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

  // signInWithEmailAndPassword = () => {
  //   this.props.signInWithEmailAndPassword(this.state.email, this.state.password);
  // };

  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth != null) {
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
            <Typography variant='h2' className={classes.title}>
              Sign In
            </Typography>
            {/* <Divider variant='fullWidth' className={classes.divider} /> */}
            <Typography variant='body1' color='textPrimary' className={classes.text}>
              Make sure to use the same account you used last time you signed in.
            </Typography>
            {/* <form className={classes.form}>
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
                Log In
              </Button>
            </form> */}
            {/* <Typography className={classes.signUp}>
              Don't have an account?{" "}
              <StyledLink to='/Sign-Up' className={classes.link}>
                Click here to sign up!
              </StyledLink>{" "}
              Or sign up with the methods below.
            </Typography> */}
            <Grid container justify={"center"} spacing={24}>
              <Button
                onClick={this.props.signInWithGoogle}
                className={classes.button}
                variant='outlined'
                color='secondary'>
                <Google className={classes.icon} />
                <Typography variant='h5' className={classes.buttonText}>
                  Sign In With Google
                </Typography>
              </Button>
              <Button
                onClick={this.props.signInWithGithub}
                className={classes.button}
                variant='outlined'
                color='secondary'>
                <GithubCircle className={classes.icon} />
                <Typography variant='h5' className={classes.buttonText}>
                  Sign In With Github
                </Typography>
              </Button>
              <Button
                onClick={this.props.signInWithFacebook}
                className={classes.button}
                variant='outlined'
                color='secondary'>
                <Facebook className={classes.icon} />
                <Typography variant='h5' className={classes.buttonText}>
                  Sign In With Facebook
                </Typography>
              </Button>
              <Button
                onClick={this.props.signInWithTwitter}
                className={classes.button}
                variant='outlined'
                color='secondary'>
                <Twitter className={classes.icon} />
                <Typography variant='h5' className={classes.buttonText}>
                  Sign In With Twitter
                </Typography>
              </Button>
              <Typography variant='body1' color='textPrimary' className={classes.text}>
                Need to sign up? Using one of the auth providers above will do just that!
              </Typography>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      signInWithGoogle,
      signInWithGithub,
      signInWithFacebook,
      signInWithTwitter
    }
  )(withStyles(styles)(SignIn))
);

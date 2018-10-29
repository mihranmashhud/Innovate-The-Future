import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import CssBaseline from "@material-ui/core/CssBaseline"
import FormControl from "@material-ui/core/FormControl"
import Input from "@material-ui/core/Input"
import InputLabel from "@material-ui/core/InputLabel"
import Paper from "@material-ui/core/Paper"
import PropTypes from "prop-types"
import Typography from "@material-ui/core/Typography"
import withStyles from "@material-ui/core/styles/withStyles"
import StyledLink from "../Styled-Link"
import { signUpWithEmailAndPassword } from "../../actions"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

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
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  signUp: {
    marginTop: theme.spacing.unit * 2
  },
  inputRoot: {
    color: theme.palette.secondary.main,
    "&$inputFocused": {
      color: theme.palette.secondary.main
    }
  },
  inputFocused: {}
})

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      confirmation: ""
    }
  }

  handleChange = id => event => {
    event.persist()
    this.setState({
      [id]: event.target.value
    })
  }

  signUpWithEmailAndPassword() {
    console.log(this.state)
    const { email, password, confirmation } = this.state
    if (password === confirmation) {
      this.signUpWithEmailAndPassword(email, password)
    }
  }

  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>

            <form className={classes.form}>
              <FormControl margin="normal" fullWidth>
                <InputLabel
                  htmlFor="email"
                  FormLabelClasses={{
                    root: classes.inputRoot,
                    focused: classes.inputFocused
                  }}
                >
                  Email Address
                </InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={this.handleChange("email")}
                  classes={{
                    root: classes.inputRoot
                  }}
                />
              </FormControl>

              <FormControl margin="normal" fullWidth>
                <InputLabel
                  htmlFor="password"
                  FormLabelClasses={{
                    root: classes.inputRoot,
                    focused: classes.inputFocused
                  }}
                >
                  Password
                </InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange("password")}
                  classes={{
                    root: classes.inputRoot
                  }}
                />
              </FormControl>
              <FormControl margin="normal" fullWidth>
                <InputLabel
                  htmlFor="password-confirm"
                  FormLabelClasses={{
                    root: classes.inputRoot
                  }}
                >
                  Confirm Password
                </InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password-confirm"
                  autoComplete="current-password"
                  onChange={this.handleChange("confirmation")}
                  classes={{
                    root: classes.inputRoot
                  }}
                />
              </FormControl>

              <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.signUp} onClick={this.signUpWithEmailAndPassword}>
                <StyledLink to="/Log-In">Sign Up</StyledLink>
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(
  connect(
    null,
    {
      signUpWithEmailAndPassword
    }
  )(withStyles(styles)(SignUp))
)

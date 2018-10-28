import React, { Component } from "react"
import TextForm from "./Apply/TextForm"
import MenuForm from "./Apply/MenuForm"
import LongAnswer from "./Apply/LongAnswer"
import Card from "@material-ui/core/Card"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

import { connect } from "react-redux"
import { loadUserApplication, updateUserApplication } from "../../actions/index"

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    alignItems: "center"
  },
  card: {
    width: "90%",
    maxWidth: 1000,
    margin: "auto",
    marginTop: "20px",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  title: {
    color: theme.palette.text.primary
  },
  button: {
    margin: "10px"
  }
})

class Apply extends Component {
  componentDidMount() {
    this.props.loadUserApplication()
  }

  submitApplication() {}

  saveApplication() {
    updateUserApplication([])
  }

  render() {
    const { classes } = this.props

    return (
      <div className={classes.layout} align="center">
        <CssBaseline />

        <Card className={classes.card} align="center">
          <Typography variant="h2" className={classes.title}>
            Your Application
          </Typography>
          <Grid container spacing={24} justify="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextForm label="First Name" required id="first-name" autoComplete="First Name" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextForm label="Last Name" required id="last-name" autoComplete="Last Name" />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextForm label="Email" required id="email" autoComplete="Email" />
            </Grid>
            <Grid item xs={12}>
              <LongAnswer label="[Question....................]?" required rows={4} id="question1" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.button} onClick={this.saveApplication()}>
                Save Application
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.button} onClick={this.submitApplication}>
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    application: state.application
  }
}

export default connect(
  mapStateToProps,
  { loadUserApplication, updateUserApplication }
)(withStyles(styles)(Apply))

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
  constructor(props) {
    super(props)
    this.state = {
      firstName: {
        label: "First Name",
        value: ""
      },
      lastName: {
        label: "Last Name",
        value: ""
      },
      email: {
        label: "Email",
        value: ""
      },
      question1: {
        label: "[question 1 will be here]?",
        value: ""
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.uid !== nextProps.user.uid) {
      this.props.loadUserApplication(nextProps.user)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.application !== this.props.application) {
      this.replaceInput()
    }
  }

  replaceInput = () => {
    if (this.props.application.questions !== undefined) {
      const ids = Object.keys(this.state)
      const { questions } = this.props.application
      for (let i = 0; i < ids.length; i++) {
        let id = ids[i]
        let label = this.state[id].label
        for (let j = 0; j < questions.length; j++) {
          if (label === questions[j].label) {
            this.setState({
              [id]: {
                label: this.state[id].label,
                value: questions[j].value
              }
            })
            break
          }
        }
      }
      console.log(questions)
      console.log(this.state)
    }
  }

  submitApplication = () => {}

  saveApplication = () => {
    let questions = []
    for (const id in this.state) {
      let value = this.state[id]
      questions.push(value)
    }
    this.props.updateUserApplication(this.props.user, questions)
  }

  handleChange = id => event => {
    event.persist()
    this.setState({ [id]: { label: this.state[id].label, value: event.target.value } })
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
              <TextForm label={this.state.firstName.label} required id="first-name" onChange={this.handleChange("firstName")} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <TextForm label={this.state.lastName.label} required id="last-name" onChange={this.handleChange("lastName")} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextForm label={this.state.email.label} required id="email" onChange={this.handleChange("email")} />
            </Grid>
            <Grid item xs={12}>
              <LongAnswer label={this.state.question1.label} required rows={4} id="question1" onChange={this.handleChange("question1")} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Button type="submit" fullWidth variant="contained" color="secondary" className={classes.button} onClick={this.saveApplication}>
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
    user: state.auth,
    application: state.application
  }
}

export default connect(
  mapStateToProps,
  { loadUserApplication, updateUserApplication }
)(withStyles(styles)(Apply))

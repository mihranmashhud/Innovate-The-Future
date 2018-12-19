import React, { Component } from "react";
import TextForm from "./Apply/TextForm";
import MenuForm from "./Apply/MenuForm";
import LongAnswer from "./Apply/LongAnswer";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "@material-ui/icons/Close";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

import { connect } from "react-redux";
import { loadUserApplication, updateUserApplication } from "../../actions/index";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block",
    minWidth: "70%",
    maxWidth: "90%",
    width: "600px",
    margin: "auto",
    marginTop: "20px",
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
    color: theme.palette.text.primary,
    fontSize: "35pt",
    marginTop: "30px"
  },
  subtitle: {
    textAlign: "left",
    fontSize: "25pt",
    marginTop: "20px"
  },
  text: {
    marginTop: "20px",
    fontSize: "20px",
    height: "100%",
    width: "auto",
    textAlign: "left"
  },
  button: {
    marginTop: "20px"
  }
});

class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: {
        label: "First Name",
        value: "",
        required: true
      },
      lastName: {
        label: "Last Name",
        value: "",
        required: true
      },
      currentGrade: {
        label: "Your Current Grade Level",
        value: "",
        required: true
      },
      email: {
        label: "Email",
        value: "",
        required: true
      },
      teamMemberEmail1: {
        label: "Team Member 1 Email",
        value: "",
        required: true
      },
      teamMemberEmail2: {
        label: "Team Member 2 Email",
        value: "",
        required: false
      },
      teamMemberEmail3: {
        label: "Team Member 3 Email",
        value: "",
        required: false
      },
      rankExperience: {
        label: "Rank Experience",
        value: "",
        required: true
      },
      summarizeExperience: {
        label: "Summarize Experience",
        value: "",
        required: true
      },
      softwareCourses: {
        label: "Software Courses",
        value: "",
        required: true
      },
      languages: {
        label: "Programming Languages",
        value: "",
        required: true
      },
      github: {
        label: "Github",
        value: "",
        required: false
      },
      rankPresentation: {
        label: "Rank Presentation Skills",
        value: "",
        required: true
      },
      businessExperience: {
        label: "Business Experience",
        value: "",
        required: true
      },
      businessCourses: {
        label: "Business Courses",
        value: "",
        required: true
      },
      leadershipPositions: {
        label: "Leadership Positions",
        value: "",
        required: true
      },
      rankReports: {
        label: "Written Reports",
        value: "",
        required: true
      },
      possibleInterest: {
        label: "Possible Interest",
        value: "",
        required: true
      },
      career: {
        label: "Career Aspirations",
        value: "",
        required: true
      },
      hasClickedSave: false,
      required: false
    };
  }

  componentWillMount() {
    if (this.props.user.uid != null) {
      this.props.loadUserApplication(this.props.user);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.uid !== nextProps.user.uid) {
      this.props.loadUserApplication(nextProps.user);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.application !== this.props.application) {
      this.replaceInput();
    }
  }

  replaceInput = () => {
    if (this.props.application) {
      if (this.props.application.questions !== undefined) {
        const ids = Object.keys(this.state);
        const { questions } = this.props.application;
        for (let i = 0; i < ids.length; i++) {
          let id = ids[i];
          let label = this.state[id].label;
          for (let j = 0; j < questions.length; j++) {
            if (label === questions[j].label) {
              this.setState({
                [id]: {
                  label: this.state[id].label,
                  value: questions[j].value
                }
              });
              break;
            }
          }
        }
      }
    }
  };

  submitApplication = () => {
    let questions = [];
    for (const id in this.state) {
      let value = this.state[id];
      if (id != "hasClickedSave" || id != "required") {
        questions.push(value);
      }
    }
    console.log(this.props.application.submitted);
    this.props.updateUserApplication(this.props.user, questions, true);
  };

  saveApplication = () => {
    let questions = [];
    for (const id in this.state) {
      let value = this.state[id];
      if (id != "hasClickedSave" || id != "required") {
        questions.push(value);
      }
    }
    this.props.updateUserApplication(this.props.user, questions);
    this.setState({ hasClickedSave: true });
  };

  handleSnackbarClose = () => {
    this.setState({ hasClickedSave: false });
  };

  handleChange = id => event => {
    let required = true;
    for (const id in this.state) {
      if (id != "hasClickedSave" && id != "required") {
        if (this.state[id].required == true && this.state[id].value == "") {
          required = false;
          break;
        }
      }
    }
    this.setState({ required: required });
    event.persist();
    this.setState({ [id]: { label: this.state[id].label, value: event.target.value } });
  };

  render() {
    const { classes } = this.props;
    let submitted = this.props.application ? this.props.application.submitted : false;
    let { required } = this.state;

    return (
      <div className={classes.layout} align='center'>
        <CssBaseline />

        <Card className={classes.card} align='center'>
          <Typography variant='h2' className={classes.title}>
            Your Application
          </Typography>

          <Grid container spacing={24} justify='flex-start'>
            <Grid item xs={12}>
              <Typography variant='body1' className={classes.text}>
                Thank you for your interest in Innovate the Future. Given the rigorous nature of this student-led
                competition, we require potential competitors to fill out an application which will give us a better
                understanding of who you are, what skills you can bring to our event, and why you want to be part of IF.
                Competitors must list their group members with at least one other member and a maximum of 3 other
                members along with the competitor. Competitors are not required to declare their area of focus at this
                time.
                <br />
                <br />
                Be sure to give it your all, and we look forward to learning about you!
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography variant='h3' color='secondary' className={classes.subtitle} xs={12}>
                Student Information
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <TextForm
                label={this.state.firstName.label}
                required
                id='first-name'
                onChange={this.handleChange("firstName")}
                value={this.state.firstName.value}
                readOnly={submitted}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <TextForm
                label={this.state.lastName.label}
                required
                id='last-name'
                onChange={this.handleChange("lastName")}
                value={this.state.lastName.value}
                readOnly={submitted}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextForm
                label={this.state.currentGrade.label}
                required
                id='currentGrade'
                onChange={this.handleChange("currentGrade")}
                value={this.state.currentGrade.value}
                readOnly={submitted}
              />
            </Grid>
            <Grid item xs={12}>
              <TextForm
                label={this.state.email.label}
                required
                id='email'
                onChange={this.handleChange("email")}
                value={this.state.email.value}
                readOnly={submitted}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h3' color='secondary' className={classes.subtitle}>
                Other Team Members
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1' className={classes.text}>
                Put the email of your other team members below.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextForm
                label={this.state.teamMemberEmail1.label}
                id='teamMemberEmail1'
                required
                onChange={this.handleChange("teamMemberEmail1")}
                value={this.state.teamMemberEmail1.value}
                readOnly={submitted}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextForm
                label={this.state.teamMemberEmail2.label}
                id='teamMemberEmail2'
                onChange={this.handleChange("teamMemberEmail2")}
                value={this.state.teamMemberEmail2.value}
                readOnly={submitted}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <TextForm
                label={this.state.teamMemberEmail3.label}
                id='teamMemberEmail3'
                onChange={this.handleChange("teamMemberEmail3")}
                value={this.state.teamMemberEmail3.value}
                readOnly={submitted}
              />
            </Grid>

            {/* Computer Science Background */}

            <Grid item xs={12}>
              <Typography variant='h3' color='secondary' className={classes.subtitle}>
                Computer Science Background
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h3' color='body1' className={classes.text}>
                Rank your experience with software (programs/computer usage) on a scale of 1 - 5:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextForm
                label={this.state.rankExperience.label}
                id=''
                onChange={this.handleChange("rankExperience")}
                value={this.state.rankExperience.value}
                readOnly={submitted}
                maxLength={1}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1' className={classes.text}>
                Summarize any computer science experience (projects/internships/Hackathons) you have attended or worked
                on in point form and what you have achieved:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LongAnswer
                label={this.state.summarizeExperience.label}
                required
                rows={4}
                id='summarizeExperience'
                onChange={this.handleChange("summarizeExperience")}
                value={this.state.summarizeExperience.value}
                readOnly={submitted}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1' className={classes.text}>
                List any software-related courses (school or self-taught) you have been enrolled in:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LongAnswer
                label={this.state.softwareCourses.label}
                required
                rows={4}
                id='softwareCourses'
                onChange={this.handleChange("softwareCourses")}
                value={this.state.softwareCourses.value}
                readOnly={submitted}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1' className={classes.text}>
                List any programming languages that you know:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LongAnswer
                label={this.state.languages.label}
                required
                rows={4}
                id='languages'
                onChange={this.handleChange("languages")}
                value={this.state.languages.value}
                readOnly={submitted}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='body1' className={classes.text}>
                Link your github account:
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextForm
                label={this.state.github.label}
                id=''
                onChange={this.handleChange("github")}
                value={this.state.github.value}
                readOnly={submitted}
              />
            </Grid>
          </Grid>

          {/* Business Background */}

          <Grid item xs={12}>
            <Typography variant='h3' color='secondary' className={classes.subtitle}>
              Business Background
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' className={classes.text}>
              How would you rank yourself as an oral presenter on a scale of 1 - 5?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextForm
              label={this.state.rankPresentation.label}
              id=''
              onChange={this.handleChange("rankPresentation")}
              value={this.state.rankPresentation.value}
              readOnly={submitted}
              maxLength={1}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' className={classes.text}>
              Describe any business experience (clubs and initiatives) you have been a part of in point form:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LongAnswer
              label={this.state.businessExperience.label}
              required
              rows={4}
              id='businessExperience'
              onChange={this.handleChange("businessExperience")}
              value={this.state.businessExperience.value}
              readOnly={submitted}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' className={classes.text}>
              List any business-related courses (school or self-learned) you have been enrolled in:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LongAnswer
              label={this.state.businessCourses.label}
              required
              rows={4}
              id='businessCourses'
              onChange={this.handleChange("businessCourses")}
              value={this.state.businessCourses.value}
              readOnly={submitted}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' className={classes.text}>
              Elaborate on a high-school position in which you have shown leadership (500 character limit):
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LongAnswer
              label={this.state.leadershipPositions.label}
              required
              rows={4}
              id='leadershipPositions'
              onChange={this.handleChange("leadershipPositions")}
              value={this.state.leadershipPositions.value}
              readOnly={submitted}
              maxLength={500}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' className={classes.text}>
              How would you rank yourself at creating professional, written reports on a scale of 1 - 5?
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextForm
              label={this.state.rankReports.label}
              id=''
              onChange={this.handleChange("rankReports")}
              value={this.state.rankReports.value}
              readOnly={submitted}
              maxLength={1}
            />
          </Grid>

          {/* Personal Engagement*/}

          <Grid item xs={12}>
            <Typography variant='h3' color='secondary' className={classes.subtitle}>
              Personal Engagement
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' className={classes.text}>
              Elaborate on a broad issue in your community or something within society that you think needs improvement
              on which you are interested in tackling. This could include any aspect of any business, organization or
              entity which you think you could improve. (500 character limit)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LongAnswer
              label={this.state.possibleInterest.label}
              required
              rows={4}
              id='possibleInterest'
              onChange={this.handleChange("possibleInterest")}
              value={this.state.possibleInterest.value}
              readOnly={submitted}
              maxLength={500}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body1' className={classes.text}>
              What are your career aspirations and how do you plan on achieving them? You may talk about postsecondary
              programs and other opportunities which you plan to take part in. (500 character limit)
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LongAnswer
              label={this.state.career.label}
              required
              rows={4}
              id='career'
              onChange={this.handleChange("career")}
              value={this.state.career.value}
              readOnly={submitted}
              maxLength={500}
            />
          </Grid>
          <Grid container spacing={24} justify='center'>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
                className={classes.button}
                onClick={this.saveApplication}
                disabled={submitted}>
                Save Application
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='secondary'
                className={classes.button}
                onClick={this.submitApplication}
                disabled={submitted || !required}>
                Submit Application
              </Button>
            </Grid>
          </Grid>
        </Card>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.hasClickedSave}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          ContentProps={{ "aria-describedby": "message-id" }}
          message={<span id='message-id'>Save Successful.</span>}
          action={[
            <IconButton key='close' aria-label='Close' color='secondary' onClick={this.handleSnackbarClose}>
              <CloseIcon />
            </IconButton>
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth,
    application: state.application
  };
};

export default connect(
  mapStateToProps,
  { loadUserApplication, updateUserApplication }
)(withStyles(styles)(Apply));

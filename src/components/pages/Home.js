import React, { variant } from "react"
import { Parallax } from "react-parallax"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import Paper from "@material-ui/core/Paper"
import StyledLink from "../Styled-Link";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    fontSize: "30px"
  },
  input: {
    display: "none"
  },
  root: {
    width: "100%"
  },
  title: {
    width: "70%",
    margin: "20px"
  },
  text: {
    width: "90%"
  }
})

function Home(props) {
  const { classes } = props

  return (
    <Paper className={classes.root} elevation={1} align="center">
      <Parallax bgImage={require("./../../assets/IF-Banner.png")} bgImageAlt="the cat" strength={200}>
        <div style={{ height: "600px" }} />
      </Parallax>
      <Typography variant="h2" className={classes.title}>
        Welcome to Innovate The Future
      </Typography>
      <Typography variant="h3" className={classes.text} align="center" paragraph={true}>
        Incididunt et exercitation esse labore cupidatat nulla. Amet commodo amet anim dolore elit ea Lorem adipisicing in. Cupidatat aliquip occaecat do consectetur fugiat ad mollit aliqua eu fugiat tempor amet esse ipsum. Pariatur officia mollit eu commodo tempor voluptate. Do sint cillum quis aute sit consequat incididunt.
      </Typography>
      <Button className={classes.button} color="primary">
        <StyledLink to="/Apply">Apply Now</StyledLink>
      </Button>
    </Paper>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

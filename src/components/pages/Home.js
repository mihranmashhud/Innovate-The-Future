import React, { variant } from "react"
import { Parallax } from "react-parallax"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"
import StyledLink from "../Styled-Link"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CssBaseline from "@material-ui/core/CssBaseline"

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block"
  },
  buttons: {
    margin: "auto"
  },
  button: {
    fontSize: "30px"
  },
  input: {
    display: "none"
  },
  root: {
    width: "100%"
  },
  title: {
    margin: "auto",
    marginTop: "20px",
    marginBottom: "20px",
    textAlign: "center"
  },
  text: {
    width: "90%",
    margin: "auto",
    textAlign: "center"
  },
  card: {
    maxWidth: "90%",
    margin: "auto",
    marginTop: "20px"
  }
})

function Home(props) {
  const { classes } = props

  return (
    <main className={classes.layout}>
      <CssBaseline />
      <Card className={classes.card} elevation={1}>
        <Parallax bgImage={require("./../../assets/IF-Banner.png")} bgImageAlt="the cat" strength={300}>
          <div style={{ height: "500px" }} />
        </Parallax>
        <CardContent>
          <Typography variant="h3" className={classes.title}>
            Welcome to Innovate The Future
          </Typography>
          <Typography variant="h4" className={classes.text} paragraph={true}>
            Incididunt et exercitation esse labore cupidatat nulla. Amet commodo amet anim dolore elit ea Lorem adipisicing in. Cupidatat aliquip occaecat do consectetur fugiat ad mollit aliqua eu fugiat tempor amet esse ipsum. Pariatur officia mollit eu commodo tempor voluptate. Do sint cillum quis aute sit consequat incididunt.
          </Typography>
        </CardContent>
        <CardActions>
          <div className={classes.buttons}>
            <Button className={classes.button} color="secondary">
              <StyledLink to="/Apply">Apply Now</StyledLink>
            </Button>
            <Button className={classes.button} color="secondary">
              <StyledLink to="/Event-Scope">See The Scope</StyledLink>
            </Button>
          </div>
        </CardActions>
      </Card>
    </main>
  )
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)

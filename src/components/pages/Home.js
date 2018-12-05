import React, { variant } from "react";
import { Parallax } from "react-parallax";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import StyledLink from "../Styled-Link";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import IFLogo from "./Home/IFLogo";
import { FormHelperText } from "@material-ui/core";

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block"
  },
  buttons: {
    margin: "auto"
  },
  button: {
    fontSize: "20px",
    margin: "auto"
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
    minWidth: "70%",
    maxWidth: "90%",
    width: "600px",
    margin: "auto",
    marginTop: "20px"
  }
});

function Home(props) {
  const { classes } = props;

  return (
    <main className={classes.layout}>
      <CssBaseline />
      <Card className={classes.card} elevation={1}>
        <Parallax
          bgImage={require(`./../../assets/${Math.random() < 0.5 ? "city-image-1.png" : "city-image.jpeg"}`)}
          bgWidth={"100%"}
          strength={300}
          blur={3}>
          <div
            style={{
              textAlign: "center"
            }}>
            <IFLogo width={"60%"} />
          </div>
        </Parallax>

        <CardContent>
          <Typography variant='h4' className={classes.title}>
            Welcome to Innovate The Future
          </Typography>
          <Typography variant='h5' className={classes.text} paragraph={true}>
            Incididunt et exercitation esse labore cupidatat nulla. Amet commodo amet anim dolore elit ea Lorem
            adipisicing in. Cupidatat aliquip occaecat do consectetur fugiat ad mollit aliqua eu fugiat tempor amet esse
            ipsum. Pariatur officia mollit eu commodo tempor voluptate. Do sint cillum quis aute sit consequat
            incididunt.
          </Typography>
        </CardContent>
        <CardActions>
          <div className={classes.buttons}>
            <Button className={classes.button} color='secondary'>
              <StyledLink to='/Apply'>Apply Now</StyledLink>
            </Button>
            <Button className={classes.button} color='secondary'>
              <StyledLink to='/Event-Scope'>See The Scope</StyledLink>
            </Button>
          </div>
        </CardActions>
      </Card>
    </main>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);

import React, { Component } from "react";
import { CssBaseline, Typography, Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

class About extends Component {
  render() {
    return (
      <main>
        <CssBaseline>
          <Paper>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Paper>
                  <img src={require("./../../assets/developers-image.jpg")} height={100} />
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </CssBaseline>
      </main>
    );
  }
}

export default About;

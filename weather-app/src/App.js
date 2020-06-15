import "./App.css";
import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import LocationListContainer from "./containers/LocationListContainer";
import { Grid, Col, Row } from "react-flexbox-grid";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";

const cities = [
  "Leon,es",
  "Seattle,us",
  "Bogota,col",
  "Moscow,ru",
  "Madrid,es",
  "Asturias,es",
];

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h5" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities} />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                <ForecastExtendedContainer />
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

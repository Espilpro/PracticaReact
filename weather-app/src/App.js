import "./App.css";
import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import LocationList from "./components/locationList";
import { Grid, Col, Row } from "react-flexbox-grid";
import ForecastExtended from "./components/ForecastExtended";

const cities = [
  "Leon,es",
  "Seattle,us",
  "Bogota,col",
  "Moscow,ru",
  "Madrid,es",
  "Asturias,es",
];

class App extends Component {
  constructor() {
    super();
    this.state = { city: null };
  }

  handleSelectedLocation = (city) => {
    this.setState({ city: city });
    console.log(`handleSelectedLocation ${city}`);
  };

  render() {
    const { city } = this.state;
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
            <LocationList
              cities={cities}
              onSelectedLocation={this.handleSelectedLocation}
            />
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {city && <ForecastExtended city={city} />}
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;

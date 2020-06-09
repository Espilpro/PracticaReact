import "./App.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import LocationList from "./components/locationList";
import { Grid, Col, Row } from "react-flexbox-grid";

const cities = [
  "Leon,es",
  "Seattle,us",
  "Bogota,col",
  "Moscow,ru",
  "Madrid,es",
  "Asturias,es",
];

function App() {
  const handleSelectedLocation = (city) => {
    console.log(`handleSelectedLocation ${city}`);
  };
  return (
    <Grid className="App">
      <Row>
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Weather App
            </Typography>
          </Toolbar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList
            cities={cities}
            onSelectedLocation={handleSelectedLocation}
          />
        </Col>
        <Col xs={12} md={6}>
          <div className="details"></div>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;

import React, { Component } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import transformWeather from "../../services/transformWeather";
import { apiweather } from "../../services/api_url";
import Location from "./Location";
import WeatherData from "./WeatherData";
import "./styles.css";
import { SUNNY, WINDY } from "../../constants/weathers";

const data = {
  temperature: 5,
  weatherState: SUNNY,
  humidity: 10,
  wind: "10 m/s",
};

class WeatherLocation extends Component {
  constructor() {
    super();
    this.state = {
      city: "Leon",
      data: null,
    };
  }
  componentDidMount() {
    this.handleUpdateClick();
  }

  handleUpdateClick = () => {
    fetch(apiweather)
      .then((resolve) => {
        return resolve.json();
      })
      .then((data) => {
        const newWeather = transformWeather(data);
        console.log(newWeather);
        this.setState({
          data: newWeather,
        });
      });
  };
  render() {
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont">
        <Location city={city} />
        {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
      </div>
    );
  }
}

export default WeatherLocation;

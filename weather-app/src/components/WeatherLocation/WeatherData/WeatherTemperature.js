import React from "react";
import WeatherIcons from "react-weathericons";
import {
  CLOUD,
  CLOUDY,
  SUNNY,
  RAIN,
  SNOW,
  WINDY,
} from "../../../constants/weathers";
import PropTypes from "prop-types";
import "./styles.css";

const icons = {
  [CLOUD]: "cloud",
  [CLOUDY]: "cloudy",
  [SUNNY]: "day-sunny",
  [RAIN]: "rain",
  [SNOW]: "snow",
  [WINDY]: "windy",
};

const getWeatherIcon = (weatherState) => {
  const icon = icons[weatherState];

  const sizeIcon = "4x";

  if (icon) {
    return <WeatherIcons name={icon} size={sizeIcon} className="wicon" />;
  } else {
    return (
      <WeatherIcons name={"day-sunny"} size={sizeIcon} className="wicon" />
    );
  }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">{` Cº`}</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;

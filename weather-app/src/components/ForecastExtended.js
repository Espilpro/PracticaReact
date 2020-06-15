import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles.css";
import ForecastItem from "./ForecastItem";
import transformForecast from "../services/transformForecast";

export const api_key = "2d0a7b3440bb5eeac6da07b828d29d5a";
export const url_base_weather =
  "http://api.openweathermap.org/data/2.5/forecast";

const days = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];
class ForecastExtended extends Component {
  constructor() {
    super();
    this.state = {
      forecastData: null,
    };
  }
  updateCity = (city) => {
    const url_forecast = `${url_base_weather}?q=${city}&appid=${api_key}`;
    fetch(url_forecast)
      .then((data) => data.json())
      .then((weather_data) => {
        console.log(weather_data);
        const forecastData = transformForecast(weather_data);
        console.log(forecastData);
        this.setState({ forecastData });
      });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }
  componentDidMount() {
    this.updateCity(this.props.city);
  }
  renderProgress = () => {
    return "Cargando Pronostico....";
  };
  renderForecastItemDays(forecastData) {
    return forecastData.map((forecast) => (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}
      ></ForecastItem>
    ));
  }

  render() {
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecast-title">Pronostico Extendido para {city}</h2>
        {forecastData
          ? this.renderForecastItemDays(forecastData)
          : this.renderProgress()}
      </div>
    );
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
};

export default ForecastExtended;

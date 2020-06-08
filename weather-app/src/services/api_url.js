const location = "Leon,es";
const api_key = "2d0a7b3440bb5eeac6da07b828d29d5a";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

export const apiweather = `${url_base_weather}?q=${location}&appid=${api_key}`;

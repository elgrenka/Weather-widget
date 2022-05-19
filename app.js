//define the global variables
//current weather URL
const apiKey = "57aebe01c0e3359cbf54a91bdaee2135";
let currentUrl = "https://api.openweathermap.org/data/2.5/weather?";
let currentParams = "&units=metric&mode=JSON";
// forecast URL
let forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?";
let forecastParams = "&cnt=40&units=metric&mode=JSON";
// Image base URL
let imgUrl = "https://openweathermap.org/img/wn/";

/* Initial function call to determine the user location using GeoLocation API */
function getLocation() {
  if (navigator.geolocation) {
    let timeoutValue = 10 * 1000 * 1000;
    navigator.geolocation.getCurrentPosition(getCurrentWeatherData,
      displayError, {
      enableHighAccuracy: true,
      timeout: timeoutValue,
      maximumAge: 0
    });
  } else {
    alert("Geolocation is not supported by this browser");
  }
}

// get the Current Weather for User location
function getCurrentWeatherData(position) {
  // Build the OpenAPI URL for current Weather
  let weatherCurrentUrl = currentUrl + "lat=" + position.coords.latitude
    + "&lon=" + position.coords.longitude + "&appid=" + apiKey + currentParams;
  let weatherForecastUrl = forecastUrl + "lat=" + position.coords.latitude
    + "&lon=" + position.coords.longitude + "&appid=" + apiKey + forecastParams;

  // OpenWeather API call for Current Weather
  fetch(weatherCurrentUrl)
    .then(resp => resp.json())
    .then(function (dataCurrent) {
      getCurrent(dataCurrent);
      console.log(dataCurrent);
    });

  // OpenWeather API call for Forecast Weather
  fetch(weatherForecastUrl)
    .then(resp => resp.json())
    .then(function (dataForecast) {
      getForecast(dataForecast);
      console.log(dataForecast);
    });
}

// Error Handler
function displayError(error) {
  let errors = {
    1: 'Permission denied',
    2: 'Position unavailable',
    3: 'Request timeout'
  };
  alert("Error: " + errors[error.code]);
}

// display the current weather and location
function getCurrent(obj) {
  let sunrise = obj.sys.sunrise;
  let sunset = obj.sys.sunset;
  let sunrise2 = new Date(sunrise * 1000);
  let sunset2 = new Date(sunset * 1000);
  let sunrise3 = sunrise2.toLocaleTimeString();
  let sunset3 = sunset2.toLocaleTimeString();
  let temperature = Math.round(obj.main.temp);
  let date = new Date();
  let flag;

  if (obj.sys.country == "RU") {
    flag = '<img src="img/flags/ru.png">';
  } else if (obj.sys.country == "UA") {
    flag = '<img src="img/flags/ua.png">';
  } else {
    flag = '<img src="img/think.png" width="20%">';
  }

  // current Location
  document.getElementById("location").innerHTML = `Flag: ${flag} <br> Country: ${obj.sys.country} <br> City: ${obj.name} <br> Latitude: ${obj.coord.lat} <br> Longitude: ${obj.coord.lon} <br> Date: ${date.toLocaleDateString()} <br> Time: ${date.toLocaleTimeString()}`;

  // current weather
  document.getElementById("weatherNow").innerHTML = `<img src=${imgUrl}${obj.weather[0].icon}.png> <br> Condition: ${obj.weather[0].description} <br> Temperature: ${temperature} °C <br> Wind: ${obj.wind.speed} m/s <br> Cloudiness: ${obj.clouds.all}% <br> Pressure: ${obj.main.pressure} hPa <br> Humidity: ${obj.main.humidity}% <br> Sunrise: ${sunrise3} <br> Sunset: ${sunset3}`;
}

// display forecasts for next 5 Days
function getForecast(obj) {
  for (let i = 0; i < obj.list.length; i++) {
    let oneTimestamp = `Date: ${obj.list[i].dt_txt} <br> <img src=${imgUrl}${obj.list[i].weather[0].icon}.png> <br><br> Condition: ${obj.list[i].weather[0].description} <br> Temperature: ${Math.round(obj.list[i].main.temp)} °C <br> Wind: ${obj.list[i].wind.speed} m/s <br> Cloudiness: ${obj.list[i].clouds.all}% <br> Pressure: ${obj.list[i].main.pressure} hPa <br> Humidity: ${obj.list[i].main.humidity}% <hr> <br>`;

    forecast.insertAdjacentHTML("beforeend", oneTimestamp);
  }
}


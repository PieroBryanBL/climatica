const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const API_KEY = "8bdd928cf7d21d62a011c817ec9a8d82";
const searchPlace = document.getElementById("searchPlace");
const answerCountry = document.getElementById("country");
const answerCity = document.getElementById("city");
const answerDate = document.getElementById("date");
const answerWeather = document.getElementById("weather");
const answerFeelsLike = document.getElementById("feels_like");

const kelvintoCelsius = (kelvin) => {
  return (kelvin - 273.15).toFixed(2);
};

const timestampToDate = (timestamp) => {
  const fecha = new Date(timestamp);
  return fecha.toLocaleString();
};

const search = () => {
  const searchedPlace = encodeURIComponent(searchPlace.value);
  fetch(`${API_URL}?q=${searchedPlace}&appid=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      answerCountry.innerText = `${data.sys.country}`;
      answerCity.textContent = `${data.name}`;
      answerDate.textContent = timestampToDate(data.dt);

      const temperatureCelsius = kelvintoCelsius(data.main.temp);
      answerWeather.textContent = `${temperatureCelsius} °C`;

      const temperatureFeels_like = kelvintoCelsius(data.main.feels_like);
      answerFeelsLike.textContent = `${temperatureFeels_like} °C`;
    });
};

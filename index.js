const API_URL = "https://api.weatherapi.com/v1";
const API_KEY = "026926a12262483dbfb204157240701";
const searchPlace = document.getElementById("searchPlace");
const answerCountry = document.getElementById("country");
const answerCity = document.getElementById("city");
const answerRegion = document.getElementById("region");
const answerDate = document.getElementById("date");
const answerWeather = document.getElementById("weather");
const answerFeelsLike = document.getElementById("feels_like");

const search = () => {
  const searchedPlace = encodeURIComponent(searchPlace.value);
  fetch(`${API_URL}/current.json?key=${API_KEY}&q=${searchedPlace}`)
    .then((response) => response.json())
    .then((data) => {
      answerCountry.innerText = `${data.location.country}`;
      answerCity.textContent = `${data.location.name}`;
      answerRegion.textContent = `${data.location.region}`;
      answerDate.textContent = `${data.location.localtime}`;
      answerWeather.textContent = `${data.current.temp_c}`;
      answerFeelsLike.textContent = `${data.current.feelslike_c}`;
    });
};

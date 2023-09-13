function formatDate(timestamp) {
  let hours = timestamp.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = timestamp.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  let month = months[timestamp.getMonth()];

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "friday",
    "saturday"
  ];

  let day = days[timestamp.getDay()];

  let date = timestamp.getDate();

  return `${day} ${month} ${date} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

//search bar
function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchCity(city) {
  let apikey = "f3009e4852fa0a079dab291dabf020c4";
  let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
  axios.get(apiurl).then(showweather);
}

let searchform = document.querySelector("#search-form");
searchform.addEventListener("submit", search);

//searchEngine-change city & temp
function showweather(response) {
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let temp = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#temp");
  tempElement.innerHTML = temp;
}

// // convert fahrenheit

function convertTofahrenheit(event) {
  event.preventDefault();
  let temperatureelement = document.querySelector("#temp");
  temperatureelement.innerHTML = 68;
}
let fahrenheitlink = document.querySelector("#fahrenheit");
fahrenheitlink.addEventListener("click", convertTofahrenheit);

// // convertcelsius
function convertTocelsius(event) {
  event.preventDefault();
  let temperatureelement = document.querySelector("#temp");
  temperatureelement.innerHTML = 20;
}
let celsiuslink = document.querySelector("#celsius");
celsiuslink.addEventListener("click", convertTocelsius);

// function searchloation(position) {
//   let apikey = "e450bc345a80a08ada69fd5c714d871d";

//   let apiurl = axios.get(apiurl).then(showweather);
// }

// function currentlocation(event) {
//   event.preventDefault();
//   navigator.geolocation.getCurrentPosition(searchlocation);
// }

// let currentlocationButton = document.querySelector("#current-location-button");

const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

currentCity="Sibiu";

currentCityTag.innerHTML = currentCity;


displayCurrentWeather(currentCity);

displayWeatherForecast(currentCity);

const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

currentCity="Cluj";

currentCityTag.innerHTML = currentCity;


displayCurrentWeather(currentCity);

displayWeatherForecast(currentCity);

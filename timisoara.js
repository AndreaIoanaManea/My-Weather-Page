const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

currentCity="Timișoara";

currentCityTag.innerHTML = currentCity;


displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);

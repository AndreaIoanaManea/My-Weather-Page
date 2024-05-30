const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");



  
    currentCity="Sibiu";


//actualizam orasul afisat pe ecran
currentCityTag.innerHTML = currentCity;


displayCurrentWeather(currentCity);

displayWeatherForecast(currentCity);

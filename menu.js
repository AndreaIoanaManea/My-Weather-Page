document.addEventListener("DOMContentLoaded", function() {
    const currentWeatherTab = document.getElementById("current-weather-tab");
    const weatherForecastTab = document.getElementById("weather-forecast-tab");

    const currentWeatherSection = document.getElementById("section1");
    const weatherForecastSection = document.getElementById("section2");

    weatherForecastSection.classList.add("hidden");

    currentWeatherTab.addEventListener("click", function() {
        currentWeatherTab.classList.add("active");
        weatherForecastTab.classList.remove("active");
        
        currentWeatherSection.classList.remove("hidden");
        weatherForecastSection.classList.add("hidden");
    });

    weatherForecastTab.addEventListener("click", function() {
       
        currentWeatherTab.classList.remove("active");
        weatherForecastTab.classList.add("active");

        currentWeatherSection.classList.add("hidden");
        weatherForecastSection.classList.remove("hidden");
    });
});








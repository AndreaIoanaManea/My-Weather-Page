document.addEventListener("DOMContentLoaded", function() {
    // Obține elementele pentru taburile submeniului
    const currentWeatherTab = document.getElementById("current-weather-tab");
    const weatherForecastTab = document.getElementById("weather-forecast-tab");

    // Obține secțiunile corespunzătoare
    const currentWeatherSection = document.getElementById("section1");
    const weatherForecastSection = document.getElementById("section2");

    // Ascunde inițial secțiunea de prognoză pe 5 zile
    weatherForecastSection.classList.add("hidden");

    // Adaugă evenimente de click pe taburile submeniului
    currentWeatherTab.addEventListener("click", function() {
        // Activează tabul curent și dezactivează celălalt
        currentWeatherTab.classList.add("active");
        weatherForecastTab.classList.remove("active");

        // Afișează secțiunea de vreme curentă și ascunde secțiunea de prognoză pe 5 zile
        currentWeatherSection.classList.remove("hidden");
        weatherForecastSection.classList.add("hidden");
    });

    weatherForecastTab.addEventListener("click", function() {
        // Activează tabul de prognoză pe 5 zile și dezactivează celălalt
        currentWeatherTab.classList.remove("active");
        weatherForecastTab.classList.add("active");

        // Afișează secțiunea de prognoză pe 5 zile și ascunde secțiunea de vreme curentă
        currentWeatherSection.classList.add("hidden");
        weatherForecastSection.classList.remove("hidden");
    });
});








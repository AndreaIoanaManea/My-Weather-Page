const API_KEY="40bb9d1a4891c94f7ad629e9b6e5bc57 ";
function getCurrentWeatherEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;

}







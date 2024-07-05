function displayWeatherForecast(city){
const forecastEndpoint = getForecastEndpoint(city);

let weatherForecastContainer = document.querySelector(".weather-forecast");
weatherForecastContainer.innerHTML = '';

fetch(forecastEndpoint)
.then((response) => response.json())
.then((data) => {


const {list} = data;
const daysMap = {};

list.forEach((element) => {

const {dt} = element;
const day = getDayOfTheWeek(dt);

if(daysMap[day]){
daysMap[day].push(element);
}
else {
    daysMap[day] = [element];
}
});

for(key in daysMap){
  
 weatherForecastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`
 
 let days = daysMap[key];
 days.forEach((element) => {
 
    const { dt, main, weather} = element;
    const hour = getHour(dt);
    const temperature = Math.round(main.temp);
    const realFeel = Math.round(main.feels_like);
    const weatherDescription = weather[0].description;  
    const weatherIcon = getWeatherIcon(weather[0].icon);


weatherForecastContainer.innerHTML += `
    <div class="col-12 col-md-6 weather-forecast-box d-flex flex-column justify-content-between align-items-center border rounded p-3 mb-3 shadow-sm" style="background-color: #ffffff; color: #333; font-family: Arial, sans-serif; border-color: #ced4da;">
        <div style="font-weight: bold; font-size: 18px; margin-bottom: 10px;">${hour}</div>
        <img src="${weatherIcon}" alt="Weather Icon" style="width: 70px; height: 70px; border-radius: 50%; margin-bottom: 10px;">
        <div class="fs-1" style="font-size: 24px; margin-bottom: 10px;"><strong>${temperature} °C </strong></div>
        <div style="margin-bottom: 10px;">${weatherDescription}</div>
        <div class="real-feel" style="color: #666; font-size: 14px;"> Real feel: <strong>${realFeel}°C </strong></div>
    </div>
`;


 });

}

});
}

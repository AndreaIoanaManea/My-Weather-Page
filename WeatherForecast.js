//declarea functiei pt afisarea predictiei prognozei pe 5 zile. Apelul se face in alte fisiere.

function displayWeatherForecast(city){
//generam link-ul serverului, pe baza orasului
const forecastEndpoint = getForecastEndpoint(city);


//inainte sa facem cererea catre server si sa afisam noile informatii, le stergem de pe ecran pe cele vechi
let weatherForecastContainer = document.querySelector(".weather-forecast");
weatherForecastContainer.innerHTML = '';

fetch(forecastEndpoint)
.then((response) => response.json())
.then((data) => {
//din datele venite, pe noi ne intereseaza doar list care e un array

const {list} = data;

//avem nevoie de un obiect in care sa grupam predictiile pe zile

const daysMap = {};
//iteram prin cele 40 de predictii primite de la server


list.forEach((element) => {
//extragem data predictiei

const {dt} = element;
//getDayOfTheWeek este creata de noi in utils/date

const day = getDayOfTheWeek(dt);
//daca deja avem ziua sapt in obiect, ii adaugam o noua predictie

if(daysMap[day]){
daysMap[day].push(element);
//altfel adaugam ziua sapt in obiect, alaturi de o noua predictie
}
else {
    daysMap[day] = [element];
}
});

//parcurgem cu for...in continutul obiectului daysMap. Cheile sunt zilele sapt pt care avem predictii

for(key in daysMap){
    //afisam ziua sapt pe ecran
 weatherForecastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`
 
 //pt fiecare zi a sapt extragem predictiile asociate si iteram prin ele

 let days = daysMap[key];
 days.forEach((element) => {
    //pt fiecare element (predictie) extragem datele de interes
    const { dt, main, weather} = element;
    //getHour este create de noi in utils/date
    const hour = getHour(dt);
    //rotunjim temperaturile
    const temperature = Math.round(main.temp);
    const realFeel = Math.round(main.feels_like);
    //atentie ! weather este un array cu un sg element 
    const weatherDescription = weather[0].description;
    //getWeatherIcon este creata de noi in util/weather
    const weatherIcon = getWeatherIcon(weather[0].icon);

    // afisam pe ecran informatiile extrase din API


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
const bucharest = document.querySelector(".dropdown-menu .bucharest");

const timisoara = document.querySelector(".dropdown-menu .timisoara");

const oradea = document.querySelector(".dropdown-menu .oradea");

const cluj = document.querySelector(".dropdown-menu .cluj");

const arad = document.querySelector(".dropdown-menu .arad");

const sibiu = document.querySelector(".dropdown-menu .sibiu");

const hunedoara = document.querySelector(".dropdown-menu .hunedoara");


function updateCurrentCity(city){
        const currentCity = document.querySelector(".current-city");
        currentCity.innerHTML = city;
    }

function updateWeather(city)
    {
        localStorage.setItem("city", city);
        
        updateCurrentCity(city);
        displayCurrentWeather(city);
        displayWeatherForecast(city);
        
    }
 
    bucharest.addEventListener("click", function(){
        updateWeather("București");
    });

    timisoara.addEventListener("click", function(){
        updateWeather("Timișoara");
    });

    oradea.addEventListener("click", function(){
        updateWeather("Oradea");
    });

    cluj.addEventListener("click", function(){
        updateWeather("Cluj");
    });

    arad.addEventListener("click", function(){
        updateWeather("Arad");
    });


    sibiu.addEventListener("click", function(){
        updateWeather("Sibiu");
    });

    hunedoara.addEventListener("click", function(){
        updateWeather("Hunedoara");
    });

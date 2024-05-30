const bucharest = document.querySelector(".dropdown-menu .bucharest");

const timisoara = document.querySelector(".dropdown-menu .timisoara");

const oradea = document.querySelector(".dropdown-menu .oradea");

const cluj = document.querySelector(".dropdown-menu .cluj");

const arad = document.querySelector(".dropdown-menu .arad");

const sibiu = document.querySelector(".dropdown-menu .sibiu");

const hunedoara = document.querySelector(".dropdown-menu .hunedoara");


function updateCurrentCity(city){
    //selectam spatiu pe ecran dedicat afisarii orasului curent si ii adaugam continut
    
        const currentCity = document.querySelector(".current-city");
        currentCity.innerHTML = city;
    }

   


function updateWeather(city)
    {
        //actualizam orasul din localStorage
        localStorage.setItem("city", city);
        //actualizam orasul afisat pe ecran
        updateCurrentCity(city);
        //reafisam vremea curenta, pt noul oras
        displayCurrentWeather(city);
        displayWeatherForecast(city);
        
    }

  

    //adaugam event listenerii pe butoanele din dropdown
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
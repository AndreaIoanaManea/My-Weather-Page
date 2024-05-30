// API keyurile nu ar trebui stocate in format text, nu este sigur.
//dar fara un server nu avem cum sa fim 100% safe, api ul fiind gratuit in cel mai rau caz se poate bloca temporar aplicatia.

const API_KEY="40bb9d1a4891c94f7ad629e9b6e5bc57 ";

//construim link-urile(endpointurile) serverele de la care vom primi date.
function getCurrentWeatherEndpoint(city){
    //intotdeauna cand folosim un API, putem obtine informatii extra prin wuery params.
    //lang=ro =>Rezultatele vin in romana.
    //unitest=metric => Unitatea de masura va fi grade calsius.
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;

}







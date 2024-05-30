function getDayOfTheWeek(utc){
    //pt a crea o data, pornind de la o valoare unix utc, este nevoie sa inmultim cu 1000 mai inati

    const date =  new Date(utc * 1000);
    //extragem ziua saptamanii sub forma de index
    const dayIndex = date.getDay();
    let day;

    switch (dayIndex){
        case 0:
            day = "Duminică";
        break;

        case 1:
            day = "Luni";
        break;

        case 2:
            day = "Marți";
        break;

        case 3:
            day = "Miercuri";
        break;

        case 4:
            day = "Joi";
        break;

        case 5:
            day = "Vineri";
        break;

        case 6:
            day = "Sâmbătă";
        break;
        default:
            //aruncam o eroare daca index-ul nu este valid ( nu ar trebui sa se ajunga vreodata aici)
            throw new Error("Indexul trebuie sa fie intre 0 si 6")
    }

    //returnam ziua echivalenta indexului

    return day;
}



function getHour(utc){
    //pt a crea o data, pornind de la o valoare unix utc, este nevoie sa o inmultim cu 1000 mai intai
    const date = new Date(utc * 1000);
    //extragem ora, daca ora are o favoare mai mica de 10, ii adaugam un 0

    let hours = date.getHours();
    if (hours < 10){
        hours= "0" + hours;

    }
    let minutes = date.getMinutes();

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    //returnam ora, sub formatul dorit
    return `${hours}:${minutes}`;
}
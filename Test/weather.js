$(document).ready(function() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.2852&longitude=-1.52&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,wind_speed_10m&forecast_days=1')
    .then(response => {
        if(!response.ok){
            throw new error('Bad API response');
        }
        return response.json();
    })
    .then(Data =>{
        console.log(Data);
        let lat = Data.latitude.toString();
        let long = Data.longitude.toString();
        let temperature_2m = Data.hourly.temperature_2m;
        let currentTemp = temperature_2m[0];
        let rain = Data.hourly.rain;
        let currentRain = rain[1];
        let humidity = Data.hourly.relative_humidity_2m;
        let currentHumidity = humidity[0];
        let wind = Data.hourly.wind_speed_10m;
        let currentWind = wind[0];


        $('#left').append(`<p1 id=#latLong>${lat} : ${long}</p1>`);

        //let humid = Data

    })
    .catch(error => {
        console.error('Error: ', error);
    });
    

});
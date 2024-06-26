$(document).ready(function() {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,rain,weather_code,wind_speed_10m')
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


        $('#topleft').append(`<p1 id="latLong">${lat} : ${long}</p1>`);
        $('#weather').append(`<h1 id="temp">Temperature: ${currentTemp}°C</h1>`);
        $('#weather').append(`<p1 id="humidity">Humidity: ${currentHumidity}%</p1>`);
        $('#weather').append(`
            <p1 id="wind">Wind-Speed: ${currentWind} km/h 
            <span id="rain">Precipitation: ${currentRain} </span></p1>`);


        //let humid = Data

    })
    .catch(error => {
        console.error('Error: ', error);
    });
    

});
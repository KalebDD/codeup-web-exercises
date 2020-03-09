$(document).ready(function () {

    //Access MapBox
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9'
    });

    //Access DarkSky
    $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233").done(function (data) {
        // console.log(new Date(data.currently.time * 1000));
        console.log(data);
        $('.current-weather').html(currentWeather(data));
        $('.expected-weather').html(expectedWeather(data));

    });

    //Current weather card render
    function currentWeather(input) {
        var temp = input.currently.temperature;
        var icon = input.currently.icon;
        var weather = input.currently.summary;
        var humidity = input.currently.humidity;
        var wind = input.currently.windGust;
        var pressure = input.currently.pressure;

        var html = '<div class="card text-center"> <div class="card-body">';
        html += '<h5 class="card-title">' + temp + '&#730</h5>';
        html += '<p class="card-text">' + weather + '</p>';
        html += '<p class="card-text"><img src="icon/DarkSky-icons/PNG/' + icon + '.png"></p>';
        html += '<p class="card-text"><b>Humidity:</b> ' + humidity + '</p>';
        html += '<p class="card-text"><b>Wind:</b> ' + wind + '</p>';
        html += '<p class="card-text"><b>Pressure:</b> ' + pressure + '</p>';
        html += '</div> </div>';
        return html;
    }

    //Card for expected weather
    function expectedWeather(input) {
        var html = '<div class="card"> <div class=card-body>';
        html += '<h2 class="card-text">' + input.daily.data[i].summary + '</h2>';
        html += '<h3>' + input.daily.data[i].humidity + '</h3>';
        html += '<h3 class="card-text">' + input.daily.data[i].windGust + '</h3>';
        html += '<h3 class="card-text">' + input.daily.data[i].pressure + '</h3>';
        html += '</div> </div>';
        return html;
    }
})
;

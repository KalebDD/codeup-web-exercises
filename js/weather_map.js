$(document).ready(function () {

    //MapBox Access
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        center: [-98, 29],
        zoom: 5,
        style: 'mapbox://styles/mapbox/streets-v9'
    });

    var marker = new mapboxgl.Marker();
    marker.setLngLat([-98, 29]);
    marker.addTo(map);
    marker.setDraggable(true);

    //DarkSky Access
    $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/37.8267,-122.4233").done(function (data) {
        // console.log(new Date(data.currently.time * 1000));
        console.log(data);
        $('.current-weather').html(currentWeather(data));
        $('.expected-weather').html(weatherCards(data));

    });

    //Current weather render
    function currentWeather(input) {
        var weatherText = input.currently;

        var html = '<div class="card text-center"> <div class="card-body">';
        html += '<h5 class="card-title">' + weatherText.temp + '&#730</h5>';
        html += '<p class="card-text">' + weatherText.weather + '</p>';
        html += '<p class="card-text"><img src="icon/DarkSky-icons/PNG/' + weatherText.icon + '.png"></p>';
        html += '<p class="card-text"><b>Humidity:</b> ' + weatherText.humidity + '</p>';
        html += '<p class="card-text"><b>Wind:</b> ' + weatherText.wind + '</p>';
        html += '<p class="card-text"><b>Pressure:</b> ' + weatherText.pressure + '</p>';
        html += '</div> </div>';
        return html;
    }

    //Expected weather render
    function expectedWeather(input) {
            var html = '<div class="card"> <div class=card-body>';
            html += '<h2 class="card-text">' + input.summary + '</h2>';
            html += '<h3>' + input.humidity + '</h3>';
            html += '<h3 class="card-text">' + input.windGust + '</h3>';
            html += '<h3 class="card-text">' + input.pressure + '</h3>';
            html += '</div> </div>';
            return html;
    }
    function weatherCards(input) {
        var html = '';
        for (var i = 0; i < 3; i++) {
            html += expectedWeather(input.daily.data[i]);
        }
        return html;
    }
});

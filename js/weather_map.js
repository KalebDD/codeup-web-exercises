$(document).ready(function () {

    //Mapbox Access
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        center: [-98, 29],
        zoom: 3,
        style: 'mapbox://styles/mapbox/streets-v9'
    });

    //Mapbox Marker
    var marker = new mapboxgl.Marker();
    marker.setLngLat([-98.4936, 29.4241]);
    marker.addTo(map);
    marker.setDraggable(true);
    marker.on('dragend', renderEverything);

    //Mapbox Geocoder
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxToken,
            mapboxgl: mapboxgl,
            marker: false
        }).on("result", function (e) {
            console.log(e);
            var latLngObj = {};
            latLngObj.lng = e.result.geometry.coordinates[0];
            latLngObj.lat = e.result.geometry.coordinates[1];
            marker.setLngLat(latLngObj);
            renderEverything();
        })
    );

    //Toggle forecast # of days
    var numberOfDays = 3;
    $('.threeDays').click(function () {numberOfDays = 3; renderEverything()});
    $('.sevenDays').click(function () {numberOfDays = 7; renderEverything()});

    //Main function
    function renderEverything() {
        //DarkSky Access
        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + marker.getLngLat().lat + "," + marker.getLngLat().lng).done(function (data) {
            // console.log(new Date(data.currently.time * 1000));
            console.log(data);
            reverseGeocode({lat: marker.getLngLat().lat, lng: marker.getLngLat().lng}, mapboxToken).then(function(location) {
                $('.current-weather').html(currentWeather(data, location));
                $('.expected-weather').html(expectedWeather(data));
            })
        });
    }

    //Current weather render
    function currentWeather(input, location) {
        var weatherText = input.currently;

        var html = '<div class="card text-center"> <div class="card-body">';
        html += '<h3 class=card-title ">' + location + '</h3>';
        html += '<h5 class="card-title">' + weatherText.temperature + '&#730</h5>';
        html += '<p class="card-text">' + weatherText.summary + '</p>';
        html += '<p class="card-text"><img src="icon/DarkSky-icons/PNG/' + weatherText.icon + '.png"></p>';
        html += '<p class="card-text"><b>Humidity:</b> ' + weatherText.humidity + '</p>';
        html += '<p class="card-text"><b>Wind:</b> ' + weatherText.windGust + '</p>';
        html += '<p class="card-text"><b>Pressure:</b> ' + weatherText.pressure + '</p>';
        html += '</div> </div>';
        return html;
    }

    //Expected weather render
    function expectedWeather(input) {
        var html = '';
        for (var i = 0; i < numberOfDays; i++) {
            html += weatherCards(input.daily.data[i]);
        }
        return html;
    }
    function weatherCards(input) {
        var html = '<div class="card"> <div class=card-body>';
        html += '<h2 class="card-text">' + input.summary + '</h2>';
        html += '<h3>' + input.humidity + '</h3>';
        html += '<h3 class="card-text">' + input.windGust + '</h3>';
        html += '<h3 class="card-text">' + input.pressure + '</h3>';
        html += '</div> </div>';
        return html;
    }
    renderEverything();
});

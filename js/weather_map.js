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

    //Toggle # of days forecast
    var numberOfDays = 3;
    $('.threeDays').click(function () {
        numberOfDays = 3;
        renderEverything()
    });
    $('.sevenDays').click(function () {
        numberOfDays = 7;
        renderEverything()
    });

    //Main function
    function renderEverything() {
        //DarkSky Access
        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + marker.getLngLat().lat + "," + marker.getLngLat().lng).done(function (data) {
            // console.log(new Date(data.currently.time * 1000));
            console.log(data);
            reverseGeocode({
                lat: marker.getLngLat().lat,
                lng: marker.getLngLat().lng
            }, mapboxToken).then(function (location) {
                $('.current-weather').html(currentWeather(data, location));
                $('.expected-weather').html(expectedWeather(data));
            })
        });
    }

    //Current weather render
    function currentWeather(weatherData, location) {
        var weatherText = weatherData.currently;

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
//     function expectedWeather(input) {
//         var html = '';
//         for (var i = 0; i < numberOfDays; i++) {
//             html += weatherCards(input.daily.data[i]);
//         }
//         return html;
//     }
//     function weatherCards(input) {
//         var html = '<div class="card"> <div class=card-body>';
//         html += '<h4 class="card-title d-flex justify-content-between"><span>' + input.temperatureLow + '&#730</span><span>' + input.temperatureHigh + '&#730</span></h4>';
//         html += '<h3 class="card-text">' + input.summary + '</h3>';
//         html += '<h3><b>Humidity:</b> ' + input.humidity + '</h3>';
//         html += '<h3 class="card-text"><b>Wind:</b> ' + input.windGust + '</h3>';
//         html += '<h3 class="card-text"><b>Pressure:</b> ' + input.pressure + '</h3>';
//         html += '</div> </div>';
//         return html;
//     }
//     renderEverything();
// });


    function expectedWeather(weatherData) {
        var html = '';
        var weather = weatherData.daily.data;

        for (var i = 0; i < numberOfDays; i++) {
            console.log(weather);
            html += '<div class="card"> <div class=card-body>';
            html += '<h4 class="card-title d-flex justify-content-between"><span>' + weather[i].temperatureLow + '&#730</span><span>' + weather[i].temperatureHigh + '&#730</span></h4>';
            html += '<h3 class="card-text">' + weather[i].summary + '</h3>';
            html += '<h3><b>Humidity:</b> ' + weather[i].humidity + '</h3>';
            html += '<h3 class="card-text"><b>Wind:</b> ' + weather[i].windGust + '</h3>';
            html += '<h3 class="card-text"><b>Pressure:</b> ' + weather[i].pressure + '</h3>';
            html += '</div> </div>';
        }
        return html;
    }



    renderEverything();
});




function reverseGeocode(coordinates, token) {
    var baseUrl = 'https://api.mapbox.com';
    var endPoint = '/geocoding/v5/mapbox.places/';
    return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
        .then(function(res) {
            return res.json();
        })
        // to get all the data from the request, comment out the following three lines...
        .then(function(data) {
            return data.features[2].place_name;
        });
}
"use strict";
mapboxgl.accessToken = mapboxToken;


var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center: [-98.4916, 29.4712]
});

// var markerOptions = {
// }

var favoriteRestaurantsInformation = [
    {
        Restaurant: "Texas de Brazil",
        Location: "313 E Houston St, San Antonio, TX 78205",
        phoneNumber: "(210) 299-1600",
    },
    {
        Restaurant: "MOD Pizza",
        Location: "1435 N Loop 1604 E, San Antonio, TX 78258",
        phoneNumber: "(210) 610-8850"
    },
    {
        Restaurant: "Raising Canes",
        Location: "10938 Culebra Rd, San Antonio, TX 78253",
        phoneNumber: "(210) 688-9814"
    }
];

var deBrazil = new mapboxgl.Marker()
    .setLngLat([-98.489085, 29.426627])
    .addTo(map);

var modPizza = new mapboxgl.Marker()
    .setLngLat([-98.51157, 29.62989])
    .addTo(map);

var raisingCanes = new mapboxgl.Marker()
    .setLngLat([-98.709435, 29.49535])
    .addTo(map);


favoriteRestaurantsInformation.forEach(function(restaurant){
        var Popup = new mapboxgl.Popup()
            .setHTML(restaurant)
            .addTo(map);

    if (geocode(restaurant.Location, mapboxToken) == deBrazil.setLngLat) {
         deBrazil.setPopup(Popup).togglePopup();
    } else if (geocode(restaurant.Location, mapboxToken) == modPizza.setLngLat) {
        modPizza.setPopup(Popup).togglePopup();
    } else if (geocode(restaurant.Location, mapboxToken) == raisingCanes.setLngLat) {
        raisingCanes.setPopup(Popup).togglePopup();
    }
});

// var deBrazilPopup = new mapboxgl
//     .Popup()
//     .setHTML("<h2>Texas de Brazil</h2>")
//     .addTo(map);
//
// deBrazil.setPopup(deBrazilPopup).togglePopup();

var modPizzaPopup = new mapboxgl
    .Popup()
    .setHTML("<h2>MOD Pizza</h2>")
    .addTo(map);

modPizza.setPopup(modPizzaPopup).togglePopup();

var raisingCanesPopup = new mapboxgl
    .Popup()
    .setHTML("<h2>Raising Canes</h2>")
    .addTo(map);

raisingCanes.setPopup(raisingCanesPopup).togglePopup();

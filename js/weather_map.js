$(document).ready(function() {

//Get access to DarkSky
var darkSky = $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ darkSkyKey +"/37.8267,-122.4233").done(function (data) {
    console.log(data);
    console.log(new Date(data.currently.time * 1000));
})



});

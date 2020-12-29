//Global variables
let urlgeocoding;
var marker;
let userLat, userLon;

$("form").on("submit", function(e) {
    //Grabing user input of destination
    e.preventDefault();
    const city = $("#city-text").val();
    const state = $("#state-text").val();
    console.log(`${city} and ${state}`);

    //Show weatherat destination
    $(document).ready(function() {
        urlgeocoding = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}+${state}&key=AIzaSyBzVaVj8l-aJXLt6HOA_Ks7LAB6X9ONJyE`;
        $.ajax({
            url: urlgeocoding,
            method: "GET",
        }).then(function(response) {
            userLat = response.results[0].geometry.location.lat;
            userLon = response.results[0].geometry.location.lng;
            getWeatherByLatLng(userLat, userLon);
        });
    });
});


// weather call by lat and lng
function getWeatherByLatLng(latitude, longitude) {
    let urlqueryLatLng = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=849afef2e7c9aca1f133d01fb20ebbd5`;
    $.ajax({
        url: urlqueryLatLng,
        method: "GET",
    }).then(function(response) {
        $(".temp").text("Current Weather: " + response.weather[0].description);
        $(".desc").text("Temperature: " + Math.floor(response.main.temp));
        $(".wind").text(
            "Curret Windspeed: " + Math.floor(response.wind.speed) + "mph"
        );
        $(".location").text("Location: " + Math.floor(response.location));
        var iconCode1 = response.weather[0].icon;
        $(".icon").attr("src", function() {
            if (iconCode1 == "01d") {
                // full sun
                $(".icon").addClass("fas fa-sun");
            } else if (iconCode1 == "01n") {
                // full moon
                $(".icon").addClass("fas fa-moon");
            } else if (iconCode1 == "02d") {
                // overcast day
                $(".icon").addClass("fas fa-cloud-sun");
            } else if (iconCode1 == "02n") {
                // overcast night
                $(".icon").addClass("fas fa-cloud-moon");
            } else if ((iconCode1 == "03d", "04d", "03n", "04n")) {
                // full clouds
                $(".icon").addClass("fas fa-cloud");
            } else if ((iconCode1 == "09d", "10d")) {
                // light rain day
                $(".icon").addClass("fas fa-cloud-sun-rain");
            } else if ((iconCode1 == "09n", "10n")) {
                // light rain night
                $(".icon").addClass("fas fa-cloud-moon-rain");
            } else if ((iconCode1 == "11d", "11n")) {
                // storming rain
                $(".icon").addClass("fas fa-poo-storm");
            } else if ((iconCode1 == "50d", "50n")) {
                // foggy
                $(".icon").addClass("fas fa-smog");
            }
        });
    });
}

function getWeatherByDestination(city, state) {
    let urlqueryDestination = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=849afef2e7c9aca1f133d01fb20ebbd5`;
    $.ajax({
        url: urlqueryDestination,
        method: "GET",
    }).then(function(response) {
        $(".temp").text("Current Weather: " + response.weather[0].description);
        $(".desc").text("Temperature: " + response.main.temp);
        $(".wind").text("Curret Windspeed: " + response.wind.speed);
        $(".location").text("Location: " + Math.floor(response.location));
        var iconCode1 = response.weather[0].icon;
        $(".icon").attr("src", function() {
            if (iconCode1 == "01d") {
                // full sun
                $(".icon").addClass("fas fa-sun");
            } else if (iconCode1 == "01n") {
                // full moon
                $(".icon").addClass("fas fa-moon");
            } else if (iconCode1 == "02d") {
                // overcast day
                $(".icon").addClass("fas fa-cloud-sun");
            } else if (iconCode1 == "02n") {
                // overcast night
                $(".icon").addClass("fas fa-cloud-moon");
            } else if ((iconCode1 == "03d", "04d", "03n", "04n")) {
                // full clouds
                $(".icon").addClass("fas fa-cloud");
            } else if ((iconCode1 == "09d", "10d")) {
                // light rain day
                $(".icon").addClass("fas fa-cloud-sun-rain");
            } else if ((iconCode1 == "09n", "10n")) {
                // light rain night
                $(".icon").addClass("fas fa-cloud-moon-rain");
            } else if ((iconCode1 == "11d", "11n")) {
                // storming rain
                $(".icon").addClass("fas fa-poo-storm");
            } else if ((iconCode1 == "50d", "50n")) {
                // foggy
                $(".icon").addClass("fas fa-smog");
            }
        });
    });
}
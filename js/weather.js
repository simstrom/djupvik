import { fetchTemp } from "./fetchWeather.js"

const WEATHER_BOX = document.querySelector(".weather");

window.addEventListener("load", onLoad);

function onLoad(event) {
    fetchTemp().then(printTemp);
}

function printTemp(temp) {
    let weatherDisplay = document.createElement('p');
    console.dir(document.location)
    if (document.location.pathname === "/html/english.html") {
        weatherDisplay.innerHTML = `Djupvik Right Now: <span>${temp}°C</span>`
    } else {
        weatherDisplay.innerHTML = `Djupvik Just Nu: <span>${temp}°C</span>`
    }
    WEATHER_BOX.append(weatherDisplay)
}
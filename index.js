document.onreadystatechange = updateClock()

function updateClock() {
    const date = new Date()
    document.getElementById("current-time-text").innerText =
        date.toLocaleTimeString([], { hour12: false }) + " - " + date.toDateString()
    const hour = date.getHours()
}

setInterval(updateClock, 1000)

function doSearch() {
    const query = document.getElementById('search-input').value
    window.location.href = `https://www.duckduckgo.com/?q=${query}`
}

function invert() {
    if (document.getElementById('main-container').style.filter === "invert(1)") {
        document.getElementById('main-container').style.filter = "invert(0)"
    }
    else {
        document.getElementById('main-container').style.filter = "invert(1)"
    }
}

const searchInput = document.getElementById("search-input")
searchInput.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("search-button").click();
    }
})

function getWeatherData(city) {
    fetch("https://wttr.in/" + city + "?format=j1")
    .then(response => response.json())
    .then(json => {
        document.getElementById("weather-description").innerHTML = json.current_condition[0].weatherDesc[0].value;
        document.getElementById("weather-temperature").innerHTML = json.current_condition[0].temp_C;
        document.getElementById("weather-feel").innerHTML = json.current_condition[0].FeelsLikeC;
        document.getElementById("moon-phase").innerHTML = json.weather[0].astronomy[0].moon_phase;
    })

    fetch("https://wttr.in/" + city + "?format=%m")
    .then(response => response.text())
    .then(text => {
        document.getElementById("moon-phase-logo").innerHTML = text;
    })
}

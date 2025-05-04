document.onreadystatechange = updateClock();

function updateClock() {
  const date = new Date();
  document.getElementById("current-time-text").innerText =
    date.toLocaleTimeString([], { hour12: false }) +
    " - " +
    date.toDateString();
  const hour = date.getHours();
}

setInterval(updateClock, 1000);

function doSearch() {
  const query = document.getElementById("search-input").value;
  window.location.href = `https://www.duckduckgo.com/?q=${query}`;
}

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("keypress", function onEvent(event) {
  if (event.key === "Enter") {
    document.getElementById("search-button").click();
  }
});

function getWeatherData(city) {
  fetch("https://wttr.in/" + city + "?format=%C+%c+%t")
    .then((response) => response.text())
    .then((data) => (document.getElementById("weatherData").innerHTML = data));
}

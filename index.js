document.onreadystatechange = updateClock()

function updateClock() {
    const date = new Date()
    document.getElementById("current-time-text").innerText =
        date.toLocaleTimeString("tr-TR", { day: 'numeric', month: 'numeric', year: 'numeric', hour12: false }).split(" - ")
    const hour = date.getHours()
    if (hour < 5 || hour >= 18) {
        document.getElementById("time-greeting").innerText = "Good evening."
    }
    else if (hour < 12) {
        document.getElementById("time-greeting").innerText = "Good morning."
    }
    else {
        document.getElementById("time-greeting").innerText = "Good afternoon."
    }
}

setInterval(updateClock, 1000)

function doSearch() {
    const query = document.getElementById('search-input').value
    window.location.href = `https://www.duckduckgo.com/?q=${query}`
}

const searchInput = document.getElementById("search-input")
searchInput.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        document.getElementById("search-button").click();
    }
})

const API_KEY = "1ad0391a81d6cb7751331e8a509b2ecd";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:last-child");

            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${Math.round(
                data.main.temp
            )}℃`;
        });
}
function onGeoError(event) {
    alert(event.message);
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

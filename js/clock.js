const calendar = document.querySelector("#calendar");
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const day = date.getDay();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    calendar.innerText = `${month} ${day}, ${year}`;
    clock.innerText = `${hours}:${minutes}:${seconds}`;
    // clock.innerText = new Date().toLocaleTimeString();
}

getClock();
setInterval(getClock, 1000);

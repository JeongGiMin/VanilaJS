const API_KEY = "276494af7f9611e1caeb9ef5b68553a4";

function sucWeather(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:nth-child(2)");
      const temp = document.querySelector("#weather span:nth-child(3)");
      const humi = document.querySelector("#weather span:last-child");
      city.innerHTML = data.name;
      weather.innerHTML = data.weather[0].main;
      temp.innerHTML = Math.floor(data.main.temp);
      humi.innerHTML = data.main.humidity;
    });
}

function errWeather() {
  alert("Can't find you. Plz allow the browser to locate your position");
}

navigator.geolocation.getCurrentPosition(sucWeather, errWeather);

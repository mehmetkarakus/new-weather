document.addEventListener("DOMContentLoaded", () => {

    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    const searchInput = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather__icon");
    const background  = document.createElement("body");

    async function checkWeather(city) {

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data)

        document.querySelector(".city").innerHTML = data.city.name;
        document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " km/h";

        if (data.list[0].weather[0].main == "Clouds") {
            background.url = "./img/cluods-backgorund.jpg"
            weatherIcon.src = "./img/clouds.png"
        }
        else if (data.list[0].weather[0].main == "Clear") {
            background.url = "./img/clear-backgorund.jpg"
            weatherIcon.src = "./img/clear.png"
        }
        else if (data.list[0].weather[0].main == "Drizzle") {
            background.url = "./img/drizzle.jpg"
            weatherIcon.src = "./img/dizzle.png"
        }
        else if (data.list[0].weather[0].main == "Rain") {
            background.url = "./img/rain-backgorund.jpg"
            weatherIcon.src = "./img/rain.png"
        }
        else if (data.list[0].weather[0].main == "Snow") {
            background.url = "./img/snow-backgorund.jpg"
            weatherIcon.src = "./img/snow.png"
        }

    }

    searchInput.addEventListener("keyup", (e) => {
        if(e.keyCode === 13){
            checkWeather(searchInput.value);
        }
    });

    searchBtn.addEventListener("click", () => {
        checkWeather(searchInput.value);
    });

});


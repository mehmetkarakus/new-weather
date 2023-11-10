document.addEventListener("DOMContentLoaded", () => {

    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    const searchInput = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather__icon");
    const backgroundElement  = document.getElementById("background");

    async function checkWeather(city) {

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        console.log(data)

        document.querySelector(".city").innerHTML = data.city.name;
        document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " km/h";

        if (data.list[0].weather[0].main == "Clouds") {
            backgroundElement.style.backgroundImage = 'url(img/clouds-background.jpg)'
            weatherIcon.src = "./img/clouds.png"
        }
        else if (data.list[0].weather[0].main == "Clear") {
            backgroundElement.style.backgroundImage = 'url(img/clear-background.jpg)'
            weatherIcon.src = "./img/clear.png"
        }
        else if (data.list[0].weather[0].main == "Drizzle") {
            backgroundElement.style.backgroundImage = 'url(img/drizzle-background.jpg)'
            weatherIcon.src = "./img/dizzle.png"
        }
        else if (data.list[0].weather[0].main == "Rain") {
            backgroundElement.style.backgroundImage = 'url(img/rain-background.jpg)'
            weatherIcon.src = "./img/rain.png"
        }
        else if (data.list[0].weather[0].main == "Snow") {
            backgroundElement.style.backgroundImage = 'url(img/snow-background.jpg)'
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


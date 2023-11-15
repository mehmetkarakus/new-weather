document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const cardCityContainer = document.getElementById("card__city");
    const dailyWeatherContainer = document.getElementById("daily__weather");
    const backgroundElements = document.getElementById("background");

    async function dataSwitch(city) {
        try {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const data = await response.json();

            let dailyData = {};

            data.list.forEach(dateArr => {
                const date = new Date(dateArr.dt * 1000);
                const day = date.toLocaleString("tr-TR", { weekday: "long" });

                if (!dailyData[day]) {
                    dailyData[day] = [];
                }

                dailyData[day].push({
                    time: dateArr.dt_txt.split(" ")[1],
                    weather: dateArr.weather[0],
                    temp: dateArr.main.temp,
                    humidity: dateArr.main.humidity,
                    wind: dateArr.wind.speed
                });
            });

            createCityCard(dailyData[Object.keys(dailyData)[0]], city);

            for (const day in dailyData) {
                if (day !== Object.keys(dailyData)[0]) {
                    createDailyCard(day, dailyData[day]);
                    console.log(day, dailyData[day]);
                }
            }

            if (data.list[0].weather[0].main == "Clouds") {
                backgroundElements.style.backgroundImage = 'url(img/clouds-background.jpg)'
            }
            else if (data.list[0].weather[0].main == "Rain") {
                backgroundElements.style.backgroundImage = 'url(img/rain-background.jpg)'
            }
            else if (data.list[0].weather[0].main == "Clear") {
                backgroundElements.style.backgroundImage = 'url(img/clear-background.jpg)'
            }
            else if (data.list[0].weather[0].main == "Drizzle") {
                backgroundElements.style.backgroundImage = 'url(img/drizzle-background.jpg)'
            }
            else if (data.list[0].weather[0].main == "Snow") {
                backgroundElements.style.backgroundImage = 'url(img/snow-background.jpg)'
            }

            console.log(dailyData)

        } catch (error) {
            console.error("Error fetching weather data:", error.message);
        }

        function createCityCard(dayData, cityName) {
            cardCityContainer.innerHTML = "";

            const weatherData = dayData[0].weather;
            const temp = Math.round(dayData[0].temp);
            const humidity = dayData[0].humidity;
            const wind = dayData[0].wind;

            const humidityIcon = document.createElement("img");
            humidityIcon.src = "img/humidity.png";

            const windIcon = document.createElement("img");
            windIcon.src = "img/wind.png";

            const card = document.createElement("div");
            card.classList.add("weatherCity");

            const weather = document.createElement("div");
            weather.classList.add("weather");

            const icon = document.createElement("div");
            icon.classList.add("icon");
            const iconImage = document.createElement("img");
            iconImage.src = `img/${weatherData.main}.png`;
            icon.appendChild(iconImage);

            const detailsCity = document.createElement("div");
            detailsCity.classList.add("details__city");

            const tempHeading = document.createElement("h1");
            tempHeading.classList.add("temp");
            tempHeading.textContent = `${temp} °C`;

            const cityHeading = document.createElement("h2");
            cityHeading.classList.add("city");
            cityHeading.textContent = cityName;

            const detailsDaily = document.createElement("div");
            detailsDaily.classList.add("details__information");

            const humidityHeading = document.createElement("p");
            humidityHeading.classList.add("humidity");
            humidityHeading.appendChild(humidityIcon);
            humidityHeading.innerHTML = `<img src="img/humidity.png">${humidity} km/h`;

            const windHeading = document.createElement("p");
            windHeading.classList.add("wind");
            windHeading.appendChild(windIcon);
            windHeading.innerHTML = `<img src="img/wind.png">${wind} km/h`;

            weather.appendChild(icon);
            weather.appendChild(detailsCity);
            detailsCity.appendChild(tempHeading);
            detailsCity.appendChild(cityHeading);
            detailsDaily.appendChild(humidityHeading);
            detailsDaily.appendChild(windHeading);

            card.appendChild(weather);
            card.appendChild(detailsDaily);
            cardCityContainer.appendChild(card);
        }

        function createDailyCard(day, dayData) {

            console.log(day, dayData, 'bunlar');

            createDailyCard.innerHTML = "";

            const dailyWeather = document.getElementById("daily__weather")

            const card = document.createElement("div");
            card.classList.add("card");

            const cardDay = day;
            const cardTemp = Math.round(dayData[0].temp);
            const cardWeather = dayData[0].weather.main;


            card.innerHTML = `
                    <h3>${cardDay}</h3>
                    <img class="card__icon" src="img/${cardWeather}.png" alt="Hava Durumu iconu">
                    <h5>${cardTemp} °C</h5>
                `;

            dailyWeather.appendChild(card)

        }



        const searchCity = (cityName) => {

        }

    }



    searchBtn.addEventListener("click", () => {
        const searchInputValue = searchInput.value;
        if (searchInputValue.trim() == "") {
            dataSwitch(searchInputValue);
            searchInput.value = "";
            dailyWeatherContainer.innerHTML = ""
        }
    });

    searchInput.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
            dataSwitch(searchInput.value);
            searchInput.value = "";
            dailyWeatherContainer.innerHTML = ""

        }
    });

    dataSwitch("İzmir")
})

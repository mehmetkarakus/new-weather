document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const cardCityContainer = document.getElementById("card__city");
    const dailyWeatherContainer = document.getElementById("daily__weather");

    searchInput.value = "İstanbul";
    async function dataSwitch(city) {
        try {
            const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
            if (!response.ok) {
                throw new Error(`Weather data request failed with status ${response.status}`);
            }

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
                }
            }
            
        } catch (error) {
            console.error("Error fetching weather data:", error.message);
        }
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
        const dailyWeatherContainer = document.getElementById("daily__weather");
    
        const card = document.createElement("div");
        card.classList.add("card");
    
        if (!dayData || dayData.length === 0) {
            console.error(`Hava durumu verileri eksik for ${day}.`);
            return;
        }
    
        const dateHeading = document.createElement("h3");
        dateHeading.textContent = day;
    
        const weatherIcon = document.createElement("img");
        const weatherMain = dayData[0].weather.main.toLowerCase();
        weatherIcon.src = `img/${weatherMain}.png`;
        weatherIcon.classList.add("card__icon");
    
        const temperature = document.createElement("h5");
        temperature.textContent = `${Math.round(dayData[0].temp)} °C`;
    
        card.appendChild(dateHeading);
        card.appendChild(weatherIcon);
        card.appendChild(temperature);
    
        dailyWeatherContainer.appendChild(card);
    
        card.addEventListener("click", () => {
            console.log(`Tıklanan gün: ${day}`);
        });
    }
    

    searchBtn.addEventListener("click", () => {
        const searchInputValue = searchInput.value;
        if (searchInputValue.trim() !== "") {
            dataSwitch(searchInputValue);
        }
    });

});

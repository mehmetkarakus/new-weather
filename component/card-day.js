document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    async function dataSwitch(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json();

        let dailyData = {};

        data.list.forEach(dateArr => {
            const date = new Date(dateArr.dt * 1000);
            const day = date.toLocaleString({ weekday: "long" });

            if (!dailyData[day]) {
                dailyData[day] = [];
            }

            dailyData[day].push({
                time: dateArr.dt_txt.split(" ")[1],
                weather: dateArr.weather[0],
                temp: dateArr.main.temp
            });
        });

        // Bu kısmı ekleyin
        const weatherCity = document.getElementById("card__city");

        // Şu anki günün verilerini yerleştirin
        const cardTodayData = dailyData[Object.keys(dailyData)[0]][0];
        const cardWeatherIcon = cardCity.querySelector(".weather__icon");
        const cardTemp = cardCity.querySelector(".temp");
        const cardCity = cardCity.querySelector(".city");

        cardWeatherIcon.src = `img/${cardTodayData.weather.main}.png`; // İkonu güncelle
        cardTemp.textContent = `${cardTodayData.temp} °C`; // Sıcaklığı güncelle
        cardCity.textContent = data.city.name; // Şehir ismini güncelle

        // Diğer günlerin verilerini yerleştirin
        const detailsInformation = cardCity.querySelector(".details__information");
        Object.keys(dailyData).forEach(day => {
            const dayData = dailyData[day][0];
            const col = document.createElement("div");
            col.classList.add("col");

            col.innerHTML = `
                <img src="img/${dayData.weather.main}.png">
                <div>
                    <p class="humidity">${dayData.temp}%</p>
                    <p>${day}</p>
                </div>
            `;

            detailsInformation.appendChild(col);
        });
    }

    dataSwitch();
});

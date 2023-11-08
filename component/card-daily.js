document.addEventListener("DOMContentLoaded", () => {

    const cardDay = document.getElementById("daily__weather");
    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const cardList = [];

    cardList.forEach(city => {
        const apiUrl = `api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const card = document.createElement("div");
                card.classList.add("card");

                const dailyDay = data.list.name;
                const cardTemp = Math.round(data.list[0].main.temp);
                const cardWeather = data.list[0].weather[0].main;

                let weatherIconSrc = "";

                if (cardWeather === "Clouds") {
                    weatherIconSrc = "./img/clouds.png";
                }
                else if (cardWeather === "Rain") {
                    weatherIconSrc = "./img/rain.png";
                }
                else if (cardWeather === "Drizzle") {
                    weatherIconSrc = "./img/drizzle.png";
                }
                else if (cardWeather === "Clear") {
                    weatherIconSrc = "./img/clear.png";
                }
                else {
                    weatherIconSrc = "./img/snow.png";
                }

                card.innerHTML = `
                <h3 class="daily__day">${dailyDay}</h3>
                <img class="card__icon" src="${weatherIconSrc}" alt="Hava Durumu iconu">
                <h5>${cardTemp} °C</h5>
            `;

                cardDay.appendChild(card);
            })
            .catch(error => console.error(error));
    });

});
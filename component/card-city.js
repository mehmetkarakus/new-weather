document.addEventListener("DOMContentLoaded", () => {

    const cardDay = document.querySelector(".card__day");
    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const cardTitle = ["Berlin", "London", "New York", "Tokyo"];

    cardTitle.forEach(city => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const card = document.createElement("div");
                card.classList.add("card");

                const cardCity = data.name;
                const cardTemp = data.main.temp;
                const cardWeather = data.weather[0].main;

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
                <h2>${cardCity}</h2>
                <img src="${weatherIconSrc}" alt="Hava Durumu İkonu">
                <p>Sıcaklık: ${cardTemp} °C</p>
            `;

                cardDay.appendChild(card);
            })
            .catch(error => console.error(error));
    });

});
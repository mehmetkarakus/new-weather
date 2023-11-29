document.addEventListener("DOMContentLoaded", () => {

    const cardDay = document.getElementById("capital__daily--weather");
    const apiKey = "3e754eda3de0afa016899c9106005d58";
    const capitalsWeather = ["Berlin", "London", "New York", "Tokyo", "Rome"];

    capitalsWeather.forEach(city => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const capital = document.createElement("div");
                capital.classList.add("card");

                const capitalName = data.name;
                const capitalIcon = data.weather[0].main;
                const capitalTemp =Math.round(data.main.temp);

                let capitalWeatherIcon = "";

                if (capitalIcon === "Clouds") {
                    capitalWeatherIcon = "./img/clouds.png";
                }
                else if (capitalIcon === "Rain") {
                    capitalWeatherIcon = "./img/rain.png";
                }
                else if (capitalIcon === "Drizzle") {
                    capitalWeatherIcon = "./img/drizzle.png";
                }
                else if (capitalIcon === "Clear") {
                    capitalWeatherIcon = "./img/clear.png";
                }
                else {
                    capitalWeatherIcon = "./img/snow.png";
                }

                capital.innerHTML = `
                <h3>${capitalName}</h3>
                <img class="card__icon" src="${capitalWeatherIcon}" alt="Hava Durumu iconu">
                <h5>${capitalTemp} °C</h5>
            `;

                cardDay.appendChild(capital);
            })
            .catch(error => console.error(error));
    });

});

// document.addEventListener("DOMContentLoaded", () => {

//     const apiKey = "3e754eda3de0afa016899c9106005d58";
//     const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

//     const searchInput = document.getElementById("searchInput");
//     const searchBtn = document.getElementById("searchBtn");
//     const cardCityContainer = document.getElementById("card__city");
//     const dailyWeatherContainer = document.getElementById("daily__weather");

//     async function dataSwitch(city) {
//         try {
//             const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
//             if (!response.ok) {
//                 throw new Error(`Weather data request failed with status ${response.status}`);
//             }

//             const data = await response.json();

//             let dailyData = {};

//             data.list.forEach(dateArr => {
//                 const date = new Date(dateArr.dt * 1000);
//                 const day = date.toLocaleString("tr-TR", { weekday: "long" });

//                 if (!dailyData[day]) {
//                     dailyData[day] = [];
//                 }

//                 dailyData[day].push({
//                     time: dateArr.dt_txt.split(" ")[1],
//                     weather: dateArr.weather[0],
//                     temp: dateArr.main.temp,
//                     humidity: dateArr.main.humidity,
//                     wind: dateArr.wind.speed
//                 });
//             });

//             createCityCard(dailyData[Object.keys(dailyData)[0]], city);

//             for (const day in dailyData) {
//                 if (day !== Object.keys(dailyData)[0]) {
//                     createDailyCard(day, dailyData[day]);
//                 }
//             }

//             console.log(dailyData)
            
//         } catch (error) {
//             console.error("Error fetching weather data:", error.message);
//         }
        
//     }

//     function createCityCard(dayData) {
//         cardCityContainer.innerHTML = "";

//         document.querySelector(".city").innerHTML = data.city.name;
//         document.querySelector(".temp").innerHTML =  Math.round(dayData[0].temp) + " °C";
//         document.querySelector(".humidity").innerHTML = dayData[0].humidity + " %";
//         document.querySelector(".wind").innerHTML = dayData[0].wind + " km/h";

//         if (dayData[0].weather.main == "Clouds") {
//             backgroundElement.style.backgroundImage = 'url(img/clouds-background.jpg)'
//             weatherIcon.src = "./img/clouds.png"
//         }
//         else if (dayData[0].weather.main == "Clear") {
//             backgroundElement.style.backgroundImage = 'url(img/clear-background.jpg)'
//             weatherIcon.src = "./img/clear.png"
//         }
//         else if (dayData[0].weather.main == "Drizzle") {
//             backgroundElement.style.backgroundImage = 'url(img/drizzle-background.jpg)'
//             weatherIcon.src = "./img/dizzle.png"
//         }
//         else if (dayData[0].weather.main == "Rain") {
//             backgroundElement.style.backgroundImage = 'url(img/rain-background.jpg)'
//             weatherIcon.src = "./img/rain.png"
//         }
//         else if (dayData[0].weather.main == "Snow") {
//             backgroundElement.style.backgroundImage = 'url(img/snow-background.jpg)'
//             weatherIcon.src = "./img/snow.png"
//         }
//     }

//     function createDailyCard(day, dayData) {
//         const dailyWeatherContainer = document.getElementById("daily__weather");
    
//         const card = document.createElement("div");
//         card.classList.add("card");
    
//         if (!dayData || dayData.length === 0) {
//             console.error(`Hava durumu verileri eksik for ${day}.`);
//             return;
//         }
    
//         const dateHeading = document.createElement("h3");
//         dateHeading.textContent = day;
    
//         const weatherIcon = document.createElement("img");
//         const weatherMain = dayData[0].weather.main.toLowerCase();
//         weatherIcon.src = `img/${weatherMain}.png`;
//         weatherIcon.classList.add("card__icon");
    
//         const temperature = document.createElement("h5");
//         temperature.textContent = `${Math.round(dayData[0].temp)} °C`;
    
//         card.appendChild(dateHeading);
//         card.appendChild(weatherIcon);
//         card.appendChild(temperature);
    
//         dailyWeatherContainer.appendChild(card);
    
//         card.addEventListener("click", () => {
//             console.log(`Tıklanan gün: ${day}`);
//         });
//     }

//     searchBtn.addEventListener("click", () => {
//         const searchInputValue = searchInput.value;
//         if (searchInputValue.trim() !== "") {
//             dataSwitch(searchInputValue);
//         }
//     });

//     dataSwitch("Manisa")

// })
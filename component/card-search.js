document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "3e754eda3de0afa016899c9106005d58";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const cityDailyWeather = document.getElementById("cityWeather");
  const fiveDailyWeather = document.getElementById("daily__weather");
  const dailyWeatherBackground = document.getElementById("background");
  const searchNotFound = document.getElementById("searchNot");
  const jsonArray = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Burdur",
    "Bolu",
    "Bitlis",
    "Bingöl",
    "Bilecik",
    "Balıkesir",
    "Aydın",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Elazığ",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırklareli",
    "Kırşehir",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Şanlıurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt",
    "Karaman",
    "Kırıkkale",
    "Batman",
    "Şırnak",
    "Bartın",
    "Ardahan",
    "Iğdır",
    "Yalova",
    "Karabük",
    "Kilis",
    "Osmaniye",
    "Düzce",
  ];

  async function fetchData(city) {
    try {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  }

  const weatherBackground = (weather) => {
    const backgrounds = {
      Clouds: "url(img/clouds-background.jpg)",
      Rain: "url(img/rain-background.jpg)",
      Clear: "url(img/clear-background.jpg)",
      Drizzle: "url(img/drizzle-background.jpg)",
      Snow: "url(img/snow-background.jpg)",
    };

    dailyWeatherBackground.style.backgroundImage =
      backgrounds[weather] || "url(img/default-background.jpg)";
  };

  function cityCard(dayData, cityName) {
    cityDailyWeather.innerHTML = "";

    const weatherData = dayData[0].weather;
    const temp = Math.round(dayData[0].temp);
    const humidity = dayData[0].humidity;
    const wind = dayData[0].wind;

    const weatherCard = document.createElement("div");
    weatherCard.classList.add("city__daily--weather");

    const dailyWeather = document.createElement("div");
    dailyWeather.classList.add("city__day--weather");

    const icon = document.createElement("div");
    icon.classList.add("icon");

    const iconImage = document.createElement("img");
    iconImage.src = `img/${weatherData.main}.png`;
    icon.appendChild(iconImage);

    const cityWeatherDetails = document.createElement("div");
    cityWeatherDetails.classList.add("daily__weather--details");

    const cityTemp = document.createElement("h1");
    cityTemp.classList.add("city__temp");
    cityTemp.textContent = `${temp} °C`;

    const cityNameWeather = document.createElement("h2");
    cityNameWeather.classList.add("city__name");
    cityNameWeather.textContent = cityName;

    const humidityIcon = document.createElement("img");
    humidityIcon.src = "img/humidity.png";

    const windIcon = document.createElement("img");
    windIcon.src = "img/wind.png";

    const dailyDetails = document.createElement("div");
    dailyDetails.classList.add("weather__details--information");

    const cityHumidity = document.createElement("p");
    cityHumidity.classList.add("city__humidity");
    cityHumidity.appendChild(humidityIcon);
    cityHumidity.innerHTML = `<img src="img/humidity.png">${humidity} km/h`;

    const cityWind = document.createElement("p");
    cityWind.classList.add("city__wind");
    cityWind.appendChild(windIcon);
    cityWind.innerHTML = `<img src="img/wind.png">${wind} km/h`;

    dailyWeather.appendChild(icon);
    dailyWeather.appendChild(cityWeatherDetails);

    cityWeatherDetails.appendChild(cityTemp);
    cityWeatherDetails.appendChild(cityNameWeather);

    dailyDetails.appendChild(cityHumidity);

    dailyDetails.appendChild(cityWind);

    weatherCard.appendChild(dailyWeather);
    weatherCard.appendChild(dailyDetails);
    cityDailyWeather.appendChild(weatherCard);
  }

  function dailyCard(day, dayData) {
    dailyCard.innerHTML = "";

    const dayWeather = document.getElementById("daily__weather");

    const cityWeatherCard = document.createElement("div");
    cityWeatherCard.classList.add("card");

    const cityCardName = day;
    const cityCardWeather = dayData[0].weather.main;
    const cityCardTemp = Math.round(dayData[0].temp);

    cityWeatherCard.innerHTML = `
                <h3>${cityCardName}</h3>
                <img class="card__icon" src="img/${cityCardWeather}.png" alt="Hava Durumu iconu">
                <h5>${cityCardTemp} °C</h5>
            `;

    dayWeather.appendChild(cityWeatherCard);
  }

  async function dataSwitch(city) {
    const data = await fetchData(city);

    if (!data) {
      return;
    }

    let dailyData = {};

    data.list.forEach((dateArr) => {
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
        wind: dateArr.wind.speed,
      });
    });

    cityCard(dailyData[Object.keys(dailyData)[0]], city);

    for (const day in dailyData) {
      if (day !== Object.keys(dailyData)[0]) {
        dailyCard(day, dailyData[day]);
      }
    }

    weatherBackground(data.list[0].weather[0].main);
    console.log(dailyData);
  }

  searchButton.addEventListener("click", () => {
    const searchInputValue = searchInput.value.trim();
    if (searchInputValue) {
      dataSwitch(searchInputValue);
      searchInput.value = "";
      fiveDailyWeather.innerHTML = "";
    }
  });

  searchInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      const searchInputValue = searchInput.value.trim();
      dataSwitch(searchInputValue);
      searchInput.value = "";
      fiveDailyWeather.innerHTML = "";
    }
  });

  dataSwitch("İzmir");
});

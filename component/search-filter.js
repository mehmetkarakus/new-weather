document.addEventListener("DOMContentLoaded", () => {

    function handleSearch(event) {
        if (event.key === 'Enter') {
            searchWeather();
        }
    }
    
    function searchWeather() {
        const cityName = document.querySelector('.search input').value;
    
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${cityName}&appid=3e754eda3de0afa016899c9106005d58`;
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Hava durumu verileri alınamadı:', error);
            });
    }
    
    function displayWeather(weatherData) {
    
        var forecastList = weatherData.list;
    
        var weatherList = document.getElementById('weather-list');
    
        weatherList.innerHTML = '';
    
        var cityName = weatherData.city.name;
        var cityHeader = document.createElement('h2');
        cityHeader.textContent = `Hava Durumu - ${cityName}`;
        weatherList.appendChild(cityHeader);
    
        forecastList.forEach(forecast => {
            var date = new Date(forecast.dt * 1000); 
            var dateString = date.toLocaleDateString();
    
            var weatherItem = document.createElement('div');
            weatherItem.classList.add('weather-item');
    
            weatherItem.innerHTML = `<strong>${dateString}</strong>: ${forecast.main.temp} °C`;
    
            weatherList.appendChild(weatherItem);
        });
    }

})
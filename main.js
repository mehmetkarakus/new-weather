import './style.css'
import './component/card-search.js'
import './component/card-capital.js'
import './component/search-filter.js'

document.querySelector('#app').innerHTML = `

  <section class="search">
  
    <div class="searchInput">
      <input type="text" id="searchInput" placeholder="Şehir İsmi Giriniz">

      <button id="searchBtn">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    
    <ul id="searchResults" class="searchUl">

    </ul>
  </section>

  <div id="resultContainer"></div>

  <section id="card__container" class="card__capital">
    
  </section>

  <section id="card__city" class="card__city">
    <div class="weatherCity">
      <div class="weather">
        <div class="icon">
          <img src="" class="weather__icon" id="cityWeatherIcon">
        </div>
        <div class="details__city">
          <h1 class="temp" id="cityTemp"></h1>
          <h2 class="city" id="cityName"></h2>
        </div>
      </div>

      <div class="details">
        <div class="details__information">
          <div class="col">
            <img src="img/humidity.png">
            <div>
              <p class="humidity" id="cityHumidity"></p>
              <p>Nem</p>
            </div>
          </div>
          <div class="col">
            <img src="img/wind.png">
            <div>
              <p class="wind" id="cityWind"></p>
              <p>Rüzgar Hızı</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="daily__weather" class="daily__weather">

  </section>

`


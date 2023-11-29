import "./style.css";
import "./component/card-search.js";
import "./component/card-capital.js";
import "./component/search-filter.js";

document.querySelector("#app").innerHTML = `

  <section class="search">
  
    <div class="searchInput">
      <input type="text" id="searchInput" placeholder="Şehir İsmi Giriniz">
      <button id="searchButton">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>

    <div class="search__list">
      <ul id="searchResults" class="search__ul">
      
      </ul>
    </div>

    <div class="search__not" d-flex justify-content:flex-end>
      <p class="not__found">Aradığın Şehir Bulunamadı</p>
    </div>

  </section>

  <section id="capital__daily--weather" class="card__capital">
    
  </section>

  <section id="card__city" class="card__city">
    <div class="city__daily--weather">
      <div class="city__day--weather">
        <div class="icon">
          <img src="" class="weather__icon" id="cityWeatherIcon">
        </div>
        <div class="city__weather--details">
          <h1 class="city__temp" id="cityTemp"></h1>
          <h2 class="city__name" id="cityName"></h2>
        </div>
      </div>

      <div class="details">
        <div class="weather__details--information">
          <div class="col">
            <img src="img/humidity.png">
            <div>
              <p class="city__humidity" id="cityHumidity"></p>
              <p>Nem</p>
            </div>
          </div>
          <div class="col">
            <img src="img/wind.png">
            <div>
              <p class="city__wind" id="cityWind"></p>
              <p>Rüzgar Hızı</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="daily__weather" class="daily__weather">

  </section>

`;

import './style.css'
import './component/card-search.js'
import './component/card-capital.js'
import './component/search-filter.js'

document.querySelector('#app').innerHTML = `

      <section class="search">
        <input type="text" placeholder="Şehir İsmi Giriniz">
        <button>
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </section>

      <div id="weather-list">

      </div>

      <section id="card__container" class="card__capital">

      </section>

      <section id="card__city" class="card__city">

        <div class="weather">

          <div class="icon">
            <img src="img/rain.png" class="weather__icon">
          </div>

          <div class="details__city">
            <h1 class="temp">22 °C</h1>
            <h2 class="city">Manisa</h2>
          </div>

        </div>

        <div class="details">

          <div class="details__information">
            <div class="col">
              <img src="img/humidity.png">
                <div>
                  <p class="humidity">50%</p>
                  <p>Humidity</p>
                </div>
              </div>

              <div class="col">
                <img src="img/wind.png">
                <div>
                  <p class="wind">2 km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

      </section>

      <section id="daily__weather" class="daily__weather">
      

      </section>

`
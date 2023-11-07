import './style.css'
import './component/card-search.js'
import './component/card-city.js'


document.querySelector('#app').innerHTML = `

    <section class="search">
      <input type="text" placeholder="Şehir İsmi Giriniz">
      <button>
        <img src="img/search.png">
      </button>
    </section>

    <section class="weadther__day">

      <div id="card__day">
        <div class="card__title">
          <h3 class="card__city">Berlin</h3>
        </div>

        <div class="day__weather">
          <div class="day__icon">
                <img src="img/clouds.png" class="card__icon">
          </div>
        </div>

        <div class="details">
          <div class="day__details">
                <h3 class="card__temp">17 °C</h3>
          </div>
        </div>
      </div>
      
    </section>

    <section class="card">

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

    <section class="weadther__day">

      <div class="card__day">
        
        <div class="card__title">
          <h4>Wed</h4>
        </div>
      
        <div class="day__weather">
          <div class="day__icon">
            <img src="img/clouds.png">          
          </div>
        </div>

        <div class="details">

          <div class="day__details">
            <h3 class="card__temp">17 °C</h3>
          </div>

        </div>
      </div>

      <div class="card__day">
        
        <div class="card__title">
          <h4>Thu</h4>
        </div>
      
        <div class="day__weather">
          <div class="day__icon">
            <img src="img/drizzle.png">          
          </div>
        </div>

        <div class="details">

          <div class="day__details">
            <h3 class="card__temp">17 °C</h3>
          </div>

        </div>
      </div>

      <div class="card__day">
        
        <div class="card__title">
          <h4>Fri</h4>
        </div>
      
        <div class="day__weather">
          <div class="day__icon">
            <img src="img/snow.png">          
          </div>
        </div>

        <div class="details">

          <div class="day__details">
            <h3 class="card__temp">17 °C</h3>
          </div>

        </div>
      </div>

      <div class="card__day">
        
        <div class="card__title">
          <h4>Sat</h4>
        </div>
      
        <div class="day__weather">
          <div class="day__icon">
            <img src="img/rain.png">          
          </div>
        </div>

        <div class="details">

          <div class="day__details">
            <h3 class="card__temp">17 °C</h3>
          </div>

        </div>
      </div>

    </section>
`
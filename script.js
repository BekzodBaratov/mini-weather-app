"use Strict";

const body = document.querySelector(".body");
const countriesContainer = document.querySelector(".countries");
const inpCountry1 = document.querySelector(".inpCountry1");
const btn = document.querySelector(".btn");

/////////////////////////////////////////////////////////
function renderHTML(val) {
  let html = `<article class="country">
  <img class="country__img" src="${val.current.condition.icon}" />
  <div class="country__data">
    <h3 class="country__name">Region: ${val.location.region}</h3>
    <p class="day country__row">Country:  ${val.location.country}</p>
    <p class="day country__row">Real Time:  ${val.location.localtime}</p>
    <p class="maxTempC country__row">Temperatura: ${val.current.temp_c} C'</p>
    <p class="maxWind country__row">Wind: ${val.current.wind_kph} m/s</p>
  </div>
</article>`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = "1";
}

function getCountry(val) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=44d37f22c06d4dbba27165419220204&q=${val}&aqi=no`
  )
    .then((response) => response.json())
    .then((res) => {
      let data = res;
      renderHTML(data);
      console.log(data);
    });
}

///////////////////////////////////////////////////
btn.addEventListener("click", () => {
  getCountry(inpCountry1.value);
  inpCountry1.value = "";
});

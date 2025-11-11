const apiKey = "7a956fa249de7c4633a84a4eeccac274";

const latitude = 9.056466505452864;

const longitude = 7.496044961023618;

// const ENDPOINT = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&`;

const ENDPOINT = "http://127.0.0.1:5500/chamber/data/weather.json";
// const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&`;

const formatDateString = function (date) {
  const dateString = date;
  return dateString;
};

const fetchWeatherData = async () => {
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();

    const dailyDataMap = new Map();

    data["list"].forEach((item) => {
      const date = item.dt_txt.split(" ")[0];
      if (!dailyDataMap.has(date)) {
        dailyDataMap.set(date, item);
      }
    });

    const uniqueWeatherData = Array.from(dailyDataMap.values());

    return uniqueWeatherData;
  } catch (error) {
    console.log(`Error fetching weather data: ${error}`);
  }
};

const populateWeatherCards = (weatherData) => {
  const cards = document.querySelectorAll(".weather__card");

  cards.forEach((card, index) => {
    if (!weatherData[index]) return;

    const item = weatherData[index];

    const dayEl = card.querySelector(".weather__day");
    const dateEl = card.querySelector(".weather__date");
    const tempEl = card.querySelector("#tempDeg");
    const maxTempEl = card.querySelector("#weatherHigh");
    const minTempEl = card.querySelector("#weatherLow");
    const conditionEl = card.querySelector("#weatherCondition");
    const conditionImg = card.querySelector("#weatherImg");
    const feelEl = card.querySelector("#weatherFeels");

    const date = new Date(item.dt_txt);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const formattedDate = date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    dayEl.textContent = day;
    dateEl.textContent = formattedDate;
    tempEl.textContent = `${item.main.temp}°C`;
    maxTempEl.textContent = `${item.main.temp_max}°C`;
    minTempEl.textContent = `${item.main.temp_min}°C`;
    feelEl.textContent = `Feels like ${item.main.feels_like}°C`;
    conditionEl.textContent = item.weather[0].main;
    conditionImg.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${item.weather[0].icon}.png`
    );
  });
};

(async () => {
  const weatherData = await fetchWeatherData();
  populateWeatherCards(weatherData);
})();

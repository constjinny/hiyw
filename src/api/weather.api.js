import axios from "axios";
const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "efdcb2cc938e78a038fe2ac8a3877eb9";
const ICON_URL = "http://openweathermap.org/img/wn/";

const checkWeatherId = (getId) => {
  if (200 <= getId <= 299) {
    // 뇌우
    return "thunderstorm";
  } else if (300 <= getId <= 399 || 500 <= getId <= 599) {
    // 비
    return "rain";
  } else if (600 <= getId <= 699) {
    // 눈
    return "snow";
  } else if (700 <= getId <= 799) {
    // 안개
    return "mist";
  } else if (801 <= getId <= 899) {
    // 구름
    return "clouds";
  } else {
    // else if (getId === 800) {
    // 맑음
    return "clear";
  }
};

export const getWeather = async (city) => {
  const getData = await axios
    .get(`${API_URL}${city}&appid=${API_KEY}`)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log("error : ", error);
    });

  if (getData) {
    const resultData = {
      id: checkWeatherId(getData.weather[0].id),
      icon: `${ICON_URL}${getData.weather[0].icon}.png`,
    };
    return resultData;
  }
};

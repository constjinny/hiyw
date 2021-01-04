import axios from "axios";
const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "efdcb2cc938e78a038fe2ac8a3877eb9";
const ICON_URL = "http://openweathermap.org/img/wn/";

// wheather list :
// clear sky = 맑음 = 약간의 구름
// few clouds = 약간의 구름
// scattered clouds = 흩어져있는 구름
// broken clouds = 부서진 구름
// shower rain = 약간의 비
// rain = 비
// thunderstorm = 뇌우
// snow = 눈
// mist = 안개

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
    const getId = getData.weather[0].id;
    if (200 <= getId <= 299) {
      // 뇌우
      return {
        id: "thunderstorm",
        icon: "11",
      };
    } else if (300 <= getId <= 399 || 500 <= getId <= 599) {
      // 비
      return {
        id: "rain",
        icon: "10",
      };
    } else if (600 <= getId <= 699) {
      // 눈
      return {
        id: "snow",
        icon: "13",
      };
    } else if (700 <= getId <= 799) {
      // 안개
      return {
        id: "mist",
        icon: "50",
      };
    } else if (getId === 800) {
      // 맑음
      return {
        id: "clear",
        icon: "01",
      };
    } else if (801 <= getId <= 899) {
      // 구름
      return {
        id: "clouds",
        icon: "02",
      };
    }
  }
};

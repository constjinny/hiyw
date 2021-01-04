import * as React from "react";
import { Route } from "react-router-dom";
import styled from "@emotion/styled";
import { Header, Footer, Home, Feed, My, Login } from "../pages";

import { getWeather } from "../api/weather.api";
import { NOTE_THEME } from "../type/themeType";

const createNoteColor = (weatherValue) => {
  const color = NOTE_THEME.filter((data) => data.name === weatherValue);
  return color.length ? color[0] : NOTE_THEME[0];
};

function Routes() {
  const [weatherValue, setWeatherValue] = React.useState("");
  const [weatherIcon, setWeatherIcon] = React.useState("");
  const [weatherBgColor, setWeatherBgColor] = React.useState("");

  const weather = async () => {
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

    const getData = await getWeather("seoul");

    setWeatherValue(getData.value);
    setWeatherIcon(getData.icon);
  };

  React.useEffect(() => {
    if (weatherValue) {
      const noteColor = createNoteColor(weatherValue);
      setWeatherBgColor(noteColor.mainColor);
    }
  }, [weatherValue]);

  React.useEffect(() => {
    weather();
  }, []);

  return (
    <AppLayout bgColor={weatherBgColor}>
      <Header />
      <AppInnerLayout>
        <div>
          {weatherValue}
          <img src={weatherIcon} alt={weatherValue} />
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/feed" component={Feed} />
        <Route path="/my" component={My} />
        <Route path="/login" component={Login} />
      </AppInnerLayout>
      <Footer />
    </AppLayout>
  );
}

export default Routes;

const AppLayout = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 50px 0;
  box-sizing: border-box;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

const AppInnerLayout = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

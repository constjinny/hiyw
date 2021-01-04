import * as React from "react";
import { Route } from "react-router-dom";
import styled from "@emotion/styled";
import { Header, Footer, Home, Feed, My, Login } from "../pages";

import { getWeather } from "../api/weather.api";
import { NOTE_THEME } from "../type/themeType";

const createNoteColor = (weatherValue) => {
  const color = NOTE_THEME.filter((data) => data.id === weatherValue);
  return color.length ? color[0] : NOTE_THEME[0];
};

function Routes() {
  const [weatherValue, setWeatherValue] = React.useState("");
  const [weatherIcon, setWeatherIcon] = React.useState("");
  const [weatherColor, setWeatherColor] = React.useState("");

  const weather = async () => {
    const getData = await getWeather("seoul");

    setWeatherValue(getData.id);
    setWeatherIcon(getData.icon);
  };

  React.useEffect(() => {
    if (weatherValue) {
      const noteColor = createNoteColor(weatherValue);
      setWeatherColor(noteColor);
    }
  }, [weatherValue]);

  React.useEffect(() => {
    weather();
  }, []);

  return (
    <AppLayout
      bgColor={weatherColor.mainColor}
      fontColor={weatherColor.fontColor}
    >
      <Header
        bgColor={weatherColor.mainColor}
        fontColor={weatherColor.fontColor}
      />
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
      <Footer
        bgColor={weatherColor.mainColor}
        fontColor={weatherColor.fontColor}
      />
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
  padding: 50px 0 60px;
  box-sizing: border-box;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.fontColor};
`;

const AppInnerLayout = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

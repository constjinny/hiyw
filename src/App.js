import * as React from "react";
import { Route } from "react-router-dom";
import styled from "@emotion/styled";
import { Header, Footer, Home, Feed, My, Login } from "./pages";

import { getWeather } from "./api/weather.api";

function App() {
  const [weatherValue, setWeatherValue] = React.useState("");
  const [weatherIcon, setWeatherIcon] = React.useState("");

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
    weather();
  }, []);

  return (
    <AppLayout>
      <div>
        {weatherValue}
        <img src={weatherIcon} alt={weatherValue} />
      </div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/feed" component={Feed} />
      <Route path="/my" component={My} />
      <Route path="/login" component={Login} />
      <Footer />
    </AppLayout>
  );
}

export default App;

const AppLayout = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  background: skyblue;
`;

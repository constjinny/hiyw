import { Route } from "react-router-dom";
import styled from "@emotion/styled";
import { Header, Footer, Home, Feed, My } from "./pages";
import { Button } from "./components";

function App() {
  return (
    <AppLayout>
      <Header />
      <Button />
      <Route exact path="/" component={Home} />
      <Route path="/feed" component={Feed} />
      <Route path="/my" component={My} />
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

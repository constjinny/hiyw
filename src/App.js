import { Route } from "react-router-dom";
import { Button } from "./components/Button";
import styled from "@emotion/styled";
import { Header, Footer, Home, Feed, My } from "./pages";

function App() {
  return (
    <AppLayout>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/feed" component={Feed} />
      <Route path="/my" component={My} />
      <Button />
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

import { Route } from "react-router-dom";
import styled from "@emotion/styled";
<<<<<<< HEAD
import { Header, Footer, Home, Feed, My, Login } from "./pages";
import { Button, SelectBox } from "./components";
=======
import { Header, Footer, Home, Feed, My } from "./pages";
// import { Button, SelectBox } from "./components";
>>>>>>> 5df366fc53b77af6a2002d676318c7f00d2bf0ce

function App() {
  return (
    <AppLayout>
      <Header />
      {/* <Test>
        <h1>test</h1>
        <Button />
        <SelectBox />
      </Test> */}
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
const Test = styled.div`
  background: #fff;
`;

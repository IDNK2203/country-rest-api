import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Country from "./components/Country";
import Header from "./components/Header";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Router>
      <div className="App">
        <Header isActive={isActive} setIsActive={setIsActive} />
        <div className="container">
          <Switch>
            {/* Home page */}
            <Route exact path="/">
              <Home isActive={isActive}></Home>
            </Route>
            {/* country page */}
            <Route path={"/country/:id"}>
              <Country isActive={isActive}></Country>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;

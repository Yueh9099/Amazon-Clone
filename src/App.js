import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./components/Header.css";
import "./components/Home.css";
import ShopCart from "./components/ShopCart";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ShopCart">
          <Header />
          <ShopCart />
        </Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

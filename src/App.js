import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

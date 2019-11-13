import React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../header";

import "./app.css";

// import Spinner from "../spinner";
// import ErrorIndicator from "../error-idicator";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={200} />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} exact />
      </Switch>
    </main>
  );
};
export default App;

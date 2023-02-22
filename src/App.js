import "./App.css";
import React from "react";
import SetPattern from "./pages/setPattern";
import ConfirmPattern from "./pages/confirmPattern";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/confirm-pattern">
          <ConfirmPattern />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

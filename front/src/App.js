import React from "react";
import TrimUrl from "./components/trimmer/Index";
import Url from "./components/trimmer/Show";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            <TrimUrl />
          </Route>
          <Route exact path="/:hash">
            <Url />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Root } from "./pages/root";
import { Library } from "./pages/library";

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/library" component={Library} />
          <Route path="/" component={Root} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

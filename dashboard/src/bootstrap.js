import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";

export function mount(element) {
  ReactDOM.render(<App />, element);
}

if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#_dashboard-root");
  if (rootElement) {
    mount(rootElement);
  }
}

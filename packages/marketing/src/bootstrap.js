import React from "react";
import renderDom from "react-dom";
import App from "./App";
//mount function to start the app

const mount = (el) => {
  renderDom.render(<App />, el);
};
//app running in dev and in isolation
if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#marketing-dev-root");
  if (rootElement) {
    mount(rootElement);
  }
}
//app running in prod or not in isolation
export { mount };

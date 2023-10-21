import React from "react";
import renderDom from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
//mount function to start the app

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory ?? createMemoryHistory();
  const onParentNavigate = ({ pathname: newPathname }) => {
    if (history.location.pathname !== newPathname) {
      history.push(newPathname);
    }
  };
  if (onNavigate) {
    history.listen(onNavigate);
  }
  renderDom.render(
    <Router history={history}>
      <App />
    </Router>,
    el
  );
  return { onParentNavigate };
};
//app running in dev and in isolation
if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#marketing-dev-root");
  if (rootElement) {
    const defaultHistory = createBrowserHistory();
    mount(rootElement, { defaultHistory });
  }
}
//app running in prod or not in isolation
export { mount };

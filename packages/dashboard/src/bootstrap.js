import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

//mount function to start the app

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};
//app running in dev and in isolation
if (process.env.NODE_ENV === "development") {
  const rootElement = document.querySelector("#dashboard-dev-root");
  if (rootElement) {
    mount(rootElement);
  }
}
//app running in prod or not in isolation
export { mount };

import React from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Pricing from "./components/Pricing";
import Album from "./components/Landing";
const App = () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/pricing" component={Pricing} />
            <Route path="/" component={Album} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};

export default App;

import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import Pricing from "./components/Pricing";
import Album from "./components/Landing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});
const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route path="/pricing" component={Pricing} />
          <Route path="/" component={Album} />
        </Switch>
      </StylesProvider>
    </div>
  );
};

export default App;

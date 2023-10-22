import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});
const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={SignUp} />
        </Switch>
      </StylesProvider>
    </div>
  );
};

export default App;

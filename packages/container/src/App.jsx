import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Loader from "./components/Loader";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  const handleSignIn = () => {
    setIsSignedIn(true);
  };
  const handleSignOut = () => {
    setIsSignedIn(false);
  };
  return (
    <BrowserRouter>
      <Switch>
        <StylesProvider generateClassName={generateClassName}>
          <Header signedIn={isSignedIn} onSignOut={handleSignOut} />
          <Suspense fallback={() => <Loader />}>
            <Route path="/auth">
              <AuthLazy onSignIn={handleSignIn} />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Suspense>
        </StylesProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;

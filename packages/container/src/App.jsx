import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Typography from "@material-ui/core/Typography";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const App = () => {
  const generateClassName = createGenerateClassName({
    productionPrefix: "co",
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <Typography align="center" variant="h3" component="h2">
          Welocome to our TierOne SaaS!!
        </Typography>
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;

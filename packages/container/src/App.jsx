import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Typography from "@material-ui/core/Typography";
import Header from "./components/Header";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Typography align="center" variant="h3" component="h2">
        Welocome to our TierOne SaaS!!
      </Typography>
      <MarketingApp />
    </BrowserRouter>
  );
};

export default App;

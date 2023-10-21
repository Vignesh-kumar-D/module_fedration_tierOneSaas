import React from "react";
import MarketingApp from "./components/MarketingApp";
import Typography from "@material-ui/core/Typography";
const App = () => {
  return (
    <>
      <Typography align="center" variant="h1" component="h2">
        Welocome to our TierOne SaaS!!
      </Typography>
      <hr />
      <MarketingApp />
    </>
  );
};

export default App;

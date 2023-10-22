import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  DisableBackground: {
    width: "100%",
    height: "100%",
    position: "fixed",
    background: "#ccc",
    opacity: 0.5,
    zIndex: 1,
  },
}));
const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.DdisableBackground}>
      <LinearProgress />
    </div>
  );
};

export default Loader;

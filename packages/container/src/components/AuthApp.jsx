import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/authApp";

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();
  const onNavigate = ({ pathname: newPathname }) => {
    if (history.location.pathname !== newPathname) {
      history.push(newPathname);
    }
  };
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate,
      initialPath: history.location.pathname,
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, [onSignIn]);
  return <div ref={ref} />;
};

export default AuthApp;

import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/dashboardApp";

const DashboardApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return <div ref={ref} />;
};

export default DashboardApp;

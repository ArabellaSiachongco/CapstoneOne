import { React, useEffect } from "react";

const ScrollWrapper = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>; // Render child components
};

export default ScrollWrapper;

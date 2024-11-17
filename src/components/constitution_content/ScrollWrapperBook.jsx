import React, { useEffect } from "react";

const ScrollWrapperBook = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <>{children}</>;
};

export { ScrollWrapperBook };

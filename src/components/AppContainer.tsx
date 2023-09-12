import React, { PropsWithChildren } from "react";

const AppContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "hsl(229, 24%, 87%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default AppContainer;

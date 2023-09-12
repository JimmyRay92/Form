import React, { PropsWithChildren } from "react";

const FormContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        background: "white",
        border: "1px solid black",
        padding: "0.5rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
};

export default FormContainer;

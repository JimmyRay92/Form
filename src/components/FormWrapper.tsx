import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  description: string;
  children: ReactNode;
};
const FormWrapper = ({ title, description, children }: FormWrapperProps) => {
  return (
    <>
      <div style={{ paddingBottom: "1rem" }}>
        <h3
          style={{
            color: "hsl(213, 96%, 18%)",
            fontWeight: 600,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: "hsl(231, 11%, 63%)",
          }}
        >
          {description}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: 10,
          backgroundColor: "hsl(217, 100%, 97%)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;

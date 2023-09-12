import FormWrapper from "./FormWrapper";

type UserData = {
  name: string;
  email: string;
  phoneNumber: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const titleAndDescription = {
  title: "Personal info",
  description: "Please provide your name, email address, and phone number.",
};

export function UserForm({
  name,
  email,
  phoneNumber,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper
      description={titleAndDescription.description}
      title={titleAndDescription.title}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "1rem",
        }}
      >
        <label style={{ paddingBottom: "0.5rem", color: "hsl(213, 96%, 18%)" }}>
          Name
        </label>
        <input
          placeholder="e.g. Stephen King"
          required
          type="name"
          value={name}
          onChange={(e) => updateFields({ name: e.target.value })}
          style={{
            color: "hsl(231, 11%, 63%)",
            borderRadius: "5px",
            fontSize: "14px",
            minHeight: "30px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "1rem",
        }}
      >
        <label style={{ paddingBottom: "0.5rem", color: "hsl(213, 96%, 18%)" }}>
          Email Address
        </label>
        <input
          placeholder="e.g. stephenking@lorem.com"
          required
          type="text"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          style={{
            color: "hsl(231, 11%, 63%)",
            borderRadius: "5px",
            fontSize: "14px",
            minHeight: "30px",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "1rem",
        }}
      >
        <label style={{ paddingBottom: "0.5rem", color: "hsl(213, 96%, 18%)" }}>
          Phone
        </label>
        <input
          placeholder="e.g. +1 234 567 890"
          required
          type="text"
          value={phoneNumber}
          onChange={(e) => updateFields({ phoneNumber: e.target.value })}
          style={{
            color: "hsl(231, 11%, 63%)",
            borderRadius: "5px",
            fontSize: "14px",
            minHeight: "30px",
          }}
        />
      </div>
    </FormWrapper>
  );
}

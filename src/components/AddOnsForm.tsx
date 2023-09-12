const addOnsData: addOns[] = [
  { name: "online service", description: "access to multiplayer games" },
  { name: "larger storage", description: "extra 1tb of cloud save" },
  { name: "customizable profile", description: "custom theme on your profile" },
];

type addOns = {
  name: string;
  description: string;
};
const AddOnsForm = () => {
  return (
    <>
      <h2>Pick add ons</h2>
      <p>Add-ons help enhance your gaming experience</p>
      {addOnsData.map(({ name, description }) => {
        return (
          <div key={name}>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default AddOnsForm;

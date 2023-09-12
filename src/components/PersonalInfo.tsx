import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  onValid: (onValid: boolean) => void;
  onDataSubmit: (data: PersonalInfo | undefined) => void;
  personalData: PersonalInfo | undefined;
}

const schema = z.object({
  name: z.string().min(1, "This field is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.number({ invalid_type_error: "This field is required" }),
});

type PersonalInfo = z.infer<typeof schema>;

const PersonalInfo = ({ onValid, onDataSubmit, personalData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(schema),
    defaultValues: personalData,
  });

  const onSubmit = (data: PersonalInfo) => {
    if (data) {
      onDataSubmit(data);
      onValid(isValid);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="step__heading">Personal Info</h2>
      <p className="step__info">
        Please provide your name, email address, and phone number
      </p>
      <div className="step__container">
        <div className="step__label">
          <label className="step__heading">Name</label>
          {errors.name && <p className="step__error">{errors.name?.message}</p>}
        </div>
        <input
          {...register("name")}
          className={`step__input ${errors.name ? "step__error-input" : ""}`}
          placeholder="e.g Stephen King"
          type="text"
        />
      </div>
      <div className="step__container">
        <div className="step__label">
          <label className="step__heading">Email Address</label>
          {errors.email && (
            <p className="step__error">{errors.email?.message}</p>
          )}
        </div>
        <input
          {...register("email")}
          className={`step__input ${errors.email ? "step__error-input" : ""}`}
          placeholder="e.g stephenking@lorem.com"
          type="email"
        />
      </div>
      <div className="step__container">
        <div className="step__label">
          <label className="step__heading">Phone Number</label>
          {errors.phone && (
            <p className="step__error">{errors.phone?.message}</p>
          )}
        </div>
        <input
          {...register("phone", { valueAsNumber: true })}
          className={`step__input ${errors.phone ? "step__error-input" : ""}`}
          placeholder="e.g. +1 234 567 890"
          type="number"
        />
      </div>

      <button className="btn__next" type="submit">
        Next Step
      </button>
    </form>
  );
};

export default PersonalInfo;

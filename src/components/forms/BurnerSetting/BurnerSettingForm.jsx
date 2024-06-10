import { useForm } from "react-hook-form";
import "./burnerSettingForm.scss"

export const BurnerSettingForm = () => {
  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label htmlFor="temperature">Wartość nastawy temperatury</label>
        <input
          id="temperature"
          type="number"
          placeholder="Wprowadź "
          {...register("temperature", {
            required: {
              value: true,
              message: "Temperatura jest wymagana",
            },
            validate: {},
          })}
        />
        <p className="error">{errors.temperature?.message}</p>
      </div>
      <div className="input-group">
        <label htmlFor="time">Wartośc czegoś</label>
        <input
          id="time"
          type="number"
          placeholder="Wprowadź "
          {...register("time", {
            required: {
              value: true,
              message: "Time jest wymagana",
            },
            validate: {},
          })}
        />
        <p className="error">{errors.time?.message}</p>
      </div>
      <div className="input-group">
        <input className="submit" type="submit" />
      </div>
    </form>
  );
};

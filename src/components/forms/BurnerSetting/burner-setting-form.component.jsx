import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import "./burner-setting-form.scss";

export const BurnerSettingForm = () => {
  const { register, control, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const postData = async (data) => {
    try {
      const response = await fetch("https://example.com/profile", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onSubmit = (data) => console.log(data);
  // const onSubmit = (data) => postData(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="humidity">Wartość wilgotności kukurydzy</label>
          <input
            id="humidity"
            type="number"
            step={0.1}
            placeholder="Wprowadź wartość wilgotności kukurydzy"
            {...register("humidity", {
              required: {
                value: true,
                message: "Wilgotność jest wymagana",
              },
              min: {
                value: 12,
                message:
                  "Wartośc wilglotności kukurydzy musi być z przedziału od 12 do 17",
              },
              max: {
                value: 17,
                message:
                  "Wartośc wilglotności kukurydzy musi być z przedziału od 12 do 17",
              },
              validate: {},
            })}
          />
          <p className="error">{errors.humidity?.message}</p>
        </div>

        <div className="input-group">
          <label htmlFor="time">Wartośc czasu postoju {`[s]`}</label>
          <input
            id="time"
            type="number"
            placeholder="Wprowadź czas postoju"
            {...register("time", {
              required: {
                value: true,
                message: "Czas postoju jest wymagany",
              },
              min: {
                value: 60,
                message:
                  "Wartośc czasu postoju musi być z przedziału od 60 do 200 sekund",
              },
              max: {
                value: 200,
                message:
                  "Wartośc czasu postoju musi być z przedziału od 60 do 200 sekund",
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
      {/* <DevTool control={control}/> */}
    </>
  );
};

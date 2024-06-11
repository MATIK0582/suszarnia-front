import React from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { cornDataAtom } from "../../../pages/HomePage/home.page";
import "./burner-setting-form.scss";

export const BurnerSettingForm = () => {
  const [cornData, setCornData] = useAtom(cornDataAtom);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      humidity: 14,
      u: 100,
      pidP: -40,
      pidI: -0.3,
      pidD: -0.1,
      mode: "us",
      steps: 2000,
    },
  });

  const onSubmit = async (data) => {
    const { humidity, u, pidP, pidI, pidD, mode, steps } = data;

    try {
      let queryParams = `step=${steps}&mode=${mode}&setpoint=${humidity}&Kp=${pidP}&Ki=${pidI}&Kd=${pidD}`;

      if (mode === 'non_us') {
        queryParams += `&u=${u}`;
      }

      const response = await fetch(`http://localhost:5000/test?${queryParams}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();
      setCornData(result);
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label htmlFor="humidity">Wartość wilgotności wyjściowej kukurydzy</label>
            <input
                id="humidity"
                type="number"
                step={0.1}
                placeholder="Wprowadź wartość wilgotności kukurydzy"
                {...register("humidity", {
                  required: "Wilgotność jest wymagana",
                  min: {
                    value: 12,
                    message: "Wartość wilgotności kukurydzy musi być z przedziału od 12 do 17",
                  },
                  max: {
                    value: 17,
                    message: "Wartość wilgotności kukurydzy musi być z przedziału od 12 do 17",
                  },
                })}
            />
            <p className="error">{errors.humidity?.message}</p>
          </div>

          <div className="input-group">
            <label htmlFor="u">Wartość czasu postoju [s]</label>
            <input
                id="u"
                type="number"
                placeholder="Wprowadź czas postoju"
                {...register("u", {
                  required: "Czas postoju jest wymagany",
                  min: {
                    value: 60,
                    message: "Wartość czasu postoju musi być z przedziału od 60 do 200 sekund",
                  },
                  max: {
                    value: 200,
                    message: "Wartość czasu postoju musi być z przedziału od 60 do 200 sekund",
                  },
                })}
            />
            <p className="error">{errors.u?.message}</p>
          </div>

          <div className="input-group">
            <label htmlFor="pidP">Wartość PID P</label>
            <input
                id="pidP"
                type="number"
                step={0.1}
                placeholder="Wprowadź wartość PID P"
                {...register("pidP", {
                  required: "PID P jest wymagany",
                })}
            />
            <p className="error">{errors.pidP?.message}</p>
          </div>

          <div className="input-group">
            <label htmlFor="pidI">Wartość PID I</label>
            <input
                id="pidI"
                type="number"
                step={0.1}
                placeholder="Wprowadź wartość PID I"
                {...register("pidI", {
                  required: "PID I jest wymagany",
                })}
            />
            <p className="error">{errors.pidI?.message}</p>
          </div>

          <div className="input-group">
            <label htmlFor="pidD">Wartość PID D</label>
            <input
                id="pidD"
                type="number"
                step={0.1}
                placeholder="Wprowadź wartość PID D"
                {...register("pidD", {
                  required: "PID D jest wymagany",
                })}
            />
            <p className="error">{errors.pidD?.message}</p>
          </div>

          <div className="input-group mode-group">
            <label htmlFor="mode">Tryb pracy</label>
            <div className="mode-options">
              <label>
                <input
                    type="radio"
                    value="us"
                    {...register("mode", { required: true })}
                    defaultChecked
                />
                Automatyczny
              </label>
              <label>
                <input
                    type="radio"
                    value="non_us"
                    {...register("mode", { required: true })}
                />
                Ręczny
              </label>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="steps">Kroki</label>
            <input
                id="steps"
                type="number"
                step={1}
                placeholder="Wprowadź ilość kroków"
                {...register("steps", {
                  required: "Liczba kroków jest wymagana",
                  min: {
                    value: 100,
                    message: "Wartość kroków musi być większa niż 100",
                  },
                  max: {
                    value: 5000,
                    message: "Wartość kroków musi być mniejsza niż 5000",
                  },
                })}
            />
            <p className="error">{errors.steps?.message}</p>
          </div>

          <div className="input-group">
            <input className="submit" type="submit" />
          </div>
        </form>
      </>
  );
};

import React from "react";

import { HumidityChart } from "../../components/charts/Humidity/humidity-chart.component";
import { BurnerSettingForm } from "../../components/forms/BurnerSetting/burner-setting-form.component";
import { ChartContainer } from "../../components/charts/ChartContainer/chart-container.component";

export const HomePage = () => {
  return (
    <>
      <HumidityChart fetchAddress="http://localhost:5000/test?setpoint=16&mode=us&step=200&u=200"/>
      <BurnerSettingForm />
      <ChartContainer fetchAddress="http://localhost:5000/test?setpoint=16&mode=us&step=200&u=200"/>
    </>
  );
};

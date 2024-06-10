import React from "react";

import { HumidityChart } from "../../components/charts/Humidity/humidity-chart.component";
import { BurnerSettingForm } from "../../components/forms/BurnerSetting/burner-setting-form.component";

export const HomePage = () => {
  return (
    <>
      <HumidityChart />
      <BurnerSettingForm />
    </>
  );
};

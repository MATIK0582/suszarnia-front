import React from "react";

import { HumidityChart } from "../../components/charts/Humidity/humidity-chart.component";
import { BurnerSettingForm } from "../../components/forms/BurnerSetting/burner-setting-form.component";
import { ChartContainer } from "../../components/charts/ChartContainer/chart-container.component";
import { atom } from "jotai";
import { UChart } from "../../components/charts/Humidity/u-chart-component";

export const cornDataAtom = atom([]);

export const HomePage = () => {
  return (
    <>
      <div className="grid-2_xs-1">
        <div className="col" key="1">
          <UChart />
        </div>
        <div className="col" key="1">
          <HumidityChart />
        </div>
      </div>

      <BurnerSettingForm />
      <ChartContainer />
    </>
  );
};

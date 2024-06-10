import React from 'react'

import { BurnerSettingForm } from '../../components/forms/BurnerSetting/burner-setting-form.component'
import { HumidityChart } from '../../components/charts/Humidity/humidity-chart.component'

export const HomePage = () => {
  return (
    <>
      <HumidityChart />
      <BurnerSettingForm />
    </>
  )
}

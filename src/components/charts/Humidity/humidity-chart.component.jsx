import React, { PureComponent, useEffect, useState } from "react";
import { THIRTY_SECONDS_IN_MILLISECONDS } from "../../../constans/constans";
import { CustomLineChart } from "../custom-line-chart.component";
import "./humidity-chart.scss";

export const HumidityChart = ({ fetchAddress }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(fetchAddress);
      const data = await response.json();
      console.log(data.data);

      setData(data.data);
    } catch (error) {
      console.error(`Something bad happened: ${error}`);
    }
  };

  useEffect(() => {
    let isValid = true;
    let interval;

    const getData = async () => {
      await fetchData();
      if (!isValid) {
        return;
      }

      interval = setInterval(async () => {
        console.log("Fetching new data");
        await fetchData();
      }, THIRTY_SECONDS_IN_MILLISECONDS);
    };

    getData();

    return () => {
      isValid = false;

      if (interval) {
        clearInterval(interval);
      }
      console.log(interval);
    };
  }, []);

  return (
    <CustomLineChart
      id="main"
      width="50%"
      data={data}
      xAxisDataKey="index"
      firstLineDataKey="y"
      secondLineDataKey="u"
      title="AAAAAAAAAA"
    />
  );
};

import React, { useEffect, useState } from "react";
import { THIRTY_SECONDS_IN_MILLISECONDS } from "../../../constans/constans";
import { CustomLineChart } from "../custom-line-chart.component";

export const ChartContainer = ({ fetchAddress }) => {
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

  const chartParams = [
    { firstLineDataKey: "x0", title: "Wesołej" },
    { firstLineDataKey: "x1", title: "Zabawy" },
    { firstLineDataKey: "x2", title: "Ide" },
    { firstLineDataKey: "x3", title: "Spać" },
    { firstLineDataKey: "x4", title: "Widzimy" },
    { firstLineDataKey: "x5", title: "Się" },
    { firstLineDataKey: "x6", title: "o" },
    { firstLineDataKey: "x7", title: "10" },
    { firstLineDataKey: "x8", title: "EEEE" },
    { firstLineDataKey: "x9", title: "EEEE" },
    { firstLineDataKey: "x10", title: "EEEE" },
    { firstLineDataKey: "x11", title: "EEEE" },
    { firstLineDataKey: "x12", title: "EEEE" },
    { firstLineDataKey: "x13", title: "EEEE" },
    { firstLineDataKey: "x14", title: "EEEE" },
    { firstLineDataKey: "x15", title: "EEEE" },
  ];

  return (
    <div class="grid-2_xs-1">
      {chartParams.map((param, index) => (
        <div className="col" key={index}>
          <CustomLineChart
            width="100%"
            data={data}
            xAxisDataKey="index"
            firstLineDataKey={param.firstLineDataKey}
            secondLineDataKey="y"
            title={param.title}
          />
        </div>
      ))}
    </div>
  );
};

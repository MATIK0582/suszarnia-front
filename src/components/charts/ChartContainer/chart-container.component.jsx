import React, { useEffect, useState } from "react";
import { THIRTY_SECONDS_IN_MILLISECONDS } from "../../../constans/constans";
import { CustomLineChart } from "../custom-line-chart.component";
import {useAtom} from "jotai";
import {cornDataAtom} from "../../../pages/HomePage/home.page";

export const ChartContainer = ({ fetchAddress }) => {

  const [cornData, setCornData] = useAtom(cornDataAtom);


  // const [data, setData] = useState([]);
  //
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(fetchAddress);
  //     const data = await response.json();
  //     console.log(data.data);
  //
  //     setData(data.data);
  //   } catch (error) {
  //     console.error(`Something bad happened: ${error}`);
  //   }
  // };

  // useEffect(() => {
  //   let isValid = true;
  //   let interval;
  //
  //   const getData = async () => {
  //     await fetchData();
  //     if (!isValid) {
  //       return;
  //     }
  //
  //     interval = setInterval(async () => {
  //       console.log("Fetching new data");
  //       await fetchData();
  //     }, THIRTY_SECONDS_IN_MILLISECONDS);
  //   };
  //
  //   getData();

  //   return () => {
  //     isValid = false;
  //
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //     console.log(interval);
  //   };
  // }, []);

  const chartParams = [
    { firstLineDataKey: "x0", secondLineDataKey: "xDane0", title: "Wesołej" },
    { firstLineDataKey: "x1", secondLineDataKey: "xDane1", title: "Zabawy" },
    { firstLineDataKey: "x2", secondLineDataKey: "xDane2", title: "Ide" },
    { firstLineDataKey: "x3", secondLineDataKey: "xDane3", title: "Spać" },
    { firstLineDataKey: "x4", secondLineDataKey: "xDane4", title: "Widzimy" },
    { firstLineDataKey: "x5", secondLineDataKey: "xDane5", title: "Się" },
    { firstLineDataKey: "x6", secondLineDataKey: "xDane6", title: "o" },
    { firstLineDataKey: "x7", secondLineDataKey: "xDane7", title: "10" },
    { firstLineDataKey: "x8", secondLineDataKey: "xDane8", title: "EEEE" },
    { firstLineDataKey: "x9", secondLineDataKey: "xDane9", title: "EEEE" },
    { firstLineDataKey: "x10", secondLineDataKey: "xDane10", title: "EEEE" },
    { firstLineDataKey: "x11", secondLineDataKey: "xDane11", title: "EEEE" },
    { firstLineDataKey: "x12", secondLineDataKey: "xDane12", title: "EEEE" },
    { firstLineDataKey: "x13", secondLineDataKey: "xDane13", title: "EEEE" },
    { firstLineDataKey: "x14", secondLineDataKey: "xDane14", title: "EEEE" },
    { firstLineDataKey: "x15", secondLineDataKey: "xDane15", title: "EEEE" },
  ];


  const secondLine = [
    { firstLineDataKey: "xDane0", title: "Wesołej" },
    { firstLineDataKey: "xDane1", title: "Zabawy" },
    { firstLineDataKey: "xDane2", title: "Ide" },
    { firstLineDataKey: "xDane3", title: "Spać" },
    { firstLineDataKey: "xDane4", title: "Widzimy" },
    { firstLineDataKey: "xDane5", title: "Się" },
    { firstLineDataKey: "xDane6", title: "o" },
    { firstLineDataKey: "xDane7", title: "10" },
    { firstLineDataKey: "xDane8", title: "EEEE" },
    { firstLineDataKey: "xDane9", title: "EEEE" },
    { firstLineDataKey: "xDane10", title: "EEEE" },
    { firstLineDataKey: "xDane11", title: "EEEE" },
    { firstLineDataKey: "xDane12", title: "EEEE" },
    { firstLineDataKey: "xDane13", title: "EEEE" },
    { firstLineDataKey: "xDane14", title: "EEEE" },
    { firstLineDataKey: "xDane15", title: "EEEE" },
  ];

  return (
      cornData &&
    <div class="grid-2_xs-1">
      {chartParams.map((param, index) => (
        <div className="col" key={index}>
          <CustomLineChart
            width="100%"
            data={cornData.data}
            xAxisDataKey="index"
            firstLineDataKey={param.firstLineDataKey}
            secondLineDataKey={param.secondLineDataKey}
            // secondLineDataKey="y"
            title={param.firstLineDataKey}
          />
        </div>
      ))}
    </div>
  );
};

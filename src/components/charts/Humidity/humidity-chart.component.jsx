import React, { PureComponent, useEffect, useState } from "react";
import { THIRTY_SECONDS_IN_MILLISECONDS } from "../../../constans/constans";
import { CustomLineChart } from "../custom-line-chart.component";
import "./humidity-chart.scss";
import {useAtom} from "jotai";
import {cornDataAtom} from "../../../pages/HomePage/home.page";

export const HumidityChart = ({ fetchAddress }) => {
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
  //   }

    //   interval = setInterval(async () => {
    //     console.log("Fetching new data");
    //     await fetchData();
    //   }, THIRTY_SECONDS_IN_MILLISECONDS);
    // };

    // getData();

    // return () => {
    //   isValid = false;
    //
    //   if (interval) {
    //     clearInterval(interval);
    //   }
    //   console.log(interval);
    // };
  // }, [fetchAddress]);

  return (
        cornData &&
            <CustomLineChart
                id="main"
                width="100%"
                data={cornData.data}
                xAxisDataKey="index"
                firstLineDataKey="y"
                secondLineDataKey="xDane13"
                title="Humidity Data"
            />

  );
};

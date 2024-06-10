import React, { PureComponent, useEffect, useState } from "react";
import { THIRTY_SECONDS_IN_MILLISECONDS } from "../../../constans/constans";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const HumidityChart = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/MATIK0582/suszarnia-front/db"
      );
      const data = await response.json();
      console.log(data);

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
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 9 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
};

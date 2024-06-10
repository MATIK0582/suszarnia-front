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

  useEffect(() => {
    const interval = setInterval(() => {
        fetch('https://my-json-server.typicode.com/MATIK0582/suszarnia-front/db')
          .then((res) => { return res.json(); })
          .then((data) => {
            console.log(data);
            setData(data.data) });
    }, THIRTY_SECONDS_IN_MILLISECONDS)

    return () => {
		clearInterval(interval);
	};
  }, []);

  return (
    <LineChart
      width={500}
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

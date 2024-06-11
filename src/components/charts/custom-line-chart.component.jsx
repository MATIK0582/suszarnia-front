import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const CustomLineChart = ({
  width,
  data,
  xAxisDataKey,
  firstLineDataKey,
  secondLineDataKey,
  title="Tytuł",
  ...rest
}) => {
  return (
    <ResponsiveContainer
      width={width}
      aspect={6.0 / 3.0}
      className={"container"}
      {...rest}
    >
      <LineChart
        // width={1200}
        // height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <text x={"50%"} y={20} fill="black" textAnchor="middle" dominantBaseline="central">
            <tspan fontSize="28">{title}</tspan>
        </text>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxisDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={firstLineDataKey} stroke="#8884d8" />
        <Line type="monotone" dataKey={secondLineDataKey} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

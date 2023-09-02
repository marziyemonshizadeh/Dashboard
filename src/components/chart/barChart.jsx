import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
export default function barChart({ title, data, dataKey, XAxisDataKey, fill }) {
  return (
    <div className="my-3 p-2 card">
      <h3 className="mb-3 text-muted">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <BarChart
          width={150}
          height={40}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Bar dataKey={dataKey} fill={fill} />
          <XAxis dataKey={XAxisDataKey} />
          <YAxis dx={-40} />
          <Legend />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
export default function chart({ title, data, dataKey, grid }) {
  return (
    <div className="my-3 p-2 card">
      <h3 className="mb-3 text-muted">{title}</h3>
      {/* responsive chart aspect=height chart */}
      <ResponsiveContainer width="100%" aspect={4}>
        {/* chart data */}
        <LineChart data={data}>
          {/* month */}
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          {/* hover */}
          <Tooltip />
          {/* dash */}
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

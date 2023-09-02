import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
export default function chart({ title, data, dataKey1, dataKey2, grid }) {
  return (
    <div className="my-3 p-2 card">
      <h3 className="mb-3 text-muted">{title}</h3>
      {/* responsive chart aspect=height chart */}
      <ResponsiveContainer width="100%" aspect={4}>
        {/* chart data */}
        <LineChart data={data}>
          {/* month */}
          <XAxis dataKey="month" stroke="#5550bd" dy={8} />
          <Line
            type="monotone"
            dataKey={dataKey1}
            stroke="#5550bd"
            strokeWidth={2}
          />
          {dataKey2 && (
            <Line
              type="monotone"
              dataKey={dataKey2}
              stroke="#E046AC"
              strokeWidth={2}
            />
          )}
          {/* hover */}
          <Tooltip />
          {/* dash */}
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

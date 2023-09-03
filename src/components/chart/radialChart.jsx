import React from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
export default function RadialChart({ title, data, dataKey }) {
  return (
    <div className="my-3 p-2 card">
      <h3 className="mb-3">{title}</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey={dataKey}
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{
              top: "50%",
              right: 0,
              transform: "translate(0, -50%)",
              lineHeight: "24px",
            }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

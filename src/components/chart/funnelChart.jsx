import React from "react";
import {
  Funnel,
  FunnelChart,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
export default function funnelChart({ title, data, dataKey1, dataKey2 }) {
  return (
    <div className="my-3 p-md-2 card">
      <h3 className="mb-3 text-muted">{title}</h3>
      <ResponsiveContainer width="100%" aspect={2}>
        <FunnelChart>
          <Tooltip />
          <Funnel dataKey={dataKey1} data={data} isAnimationActive>
            <LabelList fill="#000" stroke="none" dataKey={dataKey2} />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
}

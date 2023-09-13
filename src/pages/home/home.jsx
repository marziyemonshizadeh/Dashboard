import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import React from "react";
import LineChart from "../../components/chart/lineChart";
import Features from "../../components/features/features";
import WidgetLg from "../../components/widgetLg/widgetLg";
import WidgetSm from "../../components/widgetSm/widgetSm";
import { xAxisData } from "../../datas";

export default function home() {
  return (
    <div className="mx-2" style={{ height: "150vh" }}>
      {/* features */}
      <div class="text-center">
        <div class="row gap-md-0 gap-3">
          <div class="col-12 col-md-4">
            <Features title="هزینه" price="2,415" action="2.4+">
              <ArrowUpwardRoundedIcon className="text-success mb-1 mx-1" />
            </Features>
          </div>
          <div class="col-12 col-md-4">
            <Features title="فروش" price="2,415" action="1.4-">
              <ArrowDownwardRoundedIcon className="text-danger mb-1 mx-1" />
            </Features>
          </div>
          <div class="col-12 col-md-4">
            <Features title="درآمد" price="2,415" action="11.4-">
              <ArrowDownwardRoundedIcon className="text-danger mb-1 mx-1" />
            </Features>
          </div>
        </div>
      </div>
      {/* chart */}
      <LineChart grid title="فروش ماهانه" data={xAxisData} dataKey1="Sale" />
      {/* widgets */}
      <div class="row gap-md-0 gap-2 ">
        <div class="col col-md-8">
          <WidgetLg />
        </div>
        <div class="col col-md-4  ">
          <WidgetSm />
        </div>
      </div>
    </div>
  );
}

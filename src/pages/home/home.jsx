import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Chart from "../../components/chart/chart";
import Features from "../../components/features/features";
import WidgetLg from "../../components/widgetLg/widgetLg";
import WidgetSm from "../../components/widgetSm/widgetSm";
import { xAxisData } from "../../datas";

export default function home() {
  return (
    <div className="mx-2">
      {/* features */}
      <div class="container text-center">
        <div class="row gap-md-0 gap-2">
          <div class="col-12 col-md-4">
            <Features title="هزینه" price="2,415" action="2.4+">
              <FaArrowUp className="text-success mb-1 mx-1" />
            </Features>
          </div>
          <div class="col-12 col-md-4">
            <Features title="فروش" price="2,415" action="1.4-">
              <FaArrowDown className="text-danger mb-1 mx-1" />
            </Features>
          </div>
          <div class="col-12 col-md-4">
            <Features title="درآمد" price="2,415" action="11.4-">
              <FaArrowDown className="text-danger mb-1 mx-1" />
            </Features>
          </div>
        </div>
      </div>
      {/* chart */}
      <Chart grid title="فروش ماهانه" data={xAxisData} dataKey="Sale" />
      {/* widgets */}
      <div class="row gap-md-0 gap-2">
        <div class="col col-md-8">
          <WidgetLg />
        </div>
        <div class="col col-md-4">
          <WidgetSm />
        </div>
      </div>
    </div>
  );
}

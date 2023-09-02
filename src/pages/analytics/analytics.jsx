import React from "react";
import LineChart from "../../components/chart/lineChart";
import RadialChart from "../../components/chart/radialChart";
import { AnnualSalesOfEachProduct, xAxisData } from "../../datas";

import BarChart from "../../components/chart/barChart";
export default function analytics() {
  return (
    <>
      <div className="container">
        <LineChart
          grid
          title="فروش ماهانه"
          data={xAxisData}
          dataKey1="Sale"
          dataKey2="expenditure"
        />
        <div class="row">
          <div class="col-6">
            <BarChart
              title="میزان فروش سال 1402"
              data={xAxisData}
              dataKey="Sale"
              XAxisDataKey="month"
              fill="#8884d8"
            />
          </div>
          <div class="col-6">
            <RadialChart
              title="فروش سالانه هر محصول"
              data={AnnualSalesOfEachProduct}
              dataKey="count"
            />
          </div>
        </div>
      </div>
    </>
  );
}

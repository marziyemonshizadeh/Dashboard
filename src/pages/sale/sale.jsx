import React from "react";
import AreaChart from "../../components/chart/areaChart";
import FunnelChart from "../../components/chart/funnelChart";
import PieChart from "../../components/chart/pieChart";
import { AnnualSalesOfEachProduct } from "../../datas";

export default function sale() {
  return (
    <>
      <div class="row">
        <div class="col-12 col-md-6">
          <FunnelChart
            title="فروش سالانه هر محصول"
            data={AnnualSalesOfEachProduct}
            dataKey1="count"
            dataKey2="name"
          />
        </div>
        <div class="col-12 col-md-6">
          <PieChart title="فروش سالانه هر محصول" />
        </div>
      </div>
      <AreaChart title="فروش سالانه هر محصول" />
    </>
  );
}

import React from "react";
import Chart from "../../components/chart/lineChart";
import { productsData } from "../../datas";
export default function product() {
  return (
    <>
      <header className="d-flex justify-content-between">
        <h2 className="fw-bolder">محصول</h2>
        <button type="button" className="btn btn-success">
          Success
        </button>
      </header>
      <div className="row gap-md-0 gap-2">
        <div className="col col-md-6">
          <Chart title="فروش این ماه" data={productsData} dataKey1="sales" />
        </div>
        <div className="col col-md-6">
          <div className="my-3 p-2 card">
            <h3 className="mb-3 ">msi</h3>
            <div className="d-flex justify-content-between p-1">
              <div>آی دی</div>
              <div>2</div>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>نام</div>
              <div>Dell</div>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>قیمت</div>
              <div>$90000</div>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>وضعیت</div>
              <div>Yes</div>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>موجودیت</div>
              <div>No</div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="d-flex justify-content-between">
          <img
            src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/brand-compare/cat-page-brand-compare-xps-13-9320-sl-front-800x550.png?fmt=png-alpha&wid=800&hei=550"
            alt="product"
            className="img-fluid"
          />
          <div className="d-flex flex-column justify-content-start gap-2 m-5">
            <h2>نام محصول </h2>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="msi laptop"
              value=""
              required=""
            />
            <label for="country" class="form-label">
              موجودیت
            </label>
            <select class="form-select" id="country" required="">
              <option value="">yes</option>
              <option>no</option>
            </select>

            <label for="country" class="form-label">
              وضعیت
            </label>
            <select class="form-select" id="country" required="">
              <option value="">yes</option>
              <option>no</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

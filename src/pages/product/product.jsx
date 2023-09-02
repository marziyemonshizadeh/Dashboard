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
            <h3 className="mb-3 text-muted">msi</h3>
            <div className="d-flex justify-content-between p-1">
              <div>ID</div>
              <div className="text-muted">2</div>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>NAME</div>
              <div className="text-muted">Dell</div>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>Sales</div>
              <div className="text-muted">$90000</div>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>Active</div>
              <div className="text-muted">Yes</div>
            </div>
            <div className="d-flex justify-content-between p-1">
              <div>In Stock</div>
              <div className="text-muted">No</div>
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
            <h2 className="text-muted">نام محصول </h2>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="msi laptop"
              value=""
              required=""
            />
            <label for="country" class="form-label">
              in stock
            </label>
            <select class="form-select" id="country" required="">
              <option value="">yes</option>
              <option>no</option>
            </select>
            <div class="invalid-feedback">يرجى اختيار بلد صحيح.</div>
            <label for="country" class="form-label">
              active
            </label>
            <select class="form-select" id="country" required="">
              <option value="">yes</option>
              <option>no</option>
            </select>
            <div class="invalid-feedback">يرجى اختيار بلد صحيح.</div>
          </div>
        </div>
      </div>
    </>
  );
}

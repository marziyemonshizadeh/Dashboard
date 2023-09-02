import React from "react";
import { transactions } from "../../datas";

export default function WidgetLg() {
  return (
    <div className="card p-md-3 my-2" style={{ minHeight: "330px" }}>
      <div class="card-body">
        <p class="card-title">آخرین معاملات</p>
        <table class="card-text table table-borderless">
          <thead>
            <tr>
              <th scope="col">نام مشتری</th>
              <th scope="col">تاریخ</th>
              <th scope="col">مبلغ</th>
              <th scope="col">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((i) => (
              <tr>
                <td>{i.customer}</td>
                <td>{i.date}</td>
                <td>${i.amount}</td>
                <td>{i.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

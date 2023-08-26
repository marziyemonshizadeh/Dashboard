import React from "react";
import SidebarItems from "./sidebarItems.js";

export default function sidebar() {
  return (
    <div className="container">
      <p className="my-2 text-muted fw-bold">داشبورد</p>
      <ul class="list-group list-group-flush">
        {SidebarItems[0].map((i, index) => {
          return (
            <li class="list-group-item" key={index}>
              <i.icon className="ms-3" />
              {i.text}
            </li>
          );
        })}
      </ul>
      <p className="my-2 text-muted fw-bold">منوی سریع</p>
      <ul class="list-group list-group-flush">
        {SidebarItems[1].map((i, index) => {
          return (
            <li class="list-group-item" key={index}>
              <i.icon className="ms-3" />
              {i.text}
            </li>
          );
        })}
      </ul>
      <p className="my-2 text-muted fw-bold">اطلاعیه</p>
      <ul class="list-group list-group-flush">
        {SidebarItems[2].map((i, index) => {
          return (
            <li class="list-group-item" key={index}>
              <i.icon className="ms-3" />
              {i.text}
            </li>
          );
        })}
      </ul>
      <p className="my-2 text-muted fw-bold">کارکنان</p>
      <ul class="list-group list-group-flush">
        {SidebarItems[3].map((i, index) => {
          return (
            <li class="list-group-item" key={index}>
              <i.icon className="ms-3" />
              {i.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
